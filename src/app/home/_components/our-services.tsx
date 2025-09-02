'use client'
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CommonTitle from "./commonTitle";
import ServicesCards from "./cards";
import { motion } from "framer-motion";

export default function Services() {
  const steps = [
    {
      id: 1,
      image: "/image48.svg",
      title: "Fill Your Contact Details",
      description: "Enter your name and mobile number in our website form",
      width: 120,
      height: 80,
    },
    {
      id: 2,
      image: "/image49.svg",
      title: "KYC Form Submission",
      description: "Complete a simple KYC with ID & address proof",
      width: 240,
      height: 200,
    },
    {
      id: 3,
      image: "/image50.svg",
      title: "Loan & Gold Verification",
      description: "We confirm the loan amount and pledged gold details",
      width: 240,
      height: 200,
    },
    {
      id: 4,
      image: "/image51.svg",
      title: "Affordable Settlement",
      description:
        "We negotiate with your bank / financier & release your gold at the lowest commission rate",
      width: 190,
      height: 200,
    },
    {
      id: 5,
      image: "/image52.svg",
      title: "Gold in Your Hands",
      description: "Your gold is returned safely — without overpaying",
      width: 230,
      height: 200,
    },
  ];

  return (
    <motion.section 
  
    className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-10 lg:mb-10">
                <CommonTitle title={"our services"} />
          <h2 className="font-poppins text-heading text-3xl md:text-4xl lg:text-5xl  font-semibold leading-tight">
           Fast & Secure 
            <br />
            Gold Solutions
          </h2>
        </div>
<ServicesCards/>
        {/* Desktop Layout */}
      
      </div>
    </motion.section>
  );
}