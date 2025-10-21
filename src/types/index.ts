export interface MongooseErrorDetail {
  code?: number;
  keyValue?: Record<string, string>;
  name?: string;
  message?: string;
}

export interface ApiErrorResponse {
  status: number;
  data: {
    success: boolean;
    message: string;
    error: MongooseErrorDetail | Record<string, string>;
    stack?: string;
  };
}
