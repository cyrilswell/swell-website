import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
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
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
