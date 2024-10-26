// packages
import { PanelLeftOpenIcon, ZapIcon } from "lucide-react";
import { Link } from "react-router-dom";

// components
import UserMenu from "@/components/common/user-menu";
import { NAV_ITEMS } from "@/components/sidebar/app-sidebar";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// local modules
import { cn } from "@/lib/utils";

type SidebarNotesItemProps = {
  pathName: string;
};

export default function SidebarNotesItems({ pathName }: SidebarNotesItemProps) {
  return (
    <div
      className={cn(
        "w-full border-r md:w-[350px] lg:w-[400px] top-0 z-10 fixed left-0 lg:left-[60px] bg-background",
        pathName !== "/home" && "hidden md:block",
      )}
    >
      <div className="bg-background top-0 sticky z-10">
        <div className="h-14 flex items-center px-2 border-b gap-2">
          <SmallScreenNav />
          <h2 className="font-bold text-xl">fastNotes</h2>
        </div>
        <div className="px-2 py-2 h-14 flex items-center border-b">
          <Input placeholder="Search notes. Ctrl + '/' to focus." />
        </div>
      </div>
      <div className="px-2 py-2 space-y-4 overflow-y-scroll h-[calc(100vh-112px)]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i) => (
          <div
            className="transition-all bg-secondary/30 rounded-md hover:border-blue-600/60 hover:bg-blue-600/15 cursor-pointer p-0 border"
            key={i}
          >
            <Link to={`/note/${i}`}>
              <div className="p-3">
                <h2 className="text-lg font-medium">This is a title</h2>
                <p className="line-clamp-2 text-muted-foreground leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus libero laborum hic suscipit magnam atque ducimus
                  omnis soluta in accusantium, deserunt nulla placeat doloribus
                  id commodi aut. Vitae, aliquid incidunt?
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmallScreenNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <PanelLeftOpenIcon className="size-6" />
      </SheetTrigger>
      <SheetContent side={"left"} className="h-full">
        <SheetHeader>
          <SheetTitle>
            <Link to={"/"} className="flex items-center gap-1 text-primary">
              <ZapIcon size={20} />
              <p className="">fastNotes</p>
            </Link>
          </SheetTitle>
          <SheetDescription className="text-left w-full">
            Explore your items here.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-between py-5 h-full">
          <div className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className="flex items-center gap-2 px-2 py-2 hover:bg-secondary rounded-md transition-all text-muted-foreground hover:text-primary"
              >
                {item.icon}
                <p className="md:text-lg font-medium capitalize">{item.text}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center flex-col gap-3 pb-10">
            <UserMenu />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
