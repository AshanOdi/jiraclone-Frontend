import { Link, NavLink } from "react-router-dom";
import { KanbanSquare, LayoutDashboard, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/issue", label: "Issue Board", icon: KanbanSquare },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur">
      <div className="max-w-7xl mx-auto h-14 px-4 sm:px-6 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img className="size-8" src="/log.png" alt="logo" />
          <img className="h-5 hidden sm:block" src="/name.png" alt="forge" />
        </Link>

        <nav className="flex items-center gap-1">
          {links.map(({ to, label, icon, end }) => {
            const Icon = icon;
            return (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                <Icon className="size-4" />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            );
          })}
        </nav>

        <Link to="/create" className="ml-auto">
          <Button size="sm">
            <Plus className="size-4" />
            New Issue
          </Button>
        </Link>
      </div>
    </header>
  );
}
