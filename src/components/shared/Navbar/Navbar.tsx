import UserMenu from "@/components/shared/Navbar/user-menu";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Spinner } from "@/components/ui/spinner";
import { publicRoutes } from "@/constraints/RoutesLinks";
import { cn } from "@/lib/utils";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkLogo, LightLogo } from "../Logo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const theme = useAppSelector((state) => state.theme.mode);
  const [navStatus, setNavStatus] = useState(false);
  const { pathname } = useLocation();
  const { data: user, isLoading } = useUserMeQuery({});

  return (
    <header className="border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60 sticky top-0 z-50 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left: Logo & Navigation */}
        <div className="flex flex-1 items-center gap-3">
          {/* Mobile Menu */}
          <Popover open={navStatus} onOpenChange={setNavStatus}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="group md:hidden"
                aria-label="Toggle navigation"
              >
                <svg
                  className="pointer-events-none"
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    className={cn(
                      "transition-all duration-300",
                      navStatus && "opacity-0"
                    )}
                  />
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    className={cn(
                      "absolute inset-0 transition-all duration-300 opacity-0",
                      navStatus && "opacity-100"
                    )}
                  />
                </svg>
              </Button>
            </PopoverTrigger>

            <PopoverContent
              align="start"
              sideOffset={8}
              className="w-full md:hidden rounded-xl p-4 border shadow-md bg-card"
            >
              <NavigationMenu className="w-80">
                <NavigationMenuList className="flex flex-col items-start gap-3 w-80">
                  {publicRoutes.map(({ title, icon: Icon, path }, index) => {
                    const ref = path ? `/${path}` : "/";
                    const active = pathname === ref;
                    return (
                      <NavigationMenuItem
                        key={index}
                        onClick={() => setNavStatus(false)}
                        className="w-full"
                      >
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "flex items-center gap-2 w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                            active && "bg-accent text-accent-foreground"
                          )}
                        >
                          <Link
                            to={ref}
                            className="flex items-center gap-2 w-full"
                          >
                            <Icon size={18} />
                            {title}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={cn(theme === "dark" ? "block" : "hidden")}>
              <DarkLogo className="w-40" />
            </span>
            <span className={cn(theme === "light" ? "block" : "hidden")}>
              <LightLogo className="w-40" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-3">
              {publicRoutes.map(({ title, icon: Icon, path }) => {
                const ref = path ? `/${path}` : "/";
                const active = pathname === ref;
                return (
                  <NavigationMenuItem key={title}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={ref}
                        className={cn(
                          "flex flex-row items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                          active && "bg-accent text-accent-foreground"
                        )}
                      >
                        <Icon size={18} />
                        {title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {isLoading ? (
            <Spinner className="size-6" />
          ) : user ? (
            <UserMenu user={user} />
          ) : (
            <Button asChild size="sm" className="px-5">
              <Link to="/signin">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
