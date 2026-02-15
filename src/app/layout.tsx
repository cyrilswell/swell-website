import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Swell | Digital Products That Drive Growth",
    template: "%s | Swell",
  },
  description:
    "We design and build digital products for FinTech and E-commerce businesses that drive measurable growth.",
  metadataBase: new URL("https://swell-website.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Swell",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
