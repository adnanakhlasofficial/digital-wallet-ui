import { AppSidebar } from "@/components/dashboard/app-sidebar";
import LoadingMotion from "@/components/shared/LoadingMotion";
import ThemeToggle from "@/components/shared/Navbar/ThemeToggle";
import DynamicBreadcrumbs from "@/components/ui/DynamicBreadcrumbs";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const { pathname } = useLocation();
  const { data: user, isLoading } = useUserMeQuery({});

  if (isLoading) return <LoadingMotion />;

  if (!user) return <Navigate to={"/signin"} state={pathname} />;

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] border-b ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center justify-between gap-2 px-4 w-full">
            <div className="flex items-center">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <DynamicBreadcrumbs />
            </div>
            <div className="flex items-center justify-center">
              {/* Theme toggle */}
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 ">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
