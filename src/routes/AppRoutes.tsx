import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../constraints/RoutesLinks";
import Auth from "../layouts/Auth";
import Public from "../layouts/Public";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Public />}>
        {publicRoutes.map(({ index, path, Component }, i) => (
          <Route key={i} index={index} path={path} Component={Component} />
        ))}
      </Route>

      <Route element={<Auth />}>
        {authRoutes.map(({ path, Component }, i) => (
          <Route key={i} path={path} Component={Component} />
        ))}
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}
