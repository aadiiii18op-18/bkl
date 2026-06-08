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
  title: "BKL | Bohot Khaas Log Samaj™",
  description: "⚠️ CONFIDENTIAL GATEWAY: Keval BKL members aur certified bakchods are allowed beyond this point. Established by unemployed engineers with internet access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        {/* CRT Scanline Visual Overlays */}
        <div className="scanlines" />
        <div className="scanline-bar" />
        
        {children}
      </body>
    </html>
  );
}
