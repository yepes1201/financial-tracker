import Link from "next/link";
import { Button } from "../ui/button";
import { LayoutDashboard, Wallet } from "lucide-react";

function Sidebar() {
  return (
    <aside className="border-r py-2 px-4 flex flex-col gap-4">
      <div className="py-2">LOGO</div>
      <nav>
        <Sidebar.ListItem>
          <Sidebar.Item>
            <Button variant="ghost" className="flex gap-2">
              <LayoutDashboard strokeWidth={2} size={20} />
              <Link href="/">Dashboard</Link>
            </Button>
          </Sidebar.Item>
          <Sidebar.Item>
            <Button variant="ghost" className="flex gap-2">
              <Wallet strokeWidth={2} size={20} />
              <Link href="/accounts">Accounts</Link>
            </Button>
          </Sidebar.Item>
        </Sidebar.ListItem>
      </nav>
    </aside>
  );
}

Sidebar.ListItem = function ListItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul className="flex flex-col gap-2">{children}</ul>;
};

Sidebar.Item = function Item({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
};

export default Sidebar;
