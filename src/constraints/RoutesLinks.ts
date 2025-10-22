import {
  DollarSignIcon,
  HelpCircleIcon,
  HomeIcon,
  InfoIcon,
  PhoneIcon,
  SparklesIcon,
} from "lucide-react";
import About from "../pages/public/About";
import Home from "../pages/public/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Features from "@/pages/public/Features";
import Contact from "@/pages/public/Contact";
import FAQ from "@/pages/public/FAQ";
import Pricing from "@/pages/public/Pricing";

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
