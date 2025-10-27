import {
  DollarSignIcon,
  HelpCircleIcon,
  HomeIcon,
  InfoIcon,
  LayoutDashboardIcon,
  PhoneIcon,
  SparklesIcon,
} from "lucide-react";

import Home from "../pages/public/Home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Features from "@/pages/public/Features/Features";
import Contact from "@/pages/public/Contact/Contact";
import FAQ from "@/pages/public/FAQ/FAQ";
import Pricing from "@/pages/public/Pricing/Pricing";
import About from "@/pages/public/About/About";

export const publicRoutes = [
  {
    index: true,
    Component: Home,
    title: "Home",
    icon: HomeIcon,
  },
  {
    path: "about",
    Component: About,
    title: "About Us",
    icon: InfoIcon,
  },
  {
    path: "features",
    Component: Features,
    title: "Features",
    icon: SparklesIcon,
  },
  {
    path: "pricing",
    Component: Pricing,
    title: "Pricing",
    icon: DollarSignIcon,
  },
  {
    path: "contact",
    Component: Contact,
    title: "Contact",
    icon: PhoneIcon,
  },
  {
    path: "faq",
    Component: FAQ,
    title: "FAQ",
    icon: HelpCircleIcon,
  },
];

export const authRoutes = [
  {
    path: "signin",
    Component: SignIn,
    title: "Sign Up",
    icon: "📝",
  },
  {
    path: "signup",
    Component: SignUp,
    title: "Sign Up",
    icon: "📝",
  },
];

export const userNav = [
  { icon: LayoutDashboardIcon, label: "Dashboard", href: "/dashboard/profile" },
];
