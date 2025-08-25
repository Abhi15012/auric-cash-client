"use client";
import React from "react";
import { useTab } from "../../TabContext";
import { motion } from "motion/react";
import { CheckCircle, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
interface CardProps {
  title: string;
  points: string[];
  primaryText: string;
  primaryLink: string;
  secondaryLink: string;
  footerText: string;
}

const Card = ({
  title,
  points,
  primaryText,
  primaryLink,
  secondaryLink,
  footerText,
}: CardProps) => {
  const { setActiveTab } = useTab();
  // Map secondaryLink to tab name
  const getTabName = (link: string) => {
    if (link === "/buy-gold") return "sellGold";
    if (link === "/release-gold") return "releaseGold";
    if (link === "/about") return "Aboutus";
    return "Home";
  };
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex flex-col justify-between bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 w-full max-w-md"
    >
      <div>
        <h2 className="text-2xl font-semibold font-poppins mb-4 text-black">
          {title}
        </h2>
        <ul className="space-y-3 mb-6">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 mt-0.5" />
              <span className="text-gray-700 font-poppins">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        {/* Primary Button */}
        <motion.a
          whileTap={{ scale: 0.95 }}
          href={primaryLink}
          className="flex items-center font-poppins justify-center gap-2 bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
        >
          {primaryText} <ArrowRight size={18} />
        </motion.a>

        {/* Secondary Button */}
        <Link
          href={secondaryLink}
          className="flex items-center justify-center font-poppins gap-2 border border-gray-300 text-gray-800 font-medium py-3 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setActiveTab(getTabName(secondaryLink))}
        >
          Learn More <ExternalLink size={18} />
        </Link>
      </div>

      <p className="text-sm text-gray-500 mt-4">{footerText}</p>
    </motion.div>
  );
};
// ...existing code...

export default function ServicesCards() {
  const cards = [
    {
      title: "Sell Gold",
      points: [
        "Sell gold directly or even gold pledged in banks",
        "Instant valuation and same-day payment at market-best prices",
      ],
      primaryText: "Sell Gold",
      primaryLink: "#",
      secondaryLink: "/buy-gold",
      footerText:
        "Turn your idle gold into instant cash — at the best market rate",
    },

    {
      title: "Release Pledged Gold",
      points: [
        "Clear your gold loan from banks, NBFCs, or financiers at the lowest commission",
        "Get your jewelry back safely, quickly, and securely",
      ],
      primaryText: "Release Pledged Gold",
      primaryLink: "#",
      secondaryLink: "/release-gold",
      footerText:
        "Don’t let high interest eat your gold’s value — release it today",
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
