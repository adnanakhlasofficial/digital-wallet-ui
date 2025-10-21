import { env } from "@/configs/env";
import axios, { type AxiosRequestConfig } from "axios";

export interface IPendingRequest {
  resolve: (value: unknown) => void;
  reject: (value: unknown) => void;
}

export const axiosInstance = axios.create({
  baseURL: env.VITE_BASE_URL,
  withCredentials: true,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// steps for refreshing pending request while token expired
let isRefreshingToken = false;

let pendingRequestQueue = [] as IPendingRequest[];

const processPendingRequests = (error: unknown) => {
  pendingRequestQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(null);
    }
  });

  pendingRequestQueue = [];
};

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const genuineRequest = error.config as AxiosRequestConfig;

    if (
      error.response.status === 400 &&
      error.response.data.message === "jwt expired"
    ) {
      if (isRefreshingToken) {
        return new Promise((resolve, reject) => {
          pendingRequestQueue.push({ resolve, reject });
        })
          .then(() => axiosInstance(genuineRequest))
          .catch((error) => Promise.reject(error));
      }

      isRefreshingToken = true;
      try {
        await axiosInstance.post("/auth/refresh-token");
        processPendingRequests(null);
        return axiosInstance(genuineRequest);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        isRefreshingToken = false;
      }
    }

    return Promise.reject(error);
  }
);
