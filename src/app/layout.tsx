import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import FloatingNav from "./FloatingNav";
import PageTransition from "./PageTransition";
import Preloader from "./Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Aboulaila - Growth Hacker & Partnerships Manager",
  description: "Web3 and influencer marketing specialist with 4+ years of experience scaling brands and driving user acquisition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <Preloader />
        <ClientBody>
          <PageTransition>
            {children}
          </PageTransition>
        </ClientBody>
        <FloatingNav />
      </body>
    </html>
  );
}
