import LoadingMotion from "@/components/shared/LoadingMotion";
import { UserRoles } from "@/constraints/UserRoles";
import {
  useLogoutMutation,
  useUserMeQuery,
} from "@/redux/features/auth/auth.api";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function UserLayout() {
  const { data, isLoading } = useUserMeQuery({});
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isLoading && data && data.role !== UserRoles.USER) {
      logoutUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data]);

  if (isLoading) return <LoadingMotion />;

  if (data && data.role === UserRoles.USER) return <Outlet />;

  return null;

  async function logoutUser() {
    try {
      await logout({});
      toast.warning("Your have been logout for accessing forbidden routes.");
      navigate("/signin", { state: { pathname } });
    } catch (error) {
      console.error(error);
    }
  }
}
