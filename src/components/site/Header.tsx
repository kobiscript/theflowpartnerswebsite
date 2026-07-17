import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "What we do" },
  { to: "/industries", label: "Industries" },
  { to: "/insights", label: "Insights" },
  { to: "/careers", label: "Careers" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-8 px-6 lg:px-10">
        <Link to="/" className="flex items-baseline gap-1 font-display text-xl font-medium tracking-tight">
          <span>Flow</span>
          <span className="text-primary">&gt;</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <button aria-label="Search" className="hidden rounded-full p-2 hover:bg-muted lg:block">
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/contact"
            className="hidden rounded-full border border-foreground px-5 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background lg:inline-flex"
          >
            Contact us
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 hover:bg-muted lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1600px] flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-lg"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-fit rounded-full border border-foreground px-5 py-2 text-sm font-medium"
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
