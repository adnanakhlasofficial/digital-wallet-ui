import type { AxiosError } from "axios";

export type TWalletStatus = "Active" | "Blocked" | "Suspended";
export type TUserStatus = "Admin" | "User" | "Agent";
export type TAgentRequestStatus = "Pending" | "Accepted" | "Rejected";

export type TTransactionType =
  | "Send Bonus"
  | "Send Money"
  | "Cash In"
  | "Cash Out"
  | "Agent Transfer";

export interface IUserWallet {
  balance: number;
  email: string;
  status: TWalletStatus;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
  role: TUserStatus;
  profilePicture: string | null;
  nid: string;
  dateOfBirth: Date | string;
  isVerified: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  wallet?: IUserWallet;
}

export interface IWallet {
  balance: number;
  email: string;
  phone: string;
  status: TWalletStatus;
  createdAt: string;
  updatedAt: string;
  name: string;
  role: TUserStatus;
  nid: string;
}

export interface ITransaction {
  trxId: string;
  transactionType: TTransactionType;
  sender: string;
  receiver: string;
  amount: number;
  fee: number | null;
  commission: number | null;
  netAmount: number | null;
  createdAt: Date | string; // ISO date string
  senderName: string;
  receiverName: string;
}

export interface ApiErrorResponse {
  status: number; // top-level HTTP status (e.g. 500)
  data: {
    success: boolean;
    message: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
  };
}

export type ModifiedAxiosError = AxiosError<ApiErrorResponse>;

export interface IAgentRequest {
  _id: string;
  email: string;
  message: string;
  status: TAgentRequestStatus;
  createdAt: string;
  updatedAt: string;
}
