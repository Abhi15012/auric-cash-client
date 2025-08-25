"use client";
import React from "react";
import { useTab } from "./TabContext";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { activeTab, setActiveTab } = useTab();
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [scrollTimeout, setScrollTimeout] =
    React.useState<NodeJS.Timeout | null>(null);
  const [isPastHero, setIsPastHero] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Assuming hero is full viewport height

      // Check if past hero section
      setIsPastHero(currentScrollY > heroHeight * 0.8);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Show navbar when scrolling stops
      const newTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 150);

      setScrollTimeout(newTimeout);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isPastHero
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b md:bg-gradient-to-r from-[#0F172A] via-[#282f3f61] to-[#2d3038cf]"
      }`}
    >
      <header className="flex items-center justify-between px-4 py-4 lg:px-20 lg:py-6">
        {/* Logo placeholder */}
        <div className="w-24 h-10 lg:w-[200px] -mt-14 lg:h-18 rounded flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={80}
            className="max-w-full -ml-9 w-full h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-20 items-center space-x-4 lg:space-x-6 divide-x divide-white/50">
          <Link
            href="/"
            className={`px-2 lg:px-3 text-base lg:text-lg font-medium font-poppins transition-colors ${
              activeTab === "Home"
                ? isPastHero
                  ? "text-gold"
                  : "text-yellow-300"
                : isPastHero
                ? "text-gray-800"
                : "text-white"
            }`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </Link>
          <Link
            href="/buy-gold"
            className={`px-2 lg:px-3 text-base lg:text-lg font-medium font-poppins transition-colors ${
              activeTab === "sellGold"
                ? isPastHero
                  ? "text-gold"
                  : "text-yellow-300"
                : isPastHero
                ? "text-gray-800"
                : "text-white"
            }`}
            onClick={() => setActiveTab("sellGold")}
          >
            Sell your Gold
          </Link>
          <Link
            href="/release-gold"
            className={`px-2 lg:px-3 text-base lg:text-lg font-medium font-poppins transition-colors ${
              activeTab === "releaseGold"
                ? isPastHero
                  ? "text-gold"
                  : "text-yellow-300"
                : isPastHero
                ? "text-gray-800"
                : "text-white"
            }`}
            onClick={() => setActiveTab("releaseGold")}
          >
            Release Pledged Gold
          </Link>

          <Link
            href="/about"
            className={`px-2 lg:px-3 text-base lg:text-lg font-medium font-poppins transition-colors ${
              activeTab === "Aboutus"
                ? isPastHero
                  ? "text-gold"
                  : "text-yellow-300"
                : isPastHero
                ? "text-gray-800"
                : "text-white"
            }`}
            onClick={() => setActiveTab("Aboutus")}
          >
            About Us
          </Link>
        </nav>

        {/* Enquire Now - Mobile optimized */}
        <div className="flex-shrink-0 mx-2 lg:mx-4">
          <Button
            className="bg-gold cursor-pointer hover:bg-yellow-300 font-semibold text-black px-3 py-2 lg:px-5 lg:py-2 rounded-lg
            w-[100px] sm:w-[120px] md:w-[140px] lg:w-[180px] h-10 lg:h-12 text-sm lg:text-lg font-poppins transition-colors duration-500 flex items-center justify-center ease-in-out"
          >
            <span className="hidden sm:inline">Enquire Now</span>
            <span className="sm:hidden">Enquire</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className={`hover:opacity-70 focus:outline-none transition-colors ${
              isPastHero ? "text-gray-800" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 lg:h-6 lg:w-6" />
            ) : (
              <Menu className="h-5 w-5 lg:h-6 lg:w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden px-4 pb-4 lg:px-6 lg:pb-6 ${
            isPastHero
              ? "bg-white/95 backdrop-blur-md"
              : "bg-gradient-to-r from-[#0F172A] via-[#282f3f61] to-[#2d3038cf]"
          }`}
        >
          <nav
            className={`flex flex-col items-start space-y-3 lg:space-y-4 border-t pt-3 lg:pt-4 ${
              isPastHero ? "border-gray-200" : "border-white/20"
            }`}
          >
            <Link
              href="/"
              className={`text-base lg:text-lg font-medium font-poppins transition-colors ${
                activeTab === "Home"
                  ? isPastHero
                    ? "text-orange-500"
                    : "text-primary"
                  : isPastHero
                  ? "text-gray-800"
                  : "text-white"
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
              className={`text-base lg:text-lg font-medium font-poppins transition-colors ${
                activeTab === "Aboutus"
                  ? isPastHero
                    ? "text-orange-500"
                    : "text-primary"
                  : isPastHero
                  ? "text-gray-800"
                  : "text-white"
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
