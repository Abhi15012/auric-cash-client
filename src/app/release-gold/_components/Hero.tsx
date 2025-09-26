"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import { GoldHelpDialog } from "../../../../components/ui/gold-contact";
import { motion } from "framer-motion";

export default function Hero() {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" bg-white md:bg-black md:min-h-screen overflow-hidden px-4 md:bg-gradient-to-r from-[#0F172A] via-[#282f3f61] to-[#2d3038cf] flex flex-col lg:flex-row items-center md:items-start  justify-between  max-h-screen  md:pt-10 lg:pl-20  pb-8 md:pb-12 lg:pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex-1 py-[70px] md:py-[100px] pb-[30px] max-w-xl mb-8 lg:mb-0  text-center items-center justify-center md:text-left sm:items-start md:justify-start mt-6"
      >

        <h2 className="font-poppins text-primary text-2xl md:text-4xl font-medium line-clamp-5 letter-spacing-wide my-2">
          Get your gold back
        </h2>

        <h2 className="font-poppins md:text-white text-black text-2xl md:text-4xl font-medium line-clamp-5 letter-spacing-wide my-2">
          at Lowest Commission
        </h2>

        <div className="space-y-1 mt-10 md:space-y-4 lg:space-y-6 mb-10 md:mb-8 w-full">
          <p className="font-poppins md:text-white text-black text-[15px] md:text-lg lg:text-xl md:line-clamp-5 letter-spacing-wide md:my-2">
            We release your <span className="text-primary">Pledged gold</span> from banks,
          </p>
          <p className="font-poppins md:text-white text-black text-[15px] md:text-lg lg:text-xl md:line-clamp-5 letter-spacing-wide md:my-2">
            NBFCs, and financiers at the lowest service charges.
          </p>
          <p className="font-poppins md:text-white text-black text-[15px] md:text-lg lg:text-xl md:line-clamp-5 letter-spacing-wide md:my-2">
            Clear loans early, save on interest,
          </p>
          <p className="font-poppins md:text-white text-black text-[15px] md:text-lg lg:text-xl md:line-clamp-5 letter-spacing-wide md:my-2">
            and take advantage of our high gold prices.
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <Button
            className="bg-primary  h-14 md:mt-14 md:mb-6 font-poppins text-white px-8 py-4 md:px-10 md:py-5 lg:px-8 lg:py-4 rounded-lg
           flex items-center justify-center gap-2 hover:bg-orange-400 transition-colors duration-500 ease-in-out
           w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px]
           text-sm md:text-lg lg:text-xl  
          "
            onClick={() => setOpen(true)}
          >
            <Phone
              width={25}
              fill="white"
              height={20}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-10"
            />
            Request a Call Back
          </Button>
        </div>

        <div className="md:flex hidden  flex-col sm:flex-row sm:flex-wrap min-w-6xl gap-3 sm:gap-4 items-center lg:items-start mt-2">
          <div className="flex items-center bg-[#FFFFFF17] px-4 py-2 rounded-3xl gap-2">
            <Image
              style={{ width: "14px", height: "14px" }}
              src="/check.png"
              alt="Secure Icon"
              width={12}
              height={12}
            />
            <span className="text-gray-200 text-sm font-poppins">
              Lowest Commission
            </span>
          </div>
          <div className="flex items-center bg-[#FFFFFF17] px-4 py-2 rounded-3xl gap-2">
            <Image
              style={{ width: "14px", height: "14px" }}
              src="/lock.png"
              alt="Secure Icon"
              width={10}
              height={10}
            />
            <span className="text-gray-200 font-poppins text-sm">
              100% Secure Process
            </span>
          </div>
          <div className="flex items-center bg-[#FFFFFF17] px-4 py-2 rounded-3xl gap-2">
            <Image
              style={{ width: "14px", height: "14px" }}
              src="/fast.png"
              alt="Secure Icon"
              width={16}
              height={16}
            />
            <span className="text-gray-200 text-sm font-poppins">
              Fast Processing
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:flex flex-1 lg:flex-none lg:max-w-3xl items-center justify-center lg:justify-center"
      >
        <Image
          src="/release.png"
          alt="Hands holding gold jewelry"
          width={1700}
          height={500}
          className="max-w-full mt-30 rounded-lg w-full object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=" md:hidden absolute top-0 left-0 right-0  overflow-hidden justify-start lg:justify-start "
      >

      </motion.div>
      <GoldHelpDialog open={open} onClose={() => setOpen(false)} />
    </motion.main>
  );
}
