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
  const [navStatus, setNavStatus] = useState<boolean>(false);
  const { pathname } = useLocation();
  const { data: user, isLoading } = useUserMeQuery({});

  console.log(theme);

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover open={navStatus}>
            <PopoverTrigger onClick={() => setNavStatus(!navStatus)} asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-full px-6 p-2 md:hidden">
              <NavigationMenu>
                <NavigationMenuList className="flex-col w-full items-start gap-2 md:gap-2">
                  {publicRoutes.map(({ title, icon: Icon, path }, index) => {
                    const ref = path ? `/${path}` : "/";
                    return (
                      <NavigationMenuItem
                        key={index}
                        onClick={() => setNavStatus(false)}
                        className="w-full"
                      >
                        <NavigationMenuLink
                          href={ref}
                          asChild
                          className="flex-row items-center gap-2 py-1.5"
                          active={ref === pathname}
                        >
                          <Link to={ref}>
                            <Icon
                              size={16}
                              className="text-muted-foreground w-4 h-4"
                              aria-hidden="true"
                            />
                            <span>{title}</span>
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to="/" className="text-primary hover:text-primary/90">
              <span className={cn(theme === "dark" ? "block" : "hidden")}>
                <DarkLogo />
              </span>

              <span className={cn(theme === "light" ? "block" : "hidden")}>
                <LightLogo />
              </span>
            </Link>
            {/* Desktop navigation - icon only */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-2">
                {publicRoutes.map(({ title, icon: Icon, path }) => {
                  const ref = path ? `/${path}` : "/";
                  return (
                    <NavigationMenuItem key={title}>
                      <NavigationMenuLink
                        href={ref}
                        asChild
                        className="flex items-center justify-center gap-1 p-1.5"
                        active={ref === pathname}
                      >
                        <Link
                          to={ref}
                          className="flex flex-row items-center gap-2"
                        >
                          <Icon
                            size={20}
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                          <span className="text-sm">{title}</span>
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <ThemeToggle />

          {isLoading ? (
            <>
              {/* Loading Spinner */}
              <Spinner className="size-8" />
            </>
          ) : (
            <>
              {/* User menu or Login */}
              {user ? (
                <UserMenu user={user} />
              ) : (
                <Button asChild variant="default" className="px-8" size="sm">
                  <Link to="/signin">Sign In</Link>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
