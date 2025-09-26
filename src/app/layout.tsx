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
import QuickContact from "../../components/ui/quickContact";
import StickyContactIcons from "./stickyicons";
import InstallPrompt from "../../components/ui/install-prompt";

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
  title: "PRC Gold Buyers - We Buy Gold & Release Pledged Gold",
  description: "We buy gold at the best prices and help you release pledged gold with ease. Download our app for quick access to gold trading services.",
  manifest: "/manifest.json",
  themeColor: "#EA5518",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PRC Gold Buyers",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PRC Gold Buyers" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#EA5518" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <DialogProvider>
        <TabProvider>
          <div className=" sm-hidden mg-fixed lg-fixed  top-0 left-0 w-full z-50">
            <Navbar />
          </div>
          {children}
   
          <GoldHelpDialogWrapper /> {/* ✅ This is client now */}

          <QuickContact title="Quick Contact"/>
          <Footer />

          <InstallPrompt />
          <StickyContactIcons />
       

             <div className="fixed w-full   md:hidden bottom-0  z-50">
          <Tabs />
          </div>

      
        </TabProvider>
        </DialogProvider>
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
