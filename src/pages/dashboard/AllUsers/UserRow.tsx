import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { UserRoles } from "@/constraints/UserRoles";
import { cn } from "@/lib/utils";
import type { IUser } from "@/types";
import { getRoleBadge } from "@/utils/getRoleBadge";
import { format, formatDate } from "date-fns";
import { CheckCircle2, XCircle } from "lucide-react";
import UserAction from "./UserActions";

interface IProps {
  user: IUser;
  currentUser: IUser;
}

export default function UserRow({ user, currentUser }: IProps) {
  return (
    <TableRow
      className={cn("border-border hover:bg-muted transition-colors", {
        "bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300":
          !user.isVerified,
      })}
    >
      {/* 👤 Name + Role */}
      <TableCell className="text-foreground pl-6 font-medium">
        <div className="flex items-center gap-3">
          <img
            src={
              user.profilePicture ||
              `https://api.dicebear.com/9.x/initials/svg?seed=${user.name}`
            }
            alt={user.name}
            className="border-border h-9 w-9 rounded-full border object-cover"
          />
          <div>
            <p>{user.name}</p>
            <Badge className={getRoleBadge(user.role)}>{user.role}</Badge>
          </div>
        </div>
      </TableCell>

      {/* 📞 Contact */}
      <TableCell>
        <div className="flex flex-col gap-0.5">
          <span className="text-foreground text-sm">{user.email}</span>
          <span className="text-muted-foreground text-xs">{user.phone}</span>
        </div>
      </TableCell>

      {currentUser?.role === UserRoles.ADMIN && (
        <>
          {" "}
          {/* 🪪 NID */}
          <TableCell className="text-foreground text-sm">
            {user.nid || "—"}
          </TableCell>
          {/* 🎂 Date of Birth */}
          <TableCell className="text-muted-foreground text-sm">
            {formatDate(user.dateOfBirth, "PP")}
          </TableCell>
          {/* ✅ Verified */}
          <TableCell>
            {user.isVerified ? (
              <Badge className="border bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
                <CheckCircle2 className="mr-1 h-4 w-4" />
                Verified
              </Badge>
            ) : (
              <Badge className="border bg-rose-100 text-rose-800 dark:bg-rose-900/20 dark:text-rose-300">
                <XCircle className="mr-1 h-4 w-4" />
                Unverified
              </Badge>
            )}
          </TableCell>
          {/* 📅 Created */}
          <TableCell className="text-muted-foreground text-sm">
            {format(user.createdAt, "PP")}
          </TableCell>
        </>
      )}

      {/* ⚙️ Actions */}
      <TableCell className="pr-6 text-center">
        <UserAction user={user} />
      </TableCell>
    </TableRow>
  );
}
