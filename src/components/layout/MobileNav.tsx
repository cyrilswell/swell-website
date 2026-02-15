"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  industries: { name: string; href: string }[];
  navLinks: { name: string; href: string }[];
  pathname: string;
}

export function MobileNav({
  open,
  onClose,
  industries,
  navLinks,
  pathname,
}: MobileNavProps) {
  const [industriesExpanded, setIndustriesExpanded] = useState(false);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Slide-out panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background p-6 shadow-xl transition-transform duration-300 ease-in-out md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close button */}
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">Menu</span>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {/* Industries */}
          <button
            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => setIndustriesExpanded(!industriesExpanded)}
          >
            Industries
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform",
                industriesExpanded && "rotate-180"
              )}
            />
          </button>
          {industriesExpanded && (
            <div className="ml-4 flex flex-col gap-1">
              {industries.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
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

          {/* Other links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                pathname === link.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-6">
            <Button href="/get-started" className="w-full">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
