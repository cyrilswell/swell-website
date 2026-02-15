"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "accent";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-swell-navy text-white hover:bg-swell-slate-800 active:bg-swell-slate-700",
  secondary:
    "bg-white text-swell-navy border border-swell-slate-200 hover:border-swell-slate-300 hover:bg-swell-slate-50 active:bg-swell-slate-100",
  ghost:
    "text-swell-slate-600 hover:text-swell-navy hover:bg-swell-slate-100",
  outline:
    "border border-swell-slate-300 text-swell-navy hover:bg-swell-slate-50 hover:border-swell-slate-400",
  accent:
    "bg-accent text-white hover:bg-accent-dark active:bg-swell-slate-700 shadow-sm shadow-accent/25",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-12 px-8 text-base gap-2",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
