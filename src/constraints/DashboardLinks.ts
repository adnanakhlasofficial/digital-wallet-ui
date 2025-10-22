import AllTransactions from "@/pages/dashboard/AllTransactions";
import AllUsers from "@/pages/dashboard/AllUsers";
import AllWallets from "@/pages/dashboard/AllWallets";
import CashIn from "@/pages/dashboard/CashIn";
import CashOut from "@/pages/dashboard/CashOut";
import MyTransactions from "@/pages/dashboard/MyTransactions";
import SendMoney from "@/pages/dashboard/SendMoney";
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
        Component: AllUsers,
        show: true,
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
        Component: AllWallets,
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
        Component: AllTransactions,
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
