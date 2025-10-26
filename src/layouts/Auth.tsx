import LoadingMotion from "@/components/shared/LoadingMotion";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Auth() {
  const { data, isLoading } = useUserMeQuery({});
  const navigate = useNavigate();

  if (isLoading) return <LoadingMotion />;

  if (data) {
    toast.info("You're already logged in.");
    navigate("/");
    return;
  }

  return <Outlet />;
}
