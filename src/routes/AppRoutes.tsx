import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../constraints/RoutesLinks";
import Auth from "../layouts/Auth";
import Public from "../layouts/Public";
import { Toaster } from "@/components/ui/sonner";
import NotFound from "@/pages/NotFound";
import Dashboard from "@/layouts/Dashboard";
import { sidebarItems } from "@/constraints/DashboardLinks";
import { UserRoles } from "@/constraints/UserRoles";
import AdminLayout from "@/layouts/AdminLayout";
import AgentLayout from "@/layouts/AgentLayout";
import UserLayout from "@/layouts/UserLayout";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Public />}>
          {publicRoutes.map(({ index, path, Component }, i) => (
            <Route key={i} index={index} path={path} Component={Component} />
          ))}
        </Route>

        {/* Auth Routes */}
        <Route element={<Auth />}>
          {authRoutes.map(({ path, Component }, i) => (
            <Route key={i} path={path} Component={Component} />
          ))}
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          {sidebarItems.map((section) =>
            section.items.map((route) => {
              // Dashboard Global Routes
              if (route.role === UserRoles.ALL) {
                return <Route path={route.url} Component={route.Component} />;
              }
              // Dashboard Admin Routes
              else if (route.role === UserRoles.ADMIN) {
                return (
                  <Route element={<AdminLayout />}>
                    <Route path={route.url} Component={route.Component} />
                  </Route>
                );
              }
              // Dashboard Agent Routes
              else if (route.role === UserRoles.AGENT) {
                return (
                  <Route element={<AgentLayout />}>
                    <Route path={route.url} Component={route.Component} />
                  </Route>
                );
              }
              // Dashboard User Routes
              else if (route.role === UserRoles.USER) {
                return (
                  <Route element={<UserLayout />}>
                    <Route path={route.url} Component={route.Component} />
                  </Route>
                );
              }
            }),
          )}
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Toaster */}
      <Toaster richColors />
    </div>
  );
}
