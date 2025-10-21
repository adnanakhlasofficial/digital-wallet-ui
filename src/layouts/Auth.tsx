import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth/sign-in", { replace: true });
  }, [navigate]);

  return <Outlet />;
}
