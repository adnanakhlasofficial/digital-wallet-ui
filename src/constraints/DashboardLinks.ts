import TransactionsTable from "@/pages/dashboard/AllTransactions/TransactionsTable";
import UsersTable from "@/pages/dashboard/AllUsers/UsersTable";
import WalletsTable from "@/pages/dashboard/AllWallets/WalletsTable";
import CashIn from "@/pages/dashboard/CashIn";
import CashOut from "@/pages/dashboard/CashOut";
import MyTransactions from "@/pages/dashboard/MyTransactions";
import SendBonus from "@/pages/dashboard/SendBonus";
import SendMoney from "@/pages/dashboard/SendMoney";
import { UserDetails } from "@/pages/dashboard/UserDetails/UserDetails";
import WalletDetails from "@/pages/dashboard/WalletDetails/WalletDetails";
import {
  CreditCard,
  History,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";

interface SidebarSubItem {
  title: string;
  url: string;
  Component: ComponentType;
  show?: boolean;
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
        title: "All Users",
        url: "/dashboard/users",
        Component: UsersTable,
        show: true,
      },
      {
        title: "User Details",
        url: "/dashboard/users/:email",
        Component: UserDetails,
        show: false,
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
      },
      {
        title: "Wallet Details",
        url: "/dashboard/wallets/:phone",
        Component: WalletDetails,
        show: false,
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
      },
      {
        title: "My Transaction History",
        url: "/dashboard/my-transactions",
        Component: MyTransactions,
        show: true,
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
      },
      {
        title: "Send Bonus",
        url: "/dashboard/send-bonus",
        Component: SendBonus,
        show: false,
      },
      {
        title: "Cash In",
        url: "/dashboard/cash-in",
        Component: CashIn,
        show: true,
      },
      {
        title: "Cash Out",
        url: "/dashboard/cash-out",
        Component: CashOut,
        show: true,
      },
    ],
  },
];
