import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-4 text-sm font-semibold uppercase tracking-[0.1em]",
            dark ? "text-accent-light" : "text-accent"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-swell-slate-400" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
