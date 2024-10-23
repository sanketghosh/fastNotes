import { cn } from "@/lib/utils";
import {
  ArchiveIcon,
  LogOutIcon,
  PlusIcon,
  User2Icon,
  ZapIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "../common/theme-toggle";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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
  // {
  //   icon: <TrashIcon className="size-6 stroke-muted-foreground"/>,
  //   text: "trash",
  //   url: "/trash",
  // },
  // {
  //   icon: <TrashIcon className="size-6 stroke-muted-foreground"/>,
  //   text: "trash",
  //   url: "/trash",
  // },
];

export default function AppSidebar() {
  return (
    <aside className="min-h-screen flex border-r w-full lg:w-[500px]">
      <nav className="w-[60px] sticky top-0 border-r min-h-screen max-h-screen flex py-3 px-2 flex-col items-center justify-between">
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
              <img src="./avatar.png" alt="" className="size-full" />
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
      <div className="w-full sticky top-0 z-10 lg:w-[440px]">
        <div className="bg-background top-0 sticky z-10">
          <div className="h-14 flex items-center px-2 border-b">
            <h2 className="font-semibold text-xl">fastNotes</h2>
          </div>
          <div className="px-2 py-2 h-14 flex items-center border-b">
            <Input placeholder="Search notes. Ctrl + '/' to focus." />
          </div>
        </div>
        <div className="px-2 py-6 space-y-4 overflow-y-scroll h-[calc(100vh-112px)]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i) => (
            <div
              key={i}
              className="p-2 border transition-all rounded-md hover:border-blue-600/60 hover:bg-blue-600/15 cursor-pointer"
            >
              <h2 className="text-lg font-medium">This is a title</h2>
              <p className="line-clamp-2 text-muted-foreground leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus libero laborum hic suscipit magnam atque ducimus
                omnis soluta in accusantium, deserunt nulla placeat doloribus id
                commodi aut. Vitae, aliquid incidunt?
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
