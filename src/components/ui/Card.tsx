import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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
        "group relative overflow-hidden rounded-2xl border border-swell-slate-200 bg-white transition-all duration-300 hover:border-swell-slate-300 hover:shadow-lg hover:shadow-swell-slate-200/50",
        className
      )}
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-swell-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}
      <div className="p-6">
        {tag && (
          <span className="mb-3 inline-block rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-dark">
            {tag}
          </span>
        )}
        <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent-dark transition-colors">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
        {href && (
          <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent-dark">
            Read more
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
