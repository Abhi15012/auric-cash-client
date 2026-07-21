import { Facebook, Instagram, Youtube, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="container mx-auto px-20 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Vigneshwara Logo"
                width={40}
                height={40}
                className="h-10 w-10 mr-3 object-contain"
              />
              <div className="flex flex-col text-left">
                <span className="font-outfit font-extrabold text-[16px] md:text-[20px] leading-none text-primary tracking-tight whitespace-nowrap">
                  VIGNESHWARA
                </span>
                <span className="font-outfit font-semibold text-[10px] md:text-[11px] leading-tight text-gray-400 tracking-wide uppercase">
                  Ear & Nose Piercing
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-outfit mb-6">
              Safe, hygienic, and painless manual & gunshot ear and nose piercing services in the comfort of your home across Hyderabad.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/prcgoldbuyers?igsh=MWNxanluOTFqNzlhMw=="
                target='_parent'
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 font-poppins text-white">CONTACT US</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-yellow-500" />
                <a href="tel:+918142659346" className="hover:text-white transition-colors font-poppins">
                  +91 8142659346
                </a>
              </div>
            </div>
          </div>

          {/* Help/Services Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white font-poppins">SERVICES & INFO</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 text-sm hover:text-white transition-colors font-poppins">
                Home
              </Link>
              <Link href="/#services" className="block text-gray-300 text-sm hover:text-white transition-colors font-poppins">
                Services
              </Link>
              <Link href="/#how-it-works" className="block text-gray-300 text-sm hover:text-white transition-colors font-poppins">
                Process
              </Link>
              <Link href="/#why-us" className="block text-gray-300 text-sm hover:text-white transition-colors font-poppins">
                Why Us
              </Link>
              <Link href="/#faq" className="block text-gray-300 text-sm hover:text-white transition-colors font-poppins">
                FAQ
              </Link>
              <Link href="/terms-and-condition" className="block text-gray-300 text-sm hover:text-white transition-colors font-poppins">
                Policies
              </Link>
            </div>
          </div>

          {/* Map and Address Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="w-full h-32 md:h-40 bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7197822552985!2d78.35756057546575!3d17.473121100329116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93003f49eb19%3A0xef5bd8a63395ecc4!2sRaghavendra%20colony%20Kondapur%20Hyderabad%20Telangana!5e0!3m2!1sen!2sin!4v1784592394473!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-300"
                ></iframe>
              </div>
            </div>
            <div className="text-gray-300 text-xs font-poppins leading-relaxed">
              <p>Raghavendra Colony,</p>
              <p>Kondapur,</p>
              <p>Hyderabad,</p>
              <p>Telangana</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-600 pt-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">© Copyright 2026, All Rights Reserved by Vigneshwara Ear & Nose Piercing</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
