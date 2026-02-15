"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

const industries = [
  { name: "FinTech", href: "/industries/fintech" },
  { name: "E-commerce", href: "/industries/ecommerce" },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Thinking", href: "/thinking" },
  { name: "Careers", href: "/careers" },
];

export function Header() {
  const pathname = usePathname();
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-swell-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-18 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            scrolled ? "text-swell-navy" : "text-white"
          )}
        >
          swell
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              className={cn(
                "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? pathname.startsWith("/industries")
                    ? "text-swell-navy"
                    : "text-swell-slate-600 hover:text-swell-navy"
                  : pathname.startsWith("/industries")
                    ? "text-white"
                    : "text-swell-slate-300 hover:text-white"
              )}
              onClick={() => setIndustriesOpen(!industriesOpen)}
            >
              Industries
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  industriesOpen && "rotate-180"
                )}
              />
            </button>
            {industriesOpen && (
              <div className="absolute left-0 top-full mt-2 w-52 rounded-xl border border-swell-slate-200 bg-white p-2 shadow-xl shadow-swell-slate-200/50">
                {industries.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-accent-50 text-accent-dark"
                        : "text-swell-slate-600 hover:bg-swell-slate-50 hover:text-swell-navy"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? pathname === link.href ||
                    pathname.startsWith(link.href + "/")
                    ? "text-swell-navy"
                    : "text-swell-slate-600 hover:text-swell-navy"
                  : pathname === link.href ||
                      pathname.startsWith(link.href + "/")
                    ? "text-white"
                    : "text-swell-slate-300 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            href="/get-started"
            size="sm"
            variant={scrolled ? "accent" : "secondary"}
            className={cn(
              "hidden lg:inline-flex",
              !scrolled && "border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/30"
            )}
          >
            Get Started
          </Button>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
              scrolled
                ? "text-swell-navy hover:bg-swell-slate-100"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        industries={industries}
        navLinks={navLinks}
        pathname={pathname}
      />
    </header>
  );
}
