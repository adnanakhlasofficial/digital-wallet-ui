import About from "../pages/About";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const publicRoutes = [
  {
    index: true,
    Component: Home,
    title: "Home",
    icon: "🏠",
  },
  {
    path: "about",
    Component: About,
    title: "About Us",
    icon: "ℹ️",
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
