"use client";
import React from "react";
import { useTab } from "../../../../context/TabContext";
import { motion } from "framer-motion";
import { useDialog } from "../../../../context/handleDialog";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  points: string[];
  primaryText: string;
  primaryLink: string;
  footerText: string;
  image: string;
}

const Card = ({
  title,
  points,
  primaryText,
  primaryLink,
  footerText,
  image,
}: CardProps) => {
  const { setActiveTab } = useTab();
  // Map secondaryLink to tab name
  const getTabName = (link: string) => {
    if (link === "/#how-it-works") return "howItWorks";
    return "Home";
  };
  const { openWithIntent } = useDialog();
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="flex flex-col justify-between bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-md overflow-hidden"
    >
      {/* Top Image */}
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h2 className="md:text-2xl text-xl font-bold font-outfit mb-3 text-black">
            {title}
          </h2>
          <ul className="space-y-3 mb-6">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="text-green-500 md:w-5 md:h-5 h-4 w-4 mt-0.5" />
                <span className="text-gray-700 text-xs md:text-sm font-poppins">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          {/* Primary Button */}
          <button
            type="button"
            className="flex items-center cursor-pointer font-outfit justify-center gap-2 bg-primary text-[#1B0A3A] font-bold py-3 rounded-lg hover:bg-[#CA8A04] hover:text-white transition duration-300 shadow-md text-sm md:text-base"
            onClick={() => {
              // Primary action logic
              if (
                primaryLink === "sell" ||
                primaryLink === "release" ||
                primaryLink === "ear-piercing" ||
                primaryLink === "#"
              ) {
                openWithIntent("ear-piercing");
              } else if (primaryLink.startsWith("/")) {
                setActiveTab(getTabName(primaryLink));
                window.location.href = primaryLink;
              } else {
                window.location.href = primaryLink;
              }
            }}
          >
            {primaryText} <ArrowRight size={18} />
          </button>
        </div>

        <p className="text-xs md:text-sm text-gray-500 mt-4">{footerText}</p>
      </div>
    </motion.div>
  );
};

export default function ServicesCards() {
  const cards = [
    {
      title: "Manual Ear Piercing",
      points: [
        "Traditional precise method performed by trained specialists",
        "Sterilized single-use equipment and safe medical procedures",
        "Gentle touch, highly recommended for newborns, babies & kids"
      ],
      primaryText: "Book Manual Piercing",
      primaryLink: "ear-piercing",
      footerText: "Hygienic manual home piercing starting at just ₹1,500",
      image: "/family.jpg"
    },

    {
      title: "Gunshot Ear Piercing",
      points: [
        "Quick, seamless, and virtually painless gunshot method",
        "Using premium pre-sterilized studs in individual sealed cassettes",
        "100% safe, fast, and hygienic for kids, teens, and adults"
      ],
      primaryText: "Book Gunshot Piercing",
      primaryLink: "ear-piercing",
      footerText: "Fast and professional gunshot home service in Hyderabad",
      image: "/gunshot_piercing.png"
    },
  ];

  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-16">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}
