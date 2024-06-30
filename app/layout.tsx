import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Sriracha } from "next/font/google";

const sriracha = Sriracha({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YJLY",
  description: "A fun discgolf putting game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sriracha.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
