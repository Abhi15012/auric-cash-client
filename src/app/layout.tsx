import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Footer from "./footer";

import { TabProvider } from "../../context/TabContext";

import GoldHelpDialogWrapper from "./gold-contact-wrapper"; // ✅ Import here
import React from "react";
import { DialogProvider } from "../../context/handleDialog";
import Tabs from "./tabs";

// Fonts
const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inter",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "PRC Gold Buyers",
  description: "We buy gold at the best prices and help you release pledged gold with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <DialogProvider>
        <TabProvider>
          <div className=" sm-hidden mg-fixed lg-fixed  top-0 left-0 w-full z-50">
            <Navbar />
          </div>
          {children}
   
          <GoldHelpDialogWrapper /> {/* ✅ This is client now */}
          <Footer />

       

             <div className="fixed w-full   md:hidden bottom-0  z-50">
          <Tabs />
          </div>

      
        </TabProvider>
        </DialogProvider>
      
      </body>
    </html>
  );
}
