import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeicheBoard | AI-Powered Trust-First Hiring",
  description: "The niche hiring platform for creators and agencies where trust is the first priority.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans min-h-screen bg-background text-foreground bg-gradient-premium selection:bg-primary/30 selection:text-white`}
      >
        <div className="fixed inset-0 -z-10 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
