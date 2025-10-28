import LoadingMotion from "@/components/shared/LoadingMotion";
import { Button } from "@/components/ui/button";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import { HomeIcon } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Auth() {
  const { data, isLoading } = useUserMeQuery({});
  const navigate = useNavigate();

  if (isLoading) return <LoadingMotion />;

  if (data) {
    navigate("/");
    return;
  }

  return (
    <div className="relative">
      <Button asChild>
        <Link
          className="absolute top-10 left-10 flex w-40 items-center gap-2"
          to="/"
        >
          <HomeIcon />
          Go To Home
        </Link>
      </Button>
      <Outlet />
    </div>
  );
}
