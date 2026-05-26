import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/navbar";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Critical Path Projects - Construction Project Management",
  description: "Expert project management for commercial construction and renovation projects across Canada.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Critical Path Projects - Construction Project Management",
    description: "Expert project management for commercial construction and renovation projects across Canada.",
    url: "https://criticalpathprojects.com",
    siteName: "Critical Path Projects",
    images: [
      {
        url: "https://criticalpathprojects.com/images/og.png",
        width: 1200,
        height: 630,
        alt: "Critical Path Projects",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Critical Path Projects - Construction Project Management",
    description: "Expert project management for commercial construction and renovation projects across Canada.",
    images: ["https://criticalpathprojects.com/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} font-body antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
