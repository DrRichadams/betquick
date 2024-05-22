import React, {useState} from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import MainNav from "@/components/navigatioin/main_nav";
import Footer from "@/components/footer/footer";
import FeedbackComp from "@/components/feedback/feedback_box";
import AuthModal from "@/modals/auth_modal";

const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-mont' });

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
      <body className={`${montserrat.className} body_container`}>
        <div className="auth_modal">
            <AuthModal />
        </div>
        <MainNav />
        {children}
        <FeedbackComp />
        <Footer />
      </body>
    </html>
  );
}


