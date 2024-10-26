import { cn } from "@/lib/utils";
import { ChevronsUpDownIcon, LogOutIcon, User2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ThemeToggle from "./theme-toggle";

interface UserMenuProps {
  showDetails?: boolean;
}

export default function UserMenu({ showDetails = true }: UserMenuProps) {
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        {showDetails ? (
          <div className="flex justify-between items-center w-full px-2 py-2 hover:bg-secondary transition-all rounded-md">
            <div className="flex items-center gap-4">
              <Avatar />
              <div className="flex flex-col items-start">
                <p className="text-base ">johndoe</p>
                <p className="text-sm text-muted-foreground font-medium">
                  johnd@mail.com
                </p>
              </div>
            </div>
            <div>
              <ChevronsUpDownIcon />
            </div>
          </div>
        ) : (
          <Avatar />
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

function Avatar() {
  return (
    <div className="size-10 rounded-md flex  items-center justify-center bg-orange-600 overflow-hidden">
      <img src="/avatar.png" alt="" className="size-full" />
    </div>
  );
}
