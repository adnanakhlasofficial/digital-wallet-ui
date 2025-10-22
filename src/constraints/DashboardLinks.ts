import AllTransactions from "@/pages/dashboard/AllTransactions";
import AllUsers from "@/pages/dashboard/AllUsers";
import AllWallets from "@/pages/dashboard/AllWallets";
import CashIn from "@/pages/dashboard/CashIn";
import CashOut from "@/pages/dashboard/CashOut";
import MyTransactions from "@/pages/dashboard/MyTransactions";
import SendMoney from "@/pages/dashboard/SendMoney";
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
      },
      {
        title: "My Transaction History",
        url: "/dashboard/my-transactions",
        Component: MyTransactions,
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
      },
      { title: "Cash In", url: "/dashboard/cash-in", Component: CashIn },
      { title: "Cash Out", url: "/dashboard/cash-out", Component: CashOut },
    ],
  },
];
