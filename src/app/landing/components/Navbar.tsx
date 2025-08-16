"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <div className="bg-gradient-to-b md:bg-gradient-to-r from-[#0F172A] via-[#282f3f61] to-[#2d3038cf]">
      <header className="flex items-center justify-between px-10 py-10 lg:px-20">
        {/* Logo placeholder */}
        <div className="w-34 h-20 bg-gray-300 rounded"></div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-lg font-medium font-poppins ${
              activeTab === "Home" ? "text-primary" : "text-white"
            }`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </Link>

          <span className="text-white text-2xl">|</span>

          <Link
            href="#"
            className={`text-lg font-medium font-poppins ${
              activeTab === "Aboutus" ? "text-primary" : "text-white"
            }`}
            onClick={() => setActiveTab("Aboutus")}
          >
            About Us
          </Link>
        </nav>

        {/* CTA Button */}
        <Button
          className="bg-primary cursor-pointer hover:bg-orange-400 font-semibold text-white px-6 py-2 rounded-lg sm:w-[120px]
        md:w-[150px] lg:w-[200px] lg:h-14 text-lg font-poppins  transition-colors duration-500 flex items-center justify-center ease-in-out"
        >
          Enquire Now
        </Button>
      </header>
    </div>
  );
}
