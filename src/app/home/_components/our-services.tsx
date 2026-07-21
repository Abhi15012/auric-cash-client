'use client'
import React from "react";
import CommonTitle from "./commonTitle";
import ServicesCards from "./cards";
import { motion } from "framer-motion";

export default function Services() {

  return (
    <motion.section 
      id="services"
      className="bg-white  md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center  md:mb-10 lg:mb-10">
                <CommonTitle title={"our services"} />
          <h2 className="font-poppins text-heading text-2xl md:text-4xl font-medium line-clamp-5 letter-spacing-wide  lg:text-5xl  md:font-semibold leading-tight">
           Professional & Safe {" "}
            <br className="hidden " />
            Ear Piercing Solutions
          </h2>
        </div>
<ServicesCards/>
        {/* Desktop Layout */}
      
      </div>
    </motion.section>
  );
}