// PACKAGES
import { useMutation } from "@tanstack/react-query";
import { ChevronsUpDownIcon, LogOutIcon, User2Icon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

// LOCAL MODULES
import * as logoutAction from "@/actions/auth/logout-action";
import { cn } from "@/lib/utils";
import { useAuthContext } from "@/providers/auth-provider";

// COMPONENTS
import ThemeToggle from "@/components/common/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface UserMenuProps {
  showDetails?: boolean;
}

export default function UserMenu({ showDetails = true }: UserMenuProps) {
  const { user, updateUser } = useAuthContext();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logoutAction.logoutAction,
    onSuccess: async () => {
      toast.success("Succesfully logged out user");
      navigate("/");
      updateUser(null);
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });

  function handleLogoutButton() {
    mutation.mutate();
  }

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        {showDetails ? (
          <div className="flex w-full items-center justify-between rounded-md px-2 py-2 transition-all hover:bg-secondary">
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center overflow-hidden rounded-md bg-orange-800">
                {user?.avatar === null ? (
                  <p className="text-xl font-bold uppercase text-white">
                    {user?.username.charAt(0)}
                  </p>
                ) : (
                  <img
                    src={user?.avatar}
                    alt={user?.username}
                    className="size-full"
                  />
                )}
              </div>
              <div className="flex flex-col items-start">
                <p className="text-base">{user?.username}</p>
                <p className="text-sm font-medium text-muted-foreground">
                  {user?.email}
                </p>
              </div>
            </div>
            <div>
              <ChevronsUpDownIcon />
            </div>
          </div>
        ) : (
          <div className="flex size-10 items-center justify-center overflow-hidden rounded-md bg-orange-800">
            {user?.avatar === null ? (
              <p className="text-xl font-bold uppercase text-white">
                {user?.username.charAt(0)}
              </p>
            ) : (
              <img
                src={user?.avatar}
                alt={user?.username}
                className="size-full"
              />
            )}
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="-mr-12 mb-3 flex w-56 flex-col space-y-3 p-2 md:-mr-20 lg:ml-4">
        <Link
          to={"/profile"}
          className={cn(
            buttonVariants({
              size: "sm",
              variant: "outline",
            }),
          )}
        >
          <User2Icon />
          <p>Profile</p>
        </Link>
        <ThemeToggle />
        <Button
          variant={"destructive"}
          size={"sm"}
          onClick={handleLogoutButton}
        >
          <LogOutIcon />
          <p>Logout</p>
        </Button>
      </PopoverContent>
    </Popover>
  );
}

// type AvatarProps = {
//   username?: string;
//   avatar?: string;
// };

// function Avatar({ username, avatar }: AvatarProps) {
//   const firstChar = username?.charAt(0);
//   console.log(firstChar, avatar);

//   return (

//   );
// }
