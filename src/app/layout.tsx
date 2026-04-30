import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.school}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Limitless Consulting is a student-led consulting organization at Michigan State University helping student startups solve business challenges while developing student consultants.",
  keywords: [
    "Limitless Consulting",
    "Michigan State University",
    "student consulting",
    "student startups",
    "MSU consulting",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.school}`,
    description:
      "Student-led consulting for student startups and entrepreneurs at Michigan State University.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Limitless Consulting at Michigan State University",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.school}`,
    description:
      "Student-led consulting for student startups and entrepreneurs at Michigan State University.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/brand/limitless-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
