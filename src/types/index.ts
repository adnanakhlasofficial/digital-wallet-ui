type TWalletStatus = "Active" | "Blocked" | "Suspended";
export type TUserStatus = "Admin" | "User" | "Agent";

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
