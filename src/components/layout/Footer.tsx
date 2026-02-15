import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  Industries: [
    { name: "FinTech", href: "/industries/fintech" },
    { name: "E-commerce", href: "/industries/ecommerce" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Thinking", href: "/thinking" },
    { name: "Careers", href: "/careers" },
  ],
  Connect: [
    { name: "Get Started", href: "/get-started" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Twitter", href: "https://twitter.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-swell-navy">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-8">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white"
            >
              swell
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-swell-slate-400">
              We design and build digital products that help FinTech and
              E-commerce businesses grow.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-swell-slate-400">
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-swell-slate-300 transition-colors hover:text-white"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-swell-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-swell-slate-500">
            &copy; {new Date().getFullYear()} Swell. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-swell-slate-500 hover:text-swell-slate-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-swell-slate-500 hover:text-swell-slate-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
