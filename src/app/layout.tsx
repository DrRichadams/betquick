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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const myData = await GetData();
  // console.log("My data: ", myData)
  
  return (
    // <ClerkProvider>
    //   <html lang="en">
    //     <body className={`${montserrat.className} body_container`}>
    //       <GlobalContextProvider>
    //         <MainNav />
    //         {children}
    //         <FeedbackComp />
    //         <Footer />
    //       </GlobalContextProvider>
    //     </body>
    //   </html>
    // </ClerkProvider>
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
  );
}

// async function GetData(){
//   const data = await fetch("https://api.sportmonks.com/v3/football/fixtures?api_token=oNYUa5ntGLYGxqywtCIIlB03gdmtrx9EjK1EgugN0JxkOWDwmviJaoIln9dt");
//   const response = await data.json();
//   return response;
// }
