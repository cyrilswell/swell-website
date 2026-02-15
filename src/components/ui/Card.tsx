import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  tag?: string;
  className?: string;
}

export function Card({
  title,
  description,
  image,
  href,
  tag,
  className,
}: CardProps) {
  const content = (
    <div
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg",
        className
      )}
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {tag && (
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
            {tag}
          </span>
        )}
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
