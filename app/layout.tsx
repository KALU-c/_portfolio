import { Lenis } from "@/lib/lenis";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

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
          className={`${InterSans.className} antialiased md:px-[50px] xl:px-[180px] px-3`}
        >
          {children}
        </body>
      </Lenis>
    </html>
  );
}
