"use client";

import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          Swell
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              className={cn(
                "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/industries")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setIndustriesOpen(!industriesOpen)}
            >
              Industries
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  industriesOpen && "rotate-180"
                )}
              />
            </button>
            {industriesOpen && (
              <div className="absolute left-0 top-full mt-1 w-48 rounded-xl border border-border bg-background p-2 shadow-lg">
                {industries.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button href="/get-started" size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>

          {/* Mobile hamburger */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
