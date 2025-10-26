import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/constraints/DashboardLinks";
import { UserRoles } from "@/constraints/UserRoles";
import type { IUser } from "@/types";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarNavigation({ user }: { user: IUser }) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {sidebarItems.map(({ title, icon: Icon, items }) => {
          // filter subitems based on role + show
          const visibleItems =
            items?.filter(
              (subItem) =>
                (subItem.role === UserRoles.ALL ||
                  subItem.role === user.role) &&
                subItem.show,
            ) ?? [];

          // if no visible subitems, skip rendering this parent
          if (visibleItems.length === 0) return null;

          return (
            <Collapsible
              key={title}
              asChild
              defaultOpen
              className="group/collapsible"
            >
              <SidebarMenuItem>
                {/* Parent Menu Item */}
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                {/* Sub Menu Items */}
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {visibleItems.map((subItem) => {
                      const isActive = location.pathname === subItem.url;
                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild isActive={isActive}>
                            <Link to={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
