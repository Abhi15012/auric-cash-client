import React from "react";
import { Button } from "../../../../components/ui/button";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-br from-slate-600 to-slate-700">
      <header className="flex items-center   justify-between px-6 py-4 lg:px-12">
        <div className="w-32 h-16 bg-gray-300 rounded"></div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white font-medium hover:text-gray-200 transition-colors"
          >
            Home
          </a>
          <span className="text-white">|</span>
          <a
            href="#"
            className="text-white font-medium hover:text-gray-200 transition-colors"
          >
            About Us
          </a>
        </nav>

        <Button className="bg-primary font-semibold text-white px-6 py-2 rounded-lg  sm: w-30">
          Enquire Now
        </Button>
      </header>
    </div>
  );
}
