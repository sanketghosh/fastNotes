// PACKAGES
import { PanelLeftOpenIcon } from "lucide-react";
import { Link } from "react-router-dom";

// components
import AppMainLink from "@/components/common/app-main-link";
import UserMenu from "@/components/common/user-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// LOCAL MODULES
import { NAV_ITEMS } from "@/components/sidebar/app-sidebar";
import { fakeNoteData } from "@/data/fake-note-data";
import { cn } from "@/lib/utils";
import NoteCard from "../notes/note-card";

type SidebarNotesItemProps = {
  pathName: string;
};

export default function SidebarNotesItems({ pathName }: SidebarNotesItemProps) {
  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-10 w-full border-r bg-background md:w-[350px] lg:left-[60px] lg:w-[400px]",
        pathName !== "/home" && "hidden md:block",
      )}
    >
      <div className="sticky top-0 z-10 bg-background">
        <div className="flex h-14 items-center gap-2 border-b px-2">
          <SmallScreenNav />
          <AppMainLink
            href="/home"
            iconSize="lg:hidden"
            textSize="text-xl font-bold"
          />
        </div>
        <div className="flex h-14 items-center border-b px-2 py-2">
          <Input placeholder="Search notes. Ctrl + '/' to focus." />
        </div>
      </div>
      <div className="h-[calc(100vh-112px)] overflow-y-scroll px-2 py-2">
        {fakeNoteData.map((i) => (
          <NoteCard
            key={i.id}
            href={i.id}
            title={i.title}
            desc={i.desc}
            isStarred={i.isStarred}
          />
        ))}
      </div>
    </div>
  );
}

function SmallScreenNav() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <PanelLeftOpenIcon className="size-6" />
      </SheetTrigger>
      <SheetContent side={"left"} className="h-full">
        <SheetHeader>
          <SheetTitle>
            <AppMainLink href="/home" iconSize="size-7" textSize="text-xl" />
          </SheetTitle>
          <SheetDescription className="w-full text-left">
            Explore your items here.
          </SheetDescription>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between py-5">
          <div className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className="flex items-center gap-2 rounded-md px-2 py-2 text-muted-foreground transition-all hover:bg-secondary/30 hover:text-primary"
              >
                {item.icon}
                <p className="font-medium capitalize md:text-lg">{item.text}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3 pb-10">
            <UserMenu />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
