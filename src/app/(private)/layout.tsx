import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-[100svh]">
      <Sidebar />
      <section className="flex flex-col flex-1">
        <Header />
        <section className="p-4">{children}</section>
      </section>
    </main>
  );
}
