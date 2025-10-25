import { LogOutIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { menuItems } from "@/constraints/RoutesLinks";
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { createInitials } from "@/utils/createInitials";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface IProps {
  user: IUser;
}

export default function UserMenu({ user }: IProps) {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");

    try {
      await logout({});
      toast.success("You’ve been logged out successfully", { id: toastId });
      dispatch(authApi.util.resetApiState());
    } catch (error) {
      console.log(error);
      toast.error("Logout failed. Please try again.", { id: toastId });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage
              src={user?.profilePicture || "/origin/avatar.jpg"}
              alt={user?.name}
            />
            <AvatarFallback>
              {createInitials(user?.name || "Unknown")}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {user?.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {user?.email}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {menuItems.map(({ icon: Icon, label, href }, index) => (
            <DropdownMenuItem key={index} asChild className="w-50">
              <Link to={href} className="flex items-center gap-2">
                <Icon size={16} className="opacity-60" aria-hidden="true" />
                <span>{label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="flex w-full items-center gap-2 text-left"
          onClick={handleLogout}
        >
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
