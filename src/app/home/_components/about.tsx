"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home as HomeIcon, Crown, MessageSquare, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  // Highlight cards data
  const highlights = [
    {
      title: "Auspicious Beginnings",
      desc: "Every piercing is done with traditional care, patience, and a gentle touch, making it ideal for babies and kids.",
      icon: HomeIcon,
      bgColor: "bg-amber-50 text-[#EAB308]",
    },
    {
      title: "Certified Stud Materials",
      desc: "Hypoallergenic, nickel-free 18KT/24KT gold and medical-grade titanium studs that promote fast, infection-free healing.",
      icon: Crown,
      bgColor: "bg-amber-50 text-[#EAB308]",
    },
    {
      title: "Sanitized Doorstep Service",
      desc: "Enjoy professional, clinic-grade hygiene and convenience directly in your living room, avoiding stressful clinic visits.",
      icon: MessageSquare,
      bgColor: "bg-amber-50 text-[#EAB308]",
    },
    {
      title: "Transparent Home Packages",
      desc: "Starting at ₹1,500/- including home visit charges, sterilized studs, and complete aftercare guidance.",
      icon: Tag,
      bgColor: "bg-amber-50 text-[#EAB308]",
    },
  ];

  // Carousel images
  const carouselImages = [
    { src: "/WhatsApp Image 2026-07-19 at 18.03.31.jpeg", alt: "Premium ear piercing experience" },
    { src: "/WhatsApp Image 2026-07-19 at 18.03.32-2.jpeg", alt: "Safe, sterile ear piercing procedure" },
    { src: "/WhatsApp Image 2026-07-19 at 18.03.32-3.jpeg", alt: "Beautiful baby & child ear studs" },
    { src: "/WhatsApp Image 2026-07-19 at 18.03.32.jpeg", alt: "Specialized gentle home piercing service" },
    { src: "/WhatsApp Image 2026-07-19 at 18.03.33-2.jpeg", alt: "Hygienic and professional ear care" },
    { src: "/WhatsApp Image 2026-07-19 at 18.03.33.jpeg", alt: "Elegant stud designs and gold options" },
    { src: "/WhatsApp Image 2026-07-19 at 18.34.57.jpeg", alt: "Doorstep service in Hyderabad" },
    { src: "/WhatsApp Image 2026-07-19 at 18.43.10.jpeg", alt: "Sterilized single-use piercing equipment" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4500); // Rotate every 4.5 seconds
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF7FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title and Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            {/* Tag/Category */}
            <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAB308]/15 text-[#CA8A04] text-xs font-bold uppercase tracking-wider">
              About Our Service
            </div>

            {/* Heading */}
            <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B] leading-tight tracking-tight">
              Bringing safe, auspicious, and gentle ear piercing to your home
            </h2>

            {/* Description */}
            <p className="font-poppins text-gray-600 text-sm md:text-base leading-relaxed">
              <strong>Vigneshwara Ear & Nose Piercing</strong> brings the trusted age-old tradition of body piercing into the comfort of your home. With our auspicious name representing new and obstacle-free beginnings, we prioritize absolute hygiene, safety, and care for your family. Serving communities across Hyderabad (including Gachibowli, Miyapur, Kondapur, and beyond), we provide painless gunshot and precise manual piercing methods using 100% pre-sterilized, hypoallergenic medical-grade studs.
            </p>

            {/* Highlight Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-100 shadow-xs hover:shadow-md hover:border-[#EAB308]/40 transition-all duration-300 rounded-2xl p-5 flex flex-col items-start text-left gap-3 group"
                >
                  <div className={`p-2.5 rounded-xl ${item.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-extrabold text-base text-[#1E293B] mb-1 leading-snug">
                      {item.title}
                    </h4>
                    <p className="font-poppins text-gray-500 text-xs md:text-sm leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Premium Auto-Rotating Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 w-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[450px] aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-gray-200/60 shadow-2xl bg-white group">
              
              {/* Carousel Image container */}
              <div className="absolute inset-0 w-full h-full bg-gray-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={carouselImages[currentIndex].src}
                      alt={carouselImages[currentIndex].alt}
                      fill
                      className="object-cover"
                      priority={currentIndex === 0}
                    />
                    
                    {/* Shadow overlay at bottom for caption */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent h-28 flex flex-col justify-end p-6">
                      <span className="text-white/70 text-[10px] uppercase font-bold tracking-wider mb-1">
                        Slide {currentIndex + 1} of {carouselImages.length}
                      </span>
                      <p className="text-white text-xs md:text-sm font-semibold font-outfit truncate">
                        {carouselImages[currentIndex].alt}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows (Visible on hover) */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? "w-6 bg-[#EAB308]" : "w-2 bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Float badge under the carousel */}
            <span className="text-xs text-gray-400 font-poppins mt-3 italic">
              * Swipe or use arrows to explore designs
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
