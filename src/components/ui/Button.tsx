"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
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
    "bg-swell-black text-swell-white hover:bg-swell-gray-800 active:bg-swell-gray-700",
  secondary:
    "bg-swell-white text-swell-black border border-swell-gray-200 hover:bg-swell-gray-50 active:bg-swell-gray-100",
  ghost:
    "text-swell-gray-600 hover:text-swell-black hover:bg-swell-gray-50",
  outline:
    "border border-swell-black text-swell-black hover:bg-swell-black hover:text-swell-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
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
    "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none",
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
