import React from "react";
import { Button } from "../../../../components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import localFont from "next/font/local";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="bg-gradient-to-br from-slate-600 to-slate-700 flex flex-col lg:flex-row items-center justify-between px-4 pt-8 md:px-6 md:pt-10 lg:px-12 lg:pt-12 pb-8 md:pb-12 lg:pb-16">
      <div className="flex-1 max-w-2xl mb-8 lg:mb-0 lg:pr-12 text-center lg:text-left">
        <h1 className="font-poppins md:text-4xl lg:text-5xl  text-white mb-4 md:mb-6 ">
          Gold Back at the
          <br />
          Lowest Commission
        </h1>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <p className=" font-poppins text-gray-200 text-base md:text-lg ">
            We release your pledged gold from banks,
            <br />
            NBFCs, and financiers at the lowest service
            <br />
            charges.
            <br />
            Clear loans early, save on interest, or take
            <br />
            advantage of high gold prices
          </p>
        </div>

        <Button className="bg-primary font-poppins text-white px-8 py-4 md:px-10 md:py-5 lg:px-8 lg:py-4 rounded-lg text-lg md:text-xl lg:text-lg flex items-center gap-3 mb-6 md:mb-8 mx-auto lg:mx-0 w-full sm:w-auto max-w-xs sm:max-w-none">
          <Phone className="w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5" />
          Request a Call Back
        </Button>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 items-center lg:items-start">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-200 text-sm">Lowest Commission</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-gray-200 text-sm">100% Secure Process</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span className="text-gray-200 text-sm">Fast Processing</span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-1 lg:flex-none lg:w-1/2 justify-center lg:justify-end">
        <Image
          src="/image1.svg"
          alt="Hands holding gold jewelry"
          width={800}
          height={700}
          className="max-w-full h-auto"
        />
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <Button
          size="icon"
          className="w-12 h-12 bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-lg"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </Button>

        <Button
          size="icon"
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </main>
  );
}
