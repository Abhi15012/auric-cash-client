'use client';
import Image from "next/image";
import React from "react";
import CommonTitle from "./commonTitle";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    const row1 = [
  {
    title: "Best Market Rates",
    description: "Get the higest value for your gold at today's prices",
    image: "/why-rupee.png", // replace with your image path
  },
  {
    title: "Fast & Transparent Process",
    description: "No hidden charges or delays, completely transparent",
    image: "/why-icon2.png", // replace with your image path
  },
];

const row2 = [
      {
    title: "Secure Handling",
    description: "Your gold is safe with our trusted team",
    image: "/why-icon3.png",
  },
  {
    title: "Expert Guidance",
    description: "We handle negotiations and paperwork for you",
    image: "/why-icon4.png",
  },
]

  // Combine all cards into one array for horizontal scrolling
  const allCards = [...row1, ...row2];

  return (
    <motion.section className="w-full lg:px-20 bg-white mx-auto px-4 py-8 lg:py-16 pb-12 lg:pb-20">
      {/* Header */}
      <div className="text-center mb-6 md:mb-12 lg:mb-16">
        <CommonTitle title={"Why us"} />
        <h2 className="font-poppins text-heading text-xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Why Customers Choose Us
        </h2>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:flex flex-col gap-y-8 justify-center">
        <motion.div className="flex justify-center gap-x-8">
          {row1.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-6 w-[320px] h-[220px] flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className="w-12 h-12 mb-4"
              />
              <h3 className="font-poppins text-gray-800 mb-2 text-lg font-semibold text-center">
                {item.title}
              </h3>
              <p className="font-poppins text-gray-600 text-sm text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex justify-center gap-x-8">
          {row2.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-6 w-[320px] h-[220px] flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className="w-12 h-12 mb-4"
              />
              <h3 className="font-poppins text-gray-800 mb-2 text-lg font-semibold text-center">
                {item.title}
              </h3>
              <p className="font-poppins text-gray-600 text-sm text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Horizontal Scroll Layout */}
      <div className="lg:hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 pb-3" style={{ width: 'fit-content' }}>
            {allCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-md border border-gray-100 p-3 min-w-[260px] w-[260px] h-[160px] flex flex-col items-center justify-center flex-shrink-0 hover:shadow-lg transition-all"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="w-8 h-8 mb-2"
                />
                <h3 className="font-poppins text-gray-800 mb-1 text-sm font-semibold text-center">
                  {item.title}
                </h3>
                <p className="font-poppins text-gray-600 text-xs text-center leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator for mobile */}
        <div className="flex justify-center mt-2">
          <p className="text-gray-400 text-xs">← Swipe to see more →</p>
        </div>
      </div>
    
{/* // cards */}

    </motion.section>
  );
}
