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
  title: "Oliver Sirota's Portfolio",
  description: "A collection of projects I've worked on in one place.",
  icons: {
    icon: "/favicon.ico", // Ensure this path points to the favicon in the public directory
  },
  openGraph: {
    title: "Oliver Sirota's Portfolio",
    description: "A collection of projects I've worked on in one place.",
    url: "https://oliver-sirota.vercel.app", 
    siteName: "Oliver Sirota's Portfolio",
    type: "website",
  },
  verification: {
    google: "_--fYijHPCl_XyqyGlooUBvIu6TNkl3tu880N6izZYk",
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