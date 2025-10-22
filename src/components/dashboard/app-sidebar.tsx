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

interface IProps extends React.ComponentProps<typeof Sidebar> {
  user: IUser;
}

export function AppSidebar({ user, ...props }: IProps) {
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
          <Link to="/">
            <div className="text-primary">
              {/* Logo start */}
              <svg
                width="32"
                height="22"
                viewBox="0 0 32 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6217 21.2926L8.76221 17.6425V10.8288L11.6217 14.479V21.2926Z"
                  fill="currentColor"
                />
                <path
                  d="M23.361 21.2926L20.3799 17.6424V5.4265L23.361 8.95503V21.2926Z"
                  fill="currentColor"
                />
                <path
                  d="M0 14.8826V21.2927H8.76079V10.8083L0 14.8826Z"
                  fill="currentColor"
                />
                <path
                  d="M11.6216 9.47837V21.2926H20.3824V5.40404L11.6216 9.47837Z"
                  fill="currentColor"
                />
                <path
                  d="M23.2393 4.07427V21.2927H32V0L23.2393 4.07427Z"
                  fill="currentColor"
                />
                <path
                  d="M0.260068 15.1279H0.199219V21.0899H0.260068V15.1279Z"
                  fill="currentColor"
                />
                <path
                  d="M8.60821 11.2153H8.54736V21.0899H8.60821V11.2153Z"
                  fill="currentColor"
                />
                <path
                  d="M11.8543 9.71359H11.7935V21.09H11.8543V9.71359Z"
                  fill="currentColor"
                />
                <path
                  d="M20.1673 5.8403H20.1064V21.09H20.1673V5.8403Z"
                  fill="currentColor"
                />
                <path
                  d="M23.554 4.29906H23.4932V21.0899H23.554V4.29906Z"
                  fill="currentColor"
                />
                <path
                  d="M31.7928 0.466309H31.7319V21.0898H31.7928V0.466309Z"
                  fill="currentColor"
                />
              </svg>
              {/* Logo End */}
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
