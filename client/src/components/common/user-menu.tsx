import { cn } from "@/lib/utils";
import { useAuthContext } from "@/providers/auth-provider";
import { ChevronsUpDownIcon, LogOutIcon, User2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ThemeToggle from "./theme-toggle";

interface UserMenuProps {
  showDetails?: boolean;
}

export default function UserMenu({ showDetails = true }: UserMenuProps) {
  const { user } = useAuthContext();

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        {showDetails ? (
          <div className="flex justify-between items-center w-full px-2 py-2 hover:bg-secondary transition-all rounded-md">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-md flex  items-center justify-center bg-orange-800 overflow-hidden">
                {user?.avatar === null ? (
                  <p className="text-white text-xl font-bold uppercase">
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
                <p className="text-sm text-muted-foreground font-medium">
                  {user?.email}
                </p>
              </div>
            </div>
            <div>
              <ChevronsUpDownIcon />
            </div>
          </div>
        ) : (
          <div className="size-10 rounded-md flex  items-center justify-center bg-orange-800 overflow-hidden">
            {user?.avatar === null ? (
              <p className="text-white text-xl font-bold uppercase">
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
      <PopoverContent className="flex flex-col w-56 p-2 space-y-3 -mr-12 md:-mr-20 lg:ml-4 mb-3">
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
        <Button variant={"destructive"} size={"sm"}>
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
