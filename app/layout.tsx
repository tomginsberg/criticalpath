import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Critical Path Projects - Construction Project Management",
  description: "Expert project management for commercial construction and renovation projects across Canada.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Critical Path Projects - Construction Project Management",
    description: "Expert project management for commercial construction and renovation projects across Canada.",
    url: "https://criticalpath.vercel.app",
    siteName: "Critical Path Projects",
    images: [
      {
        url: "https://criticalpath.vercel.app/og.png",
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
    images: ["https://criticalpath.vercel.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}