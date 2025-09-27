"use client";
import React from "react";
import { useTab } from "../../context/TabContext";
import { Button } from "../../components/ui/button"; // fix Button import path to use local UI component instead of unresolved external
import Link from "next/link";
import { Menu, X, Phone, Facebook, Instagram, Youtube, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

import { useDialog } from "../../context/handleDialog";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);
  const { activeTab, setActiveTab } = useTab();

  // get pathname to highlight active link

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  React.useEffect(() => {
    if (pathname === "/") setActiveTab("Home");
    else if (pathname === "/buy-gold") setActiveTab("sellGold");
    else if (pathname === "/release-gold") setActiveTab("releaseGold");
    else if (pathname === "/about") setActiveTab("Aboutus");
    else setActiveTab("Home");
  }, [pathname, setActiveTab]);

  const [isVisible, setIsVisible] = React.useState(true);
  const [isPastHero, setIsPastHero] = React.useState(false);
  const lastScrollYRef = React.useRef(0);
  const {setOpen, open } = useDialog();

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;

      // Check if past hero section (adjust this value as needed)
      setIsPastHero(currentScrollY > 100);

      // Always show at very top; otherwise show only when scrolling up
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(isScrollingUp);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Debug logging
  React.useEffect(() => {
    console.log('Navbar: Dialog open state:', open);
  }, [open]);


  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isVisible && !open ? "translate-y-0" : "-translate-y-full"
      } ${isPastHero ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <header className="flex items-center justify-between px-5 py-6 lg:px-20 lg:py-6">
        {/* Logo placeholder */}
        <div className=" h-[50px]  md:w-[200px] -mt-14 w-[150px]  md:h-18 rounded flex-shrink-0">
          <Image
            src="/logo-new.png"
            alt="Logo"
            width={200}
            height={80}
            className="max-w-full md:-ml-9 w-full mt-2 md:mt-0 h-24  md:h-32 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-20 items-center space-x-4 lg:space-x-6 divide-x divide-gray-300">
          <Link
            href="/"
            className={`px-2 lg:px-3 text-base lg:text-lg font-medium font-poppins transition-colors ${
              activeTab === "Home"
                ? "text-primary"
                : isPastHero ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </Link>
          <Link
            href="/buy-gold"
            className={`px-2 lg:px-3 text-base lg:text-lg font-medium font-poppins transition-colors ${
              activeTab === "sellGold"
                ? "text-primary"
                : isPastHero ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setActiveTab("sellGold")}
          >
            Sell your Gold
          </Link>
          <Link
            href="/release-gold"
            className={`px-2 lg:px-3 text-base lg:text-lg font-medium font-poppins transition-colors ${
              activeTab === "releaseGold"
                ? "text-primary"
                : isPastHero ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setActiveTab("releaseGold")}
          >
            Release Pledged Gold
          </Link>

          
        </nav>

        {/* Enquire Now - Mobile optimized */}
        <div className="md:flex-shrink-0  md:flex hidden    lg:mx-4">
          <Button
            className="bg-primary  lg:ml-0 cursor-pointer hover:bg-orange-400 font-semibold text-white px-3 py-2 lg:px-5 lg:py-2 rounded-lg
            w-[100px] sm:w-[120px] md:w-[140px] lg:w-[180px] h-8 lg:h-12 text-sm lg:text-lg font-poppins transition-colors duration-500 flex items-center justify-center ease-in-out"
            onClick={() => setOpen(true)}
          >
            <span className="sm:inline text-[13px] md:text-base">Enquire Now</span>
       
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex space-x-3 items-center">
        
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:opacity-70 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 lg:h-6 lg:w-6" />
            ) : (
              <Menu className="h-6 w-6 lg:h-6 lg:w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden px-4 pb-4 lg:px-6 lg:pb-6 bg-white/95 backdrop-blur-md`}
        >
          {/* Navigation Links */}
          <div className="border-b pb-3 mb-3 border-gray-200">
            <div className="space-y-2">
              <Link
                href="/"
                className={`block text-base font-medium font-poppins transition-colors py-2 ${
                  activeTab === "Home"
                    ? "text-orange-500"
                    : "text-gray-800"
                }`}
                onClick={() => {
                  setActiveTab("Home");
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </Link>
              <Link
                href="/buy-gold"
                className={`block text-base font-medium font-poppins transition-colors py-2 ${
                  activeTab === "sellGold"
                    ? "text-orange-500"
                    : "text-gray-800"
                }`}
                onClick={() => {
                  setActiveTab("sellGold");
                  setIsMobileMenuOpen(false);
                }}
              >
                Sell your Gold
              </Link>
              <Link
                href="/release-gold"
                className={`block text-base font-medium font-poppins transition-colors py-2 ${
                  activeTab === "releaseGold"
                    ? "text-orange-500"
                    : "text-gray-800"
                }`}
                onClick={() => {
                  setActiveTab("releaseGold");
                  setIsMobileMenuOpen(false);
                }}
              >
                Release Pledged Gold
              </Link>
        
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-2">
            {/* Contact Section */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => setExpandedSection(expandedSection === "contact" ? null : "contact")}
                className="w-full flex items-center justify-between py-3 text-left text-gray-800"
              >
                <span className="font-medium font-poppins">Contact Us</span>
                {expandedSection === "contact" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {expandedSection === "contact" && (
                <div className="pb-3 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3 text-yellow-500" />
                    <a
                      href="tel:+918142659346"
                      className="text-sm font-poppins hover:text-primary transition-colors"
                    >
                      +91 8142659346
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Location Section */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => setExpandedSection(expandedSection === "location" ? null : "location")}
                className="w-full flex items-center justify-between py-3 text-left text-gray-800"
              >
                <span className="font-medium font-poppins">Location</span>
                {expandedSection === "location" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {expandedSection === "location" && (
                <div className="pb-3">
                  <div className="mb-3">
                    <div className="w-full h-32 bg-gray-700 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2183627155005!2d78.56118127521064!3d17.401305283488277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99330f0b460b%3A0xf6dd19f426ca6f31!2sMekala%20Complex%201%2C%20Uppal%20Main%20Road%2C%20Hyderabad%2C%20Telangana%20500039!5e0!3m2!1sen!2sin!4v1755627311315!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="transition-all duration-300"
                      ></iframe>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 mt-1 text-yellow-500 flex-shrink-0" />
                    <div className="text-xs font-poppins leading-relaxed">
                      <p>Mekala Complex 1,</p>
                      <p>Above Raymonds Showroom,</p>
                      <p>Main Road Uppal, Hyderabad,</p>
                      <p>Telangana, India</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links Section */}
            <div>
              <button
                onClick={() => setExpandedSection(expandedSection === "social" ? null : "social")}
                className="w-full flex items-center justify-between py-3 text-left text-gray-800"
              >
                <span className="font-medium font-poppins">Follow Us</span>
                {expandedSection === "social" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {expandedSection === "social" && (
                <div className="pb-3">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                    >
                      <Facebook className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/prcgoldbuyers?igsh=MWNxanluOTFqNzlhMw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                    >
                      <Youtube className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
