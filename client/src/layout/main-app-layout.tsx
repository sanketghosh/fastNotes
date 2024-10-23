import AppSidebar from "@/components/sidebar/app-sidebar";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();

  return (
    <main className="">
      <AppSidebar />
      <div
        className={cn(
          "md:block fixed md:left-[350px] w-full lg:left-[460px]",
          pathname === "/home" ? "hidden" : "block",
        )}
      >
        <div className="overflow-y-scroll">
          <nav className="h-14 border-b w-full md:w-[calc(100vw-350px)] lg:w-[calc(100vw-460px)]"></nav>
          <div className="p-10 w-full md:w-[calc(100vw-350px)] overflow-y-scroll lg:w-[calc(100vw-460px)]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
