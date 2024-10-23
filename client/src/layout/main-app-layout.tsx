import AppSidebar from "@/components/sidebar/app-sidebar";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center flex-row">
      <AppSidebar />
      <div className="min-h-screen flex-1 hidden lg:block w-full">
        <nav className="sticky top-0 z-10 h-14 border-b"></nav>
        {children}
      </div>
    </main>
  );
}
