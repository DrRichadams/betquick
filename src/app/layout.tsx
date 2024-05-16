import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/navigation.css";
import MainNav from "@/components/navigatioin/main_nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Betquick",
  description: "The most reliable betting platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
