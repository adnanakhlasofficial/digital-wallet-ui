export interface IWallet {
  balance: number;
  email: string;
  status: "Active" | "Blocked" | "Suspended";
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: "Admin" | "User" | "Agent";
  profilePicture: string | null;
  nid: string;
  dateOfBirth: Date;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  wallet: IWallet;
}
