import { Lenis } from "@/lib/lenis";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const BricolageGrotesqueSans = Bricolage_Grotesque({
  variable: "--font-bricolage-sans",
  preload: true
})

const koriumSans = localFont({
  variable: "--font-korium",
  src: "../public/fonts/T1Korium-2Kg.otf"
})

const telmaSans = localFont({
  variable: "--font-telma",
  src: "../public/fonts/Telma-Variable.ttf",
  preload: true
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
          className={`${BricolageGrotesqueSans.className} ${koriumSans.variable} ${telmaSans.variable} font-sans antialiased`}
        >
          {children}
          <Toaster richColors invert />
        </body>
      </Lenis>
    </html>
  );
}
