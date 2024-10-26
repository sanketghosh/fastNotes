// COMPONENTS
import SidebarNavbar from "@/components/sidebar/sidebar-navbar";
import SidebarNotesItems from "@/components/sidebar/sidebar-notes-items";
import { HomeIcon, PlusCircleIcon, TrashIcon } from "lucide-react";
import { useLocation } from "react-router-dom";

export const NAV_ITEMS = [
  {
    icon: <HomeIcon className="size-5 md:size-6" />,
    text: "home",
    url: "/home",
  },
  {
    icon: <PlusCircleIcon className="size-5 md:size-6" />,
    text: "add note",
    url: "/add-note",
  },
  {
    icon: <TrashIcon className="size-5 md:size-6" />,
    text: "trash",
    url: "/trash",
  },
];

export default function AppSidebar() {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <aside>
      <SidebarNavbar />
      <SidebarNotesItems pathName={pathname} />
    </aside>
  );
}
