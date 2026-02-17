import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

/* ── Hero Stats ── */
const heroStats = [
  { value: "41%+", label: "increase in new markets" },
  { value: "28+", label: "new territories" },
  { value: "64%+", label: "ROI increase" },
];

/* ── Right-side visual: white arrow-plant motif (Figma) ── */
function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-md lg:max-w-lg">
      <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-white/20 bg-swell-slate-800/30">
        {/* Abstract white arrow-plant – replace /public/hero-visual.svg when exported from Figma */}
        <svg
          viewBox="0 0 200 180"
          className="h-full w-full max-h-[200px] max-w-[220px] text-white/95"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {/* Central stem pointing down */}
          <path d="M100 25 L100 110" />
          {/* Arrow/leaf head (downward point) */}
          <path d="M60 110 L100 155 L140 110" />
          {/* Small branch up-left */}
          <path d="M100 60 L75 45" />
          {/* Small branch up-right */}
          <path d="M100 80 L125 68" />
          {/* Base / roots */}
          <path d="M70 110 L100 130 L130 110" />
        </svg>
      </div>
    </div>
  );
}

/* ── Testimonial: 5 white dots + truncated quote ── */
function HeroTestimonial() {
  return (
    <div className="w-full max-w-sm lg:max-w-[340px]">
      <div className="flex gap-2 mb-3" aria-label="5 out of 5 stars">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/80" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-white/90">
        &ldquo;Swell has transformed our online presence and marketing strategy. Their data-driven...&rdquo;
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-hero-solid">
      <Container className="relative z-10 flex flex-1 flex-col justify-center pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr,minmax(360px,1fr)] lg:gap-12 xl:gap-16 lg:items-center">
          {/* Left column */}
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">
              AN AI-POWERED GROWTH PARTNER
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.08] xl:text-[72px]">
              Delivering predictable growth for high-performing brands expanding into new markets
            </h1>
            <p className="mt-5 text-base font-medium uppercase tracking-wide text-white sm:text-lg">
              WE HELP BRANDS ACHIEVE SUSTAINABLE GROWTH AND MARKET EXPANSION
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/get-started"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-hero-btn-primary px-8 text-base font-semibold text-white transition-colors hover:bg-swell-slate-800"
              >
                BOOK A DEMO
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/get-started"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-hero-btn-secondary-border bg-hero-btn-secondary px-8 text-base font-semibold text-hero-btn-secondary-text transition-colors hover:bg-hero-btn-secondary-hover"
              >
                Let&apos;s talk
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/90">
              100+ Brands Trust Swell
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-10 sm:gap-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-white/90">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column: visual + testimonial */}
          <div className="flex flex-col gap-6 lg:items-end lg:justify-center">
            <HeroVisual />
            <HeroTestimonial />
          </div>
        </div>
      </Container>
    </section>
  );
}
