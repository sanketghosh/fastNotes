// COMPONENTS
import { ZapIcon } from "lucide-react";
import { Link } from "react-router-dom";

// LOCAL MODULES

// COMPONENTS
import UserMenu from "@/components/common/user-menu";
import { NAV_ITEMS } from "@/components/sidebar/app-sidebar";

export default function SidebarNavbar() {
  return (
    <nav className="top-0 hidden h-screen max-h-screen min-h-screen w-0 flex-col items-center justify-between border-r bg-background px-2 py-3 lg:fixed lg:flex lg:w-[60px]">
      <div className="flex w-full flex-col items-center gap-4">
        <Link
          to={"/home"}
          className="flex size-10 items-center justify-center rounded-md bg-primary text-white"
        >
          <ZapIcon className="size-7" />
        </Link>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.url}
            to={item.url}
            className="flex size-10 items-center justify-center rounded-md border text-muted-foreground transition-all hover:bg-secondary/30 hover:text-primary"
          >
            {item.icon}
          </Link>
        ))}
      </div>

      <UserMenu showDetails={false} />
    </nav>
  );
}
