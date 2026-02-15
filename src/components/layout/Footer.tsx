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
    <footer className="border-t border-border bg-swell-gray-50">
      <Container className="py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
              Swell
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              We design and build digital products that help businesses grow.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Swell. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
