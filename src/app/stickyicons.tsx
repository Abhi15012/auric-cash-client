"use client";
import Image from "next/image"
import { useDialog } from "../../context/handleDialog";
import React from "react";

const StickyContactIcons = () => {
  const { open } = useDialog();

  // Debug logging
  React.useEffect(() => {
    console.log('StickyIcons: Dialog open state:', open);
  }, [open]);

  return (
    <div className={`fixed right-0 bottom-1 md:bottom-0 -translate-y-1/2 z-50 flex flex-col space-y-4 p-2 md:p-4 transition-all duration-300 ${
      open ? 'opacity-0 pointer-events-none translate-x-full' : 'opacity-100 pointer-events-auto translate-x-0'
    }`}>
      <a
        href="https://wa.me/+918142659346" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 md:w-18 md:h-18 rounded-full bg-glassmorphism backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="WhatsApp"
      >
       <Image src="/whatsapp.png" alt="WhatsApp" width={32} height={32} className="w-6 h-6 md:w-10 md:h-10"/>
      </a>
      <a
        href="tel:+918142659346" // Replace with your phone number
        className="flex items-center  md:hidden justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-glassmorphism backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="Call"
      >
        <Image src="/telephone.png" alt="Call" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
      </a>
    </div>
  )
}

export default StickyContactIcons
