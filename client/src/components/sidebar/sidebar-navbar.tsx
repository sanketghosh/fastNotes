// COMPONENTS
import {
  ArchiveIcon,
  LogOutIcon,
  PlusIcon,
  User2Icon,
  ZapIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

// LOCAL MODULES
import { cn } from "@/lib/utils";

// COMPONENTS
import ThemeToggle from "@/components/common/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NAV_ITEMS = [
  {
    icon: <PlusIcon className="size-6 stroke-muted-foreground" />,
    text: "add note",
    url: "/add-note",
  },
  {
    icon: <ArchiveIcon className="size-6 stroke-muted-foreground" />,
    text: "trash",
    url: "/trash",
  },
];

export default function SidebarNavbar() {
  return (
    <nav className="lg:w-[60px] w-0 border-r hidden lg:fixed top-0 h-screen bg-background min-h-screen max-h-screen lg:flex py-3 px-2 flex-col items-center justify-between">
      <div className="flex w-full items-center gap-4 flex-col">
        <Link
          to={"/"}
          className="bg-blue-600 text-white rounded-md size-10 flex items-center justify-center"
        >
          <ZapIcon className="size-7" />
        </Link>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.url}
            to={item.url}
            className="size-10 border hover:bg-secondary/30 transition-all flex items-center justify-center rounded-md"
          >
            {item.icon}
          </Link>
        ))}
        <ThemeToggle />
      </div>

      <Popover>
        <PopoverTrigger>
          <div className="size-10 rounded-md flex items-center justify-center bg-orange-600 overflow-hidden">
            <img src="/avatar.png" alt="" className="size-full" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col w-36 p-2 space-y-3 ml-4">
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
          <Button variant={"destructive"} size={"sm"}>
            <LogOutIcon />
            <p>Logout</p>
          </Button>
        </PopoverContent>
      </Popover>
    </nav>
  );
}
