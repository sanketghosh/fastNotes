// COMPONENTS
import SidebarNavbar from "@/components/sidebar/sidebar-navbar";
import SidebarNotesItems from "@/components/sidebar/sidebar-notes-items";
import { useLocation } from "react-router-dom";

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
