import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Me" },
  { to: "/projects", label: "Experience" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-4 z-40 px-4 md:px-8 animate-fade-in">
        <div className="pill-nav max-w-5xl mx-auto rounded-full px-5 md:px-7 py-3 flex items-center justify-between">
          <NavLink to="/" className="text-lg md:text-xl font-bold tracking-tight">
            Portfolio<span className="text-primary/40">.me</span>
          </NavLink>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/60"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 rounded-full hover:bg-white/60 flex items-center justify-center transition-all"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="md:hidden fixed inset-0 z-30 pt-24 px-6 animate-fade-in" style={{ background: "var(--gradient-pastel)" }}>
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-5 py-3 rounded-2xl text-lg font-semibold transition-all",
                    isActive ? "bg-primary text-primary-foreground" : "glass-card"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;