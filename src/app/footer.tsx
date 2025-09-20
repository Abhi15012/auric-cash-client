import { Facebook, Instagram, Youtube, Phone } from "lucide-react"
import Image from "next/image"


export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="container mx-auto px-20 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/icon.png" alt="Logo" className="h-10 w-10 mr-3" width={24} height={24} />
              <h3 className="text-xl font-poppins font-bold">PRC GOLD BUYERS</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-poppins mb-6">
              We buy gold at the best prices and help you release pledged gold with ease
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
                href="#"
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

          {/* Help Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white font-poppins">HELP</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors font-poppins">
                Customer Support
              </a>
              <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors font-poppins">
                Refund Policy
              </a>
              <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors font-poppins">
                Terms & Conditions
              </a>
              <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors font-poppins">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Map and Address Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="w-full h-32 md:h-40 bg-gray-700 rounded-lg overflow-hidden">
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
            <div className="text-gray-300 text-xs font-poppins leading-relaxed">
              <p>Mekala Complex 1,</p>
              <p>Above Raymonds Showroom,</p>
              <p>Main Road Uppal, Hyderabad,</p>
              <p>Telangana, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-600 pt-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">© Copyright 2022, All Rights Reserved by ClarityUI</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
