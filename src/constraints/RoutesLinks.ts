import {
  DollarSignIcon,
  HelpCircleIcon,
  HomeIcon,
  InfoIcon,
  PhoneIcon,
  SparklesIcon,
} from "lucide-react";
import About from "../pages/About";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Pricing from "@/pages/Pricing";

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
