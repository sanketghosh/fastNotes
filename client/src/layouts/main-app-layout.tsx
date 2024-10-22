import AppSidebar from "../components/sidebar/app-sidebar";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AppSidebar />
      {children}
    </main>
  );
}
