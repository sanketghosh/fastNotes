// COMPONENTS
import { ZapIcon } from "lucide-react";
import { Link } from "react-router-dom";

// LOCAL MODULES

// COMPONENTS
import UserMenu from "@/components/common/user-menu";
import { NAV_ITEMS } from "@/components/sidebar/app-sidebar";

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
            className="size-10 border hover:bg-secondary/30 transition-all flex items-center justify-center rounded-md text-muted-foreground hover:text-primary"
          >
            {item.icon}
          </Link>
        ))}
      </div>

      <UserMenu showDetails={false} />
    </nav>
  );
}
