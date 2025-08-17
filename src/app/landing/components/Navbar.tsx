"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("Home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gradient-to-b md:bg-gradient-to-r from-[#0F172A] via-[#282f3f61] to-[#2d3038cf]">
      <header className="flex items-center justify-between px-6 py-6 lg:px-20">
        {/* Logo placeholder */}
        <div className="w-28 h-12 bg-gray-300 rounded"></div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 divide-x divide-white/50">
          <Link
            href="/"
            className={`px-3 text-lg font-medium font-poppins ${
              activeTab === "Home" ? "text-primary" : "text-white"
            }`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-3 text-lg font-medium font-poppins ${
              activeTab === "Aboutus" ? "text-primary" : "text-white"
            }`}
            onClick={() => setActiveTab("Aboutus")}
          >
            About Us
          </Link>
        </nav>

        {/* Enquire Now (Always in center on desktop & mobile) */}
        <div className="flex-shrink-0 mx-4">
          <Button
            className="bg-primary cursor-pointer hover:bg-orange-400 font-semibold text-white px-5 py-2 rounded-lg sm:w-[120px]
            md:w-[150px] lg:w-[180px] lg:h-12 text-base lg:text-lg font-poppins transition-colors duration-500 flex items-center justify-center ease-in-out"
          >
            Enquire Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-200 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 bg-gradient-to-r from-[#0F172A] via-[#282f3f61] to-[#2d3038cf]">
          <nav className="flex flex-col items-start space-y-4 border-t border-white/20 pt-4">
            <Link
              href="/"
              className={`text-lg font-medium font-poppins ${
                activeTab === "Home" ? "text-primary" : "text-white"
              }`}
              onClick={() => {
                setActiveTab("Home");
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-lg font-medium font-poppins ${
                activeTab === "Aboutus" ? "text-primary" : "text-white"
              }`}
              onClick={() => {
                setActiveTab("Aboutus");
                setIsMobileMenuOpen(false);
              }}
            >
              About Us
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
