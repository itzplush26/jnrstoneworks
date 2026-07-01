import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Sora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const accentFont = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JNR Stone Works Trading Inc.",
  description:
    "Official LX Hausys distributor in Quezon City fabricating and installing premium HIMACS solid surface countertops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable}`}
    >
      <body>
        <SiteHeader />
        <div className="site-page">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
