import { Lenis } from "@/lib/lenis";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const koriumSans = localFont({
  variable: "--font-korium",
  src: "../public/fonts/T1Korium-2Kg.otf"
})

const telmaSans = localFont({
  variable: "--font-telma",
  src: "../public/fonts/Telma-Variable.ttf"
})

export const metadata: Metadata = {
  title: "KALU",
  description: "KALU PORTFOLIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Lenis>
        <body
          className={`${InterSans.className} ${koriumSans.variable} ${telmaSans.variable} antialiased`}
        >
          {children}
        </body>
      </Lenis>
    </html>
  );
}
