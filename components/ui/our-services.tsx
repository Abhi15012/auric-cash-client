'use client'
import React from "react";
import Image from "next/image";
import CommonTitle from "../../src/app/buy-gold/_components/commonTitle";

import { motion } from "framer-motion";

export default function ServiceComp({title, data}: {title: string, data : string[]}) {


  return (
    <motion.section 
  
    className="bg-white  md:py-16 lg:py-20 flex justify-center ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10 lg:mb-10">
          <CommonTitle title={"our services"} />
          <h2 className="font-poppins text-heading text-xl md:text-4xl font-medium line-clamp-5 letter-spacing-wide lg:text-5xl md:font-semibold leading-tight">
            What we do for{" "} 
            <br className="hidden capitalize" />
          </h2>

          <h2 className="font-poppins text-heading text-xl md:text-4xl font-medium line-clamp-5 letter-spacing-wide lg:text-5xl md:font-semibold leading-tight">
            {title}
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block my-20 mx-auto max-w-3xl">
          {data && data.length > 0 && data.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-row gap-4 items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Image src={'/check.png'} alt={item} width={20} height={20} className="inline-block mr-2 mb-2"/>
              <p className="text-gray-700 text-lg md:text-xl font-poppins mb-4 inline-block">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout with Vertical Scroll */}
        <div className="lg:hidden my-8 mx-auto max-w-sm">
          <div className="max-h-96 overflow-y-auto scrollbar-hide space-y-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
            {data && data.length > 0 && data.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <Image 
                    src={'/check.png'} 
                    alt={item} 
                    width={16} 
                    height={16} 
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-700 text-sm font-poppins leading-relaxed flex-1">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          {data && data.length > 4 && (
            <div className="flex justify-center mt-3">
              <p className="text-gray-400 text-xs">↑ Scroll to see more ↓</p>
            </div>
          )}
        </div>

      </div>
    </motion.section>
  );
}