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
          className="fixed inset-0 z-40 bg-swell-navy/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Slide-out panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close button */}
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-bold text-swell-navy">Menu</span>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-swell-slate-600 hover:bg-swell-slate-100 hover:text-swell-navy"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {/* Industries */}
          <button
            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-swell-slate-600 hover:bg-swell-slate-50 hover:text-swell-navy"
            onClick={() => setIndustriesExpanded(!industriesExpanded)}
          >
            Industries
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
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
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-accent-50 text-accent-dark"
                      : "text-swell-slate-500 hover:bg-swell-slate-50 hover:text-swell-navy"
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
                  ? "bg-swell-slate-50 text-swell-navy"
                  : "text-swell-slate-600 hover:bg-swell-slate-50 hover:text-swell-navy"
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-6 border-t border-swell-slate-100 pt-6">
            <Button href="/get-started" variant="accent" className="w-full">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
