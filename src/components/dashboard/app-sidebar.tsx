import * as React from "react";

import { NavUser } from "@/components/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import type { IUser } from "@/types";
import { Link } from "react-router-dom";
import SidebarNavigation from "./SidebarNavigation";
import { DarkIcon, LightIcon } from "../shared/Logo";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hook";

interface IProps extends React.ComponentProps<typeof Sidebar> {
  user: IUser;
}

export function AppSidebar({ user, ...props }: IProps) {
  const theme = useAppSelector((state) => state.theme.mode);

  const navUser = {
    name: user.name,
    email: user.email,
    avatar: user.profilePicture as string,
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          asChild
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Link className="flex items-center" to="/">
            <div>
              <span className={cn(theme === "dark" ? "block" : "hidden")}>
                <DarkIcon className="w-10" />
              </span>
              <span className={cn(theme === "light" ? "block" : "hidden")}>
                <LightIcon className="w-10" />
              </span>
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Digital Wallet</span>
              <span className="truncate text-xs">Mobile Banking Platform</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNavigation />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
