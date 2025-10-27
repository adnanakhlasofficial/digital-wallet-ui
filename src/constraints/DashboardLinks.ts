import MyTransactionsTable from "@/pages/dashboard/AllMyTransactions/MyTransactionsTable";
import TransactionsTable from "@/pages/dashboard/AllTransactions/TransactionsTable";
import UsersTable from "@/pages/dashboard/AllUsers/UsersTable";
import WalletsTable from "@/pages/dashboard/AllWallets/WalletsTable";
import CashIn from "@/pages/dashboard/CashIn";
import CashOut from "@/pages/dashboard/CashOut";
import Profile from "@/pages/dashboard/Profile";
import SendBonus from "@/pages/dashboard/SendBonus";
import SendMoney from "@/pages/dashboard/SendMoney";
import { UserDetails } from "@/pages/dashboard/UserDetails/UserDetails";
import WalletDetails from "@/pages/dashboard/WalletDetails/WalletDetails";
import type { TUserStatus } from "@/types";
import {
  CreditCard,
  History,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";
import { UserRoles } from "./UserRoles";
import AgentRequestsTable from "@/pages/dashboard/AgentRequests/AgentRequestTable";

interface SidebarSubItem {
  title: string;
  url: string;
  Component: ComponentType;
  show: boolean;
  role: string | TUserStatus;
}

interface SidebarItem {
  title: string;
  icon: LucideIcon;
  items: SidebarSubItem[];
}

export const sidebarItems: SidebarItem[] = [
  {
    title: "User Management",
    icon: Users,
    items: [
      {
        title: "Profile",
        url: "/dashboard/profile",
        Component: Profile,
        show: false,
        role: UserRoles.ALL,
      },
      {
        title: "All Users",
        url: "/dashboard/users",
        Component: UsersTable,
        show: true,
        role: UserRoles.ALL,
      },
      {
        title: "Agent Request",
        url: "/dashboard/agent-requests",
        Component: AgentRequestsTable,
        show: true,
        role: UserRoles.ADMIN,
      },
      {
        title: "User Details",
        url: "/dashboard/users/:email",
        Component: UserDetails,
        show: false,
        role: UserRoles.ADMIN,
      },
    ],
  },
  {
    title: "Wallets",
    icon: Wallet,
    items: [
      {
        title: "All Wallets",
        url: "/dashboard/wallets",
        Component: WalletsTable,
        show: true,
        role: UserRoles.ADMIN,
      },
      {
        title: "Wallet Details",
        url: "/dashboard/wallets/:phone",
        Component: WalletDetails,
        show: false,
        role: UserRoles.ADMIN,
      },
    ],
  },
  {
    title: "Transactions",
    icon: History,
    items: [
      {
        title: "All Transaction History",
        url: "/dashboard/transactions",
        Component: TransactionsTable,
        show: true,
        role: UserRoles.ADMIN,
      },
      {
        title: "My Transaction History",
        url: "/dashboard/my-transactions",
        Component: MyTransactionsTable,
        show: true,
        role: UserRoles.ALL,
      },
    ],
  },
  {
    title: "Money Operations",
    icon: CreditCard,
    items: [
      {
        title: "Send Money",
        url: "/dashboard/send-money",
        Component: SendMoney,
        show: true,
        role: UserRoles.USER,
      },
      {
        title: "Send Bonus",
        url: "/dashboard/send-bonus",
        Component: SendBonus,
        show: true,
        role: UserRoles.ADMIN,
      },
      {
        title: "Cash In",
        url: "/dashboard/cash-in",
        Component: CashIn,
        show: true,
        role: UserRoles.AGENT,
      },
      {
        title: "Cash Out",
        url: "/dashboard/cash-out",
        Component: CashOut,
        show: true,
        role: UserRoles.USER,
      },
    ],
  },
];
