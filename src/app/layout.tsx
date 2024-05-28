import React, {useState} from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import MainNav from "@/components/navigatioin/main_nav";
import Footer from "@/components/footer/footer";
import FeedbackComp from "@/components/feedback/feedback_box";
import AuthModal from "@/modals/auth_modal";
import { GlobalContextProvider } from "@/context/store";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.className} body_container`}>
          <GlobalContextProvider>
            <MainNav />
            {children}
            <FeedbackComp />
            <Footer />
          </GlobalContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}


