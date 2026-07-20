// Obsidian Intelligence — Sticky navbar with amber accent indicator
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isHome = location === "/";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.10 0.012 260 / 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.22 0.015 260)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:scale-110"
            style={{
              background: "oklch(0.78 0.15 75)",
              color: "oklch(0.10 0.012 260)",
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: "0 0 16px oklch(0.78 0.15 75 / 0.4)",
            }}
          >
            PK
          </div>
          <span
            className="font-semibold text-sm hidden sm:block"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
          >
            Parth Khamkar
          </span>
        </Link>

        {/* Desktop Nav */}
        {isHome && (
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: active === link.href ? "oklch(0.78 0.15 75)" : "oklch(0.65 0.01 260)",
                }}
                onMouseEnter={(e) => {
                  if (active !== link.href)
                    (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.92 0.005 60)";
                }}
                onMouseLeave={(e) => {
                  if (active !== link.href)
                    (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.65 0.01 260)";
                }}
              >
                {link.label}
                {active === link.href && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "oklch(0.78 0.15 75)" }}
                  />
                )}
              </button>
            ))}
          </nav>
        )}

        {/* Mobile menu toggle */}
        {isHome && (
          <button
            className="md:hidden p-2 rounded-md"
            style={{ color: "oklch(0.78 0.15 75)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isHome && menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-1"
          style={{ background: "oklch(0.10 0.012 260 / 0.98)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left px-4 py-3 text-sm font-medium rounded-md transition-colors"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: active === link.href ? "oklch(0.78 0.15 75)" : "oklch(0.65 0.01 260)",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
