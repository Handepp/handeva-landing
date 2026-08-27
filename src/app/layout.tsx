import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://handeva.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Handeva — Independent Digital Products",
  description:
    "Handeva builds useful digital products and web applications for everyday problems.",
  openGraph: {
    title: "Handeva — Independent Digital Products",
    description:
      "Handeva builds useful digital products and web applications for everyday problems.",
    url: siteUrl,
    siteName: "Handeva",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Handeva — Independent Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Handeva — Independent Digital Products",
    description:
      "Handeva builds useful digital products and web applications for everyday problems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
