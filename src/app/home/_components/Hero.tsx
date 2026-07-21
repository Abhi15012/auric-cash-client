"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Calendar, Grid, Sparkles, ShieldCheck, Tag, MapPin } from "lucide-react";
import Image from "next/image";
import { useDialog } from "../../../../context/handleDialog";
import { motion } from "framer-motion";

export default function Hero() {
  const { setOpen } = useDialog();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-[#100936] via-[#1B0A3A] to-[#08021B] text-white pt-28 pb-20 px-4 md:px-8 lg:px-20 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#EAB308]/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-[#EAB308]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 mt-8 lg:mt-12 relative z-10">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse"></span>
            Home Service in <span className="text-[#EAB308] font-extrabold ml-1">Hyderabad</span>
          </div>

          {/* Heading */}
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Professional Ear & <br className="hidden md:inline" />
            Nose Piercing — <br className="hidden md:inline" />
            <span className="text-[#EAB308]">Safe & Painless</span> <br className="hidden md:inline" />
            at Your Doorstep
          </h1>

          {/* Description */}
          <p className="font-outfit text-white/90 text-[15px] md:text-lg leading-relaxed max-w-xl mb-8">
            Hygienic, gentle care with 18KT and 24KT gold stud choices for babies, kids, and families. Experienced specialists providing manual and gunshot ear piercing using 100% sterilized equipment. <strong className="text-[#EAB308]">Any stud piece — starting at ₹1,500/- including home service.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 w-full sm:w-auto">
            <Button
              className="bg-white hover:bg-[#EAB308] hover:text-[#1B0A3A] text-[#1B0A3A] font-bold font-outfit px-8 py-6 rounded-full text-base flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <Calendar className="w-5 h-5" />
              Schedule Home Visit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/35 hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-[#1B0A3A] text-white font-bold font-outfit px-8 py-6 rounded-full text-base flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 w-full sm:w-auto cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <Grid className="w-5 h-5" />
              Browse Stud Collection
            </Button>
          </div>

          {/* Highlight Cards Grid - Redesigned with Icons & Glass effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              { title: "18KT & 24KT Gold", desc: "Premium stud range", icon: Sparkles, iconBg: "bg-pink-500/10 text-pink-400" },
              { title: "Manual & Gunshot", desc: "Fast & painless", icon: ShieldCheck, iconBg: "bg-amber-500/10 text-amber-400" },
              { title: "₹1,500", desc: "Starting price, visit included", icon: Tag, iconBg: "bg-emerald-500/10 text-emerald-400" },
              { title: "Hyderabad", desc: "Doorstep service city-wide", icon: MapPin, iconBg: "bg-blue-500/10 text-blue-400" },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-pink-500/30 hover:bg-white/[0.06] transition-all duration-300 rounded-3xl p-5 flex flex-col items-start text-left gap-4 group"
              >
                <div className={`p-2.5 rounded-2xl ${card.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-outfit font-extrabold text-base text-white mb-1 leading-tight">
                    {card.title}
                  </div>
                  <div className="font-outfit text-white/60 text-[10px] leading-snug">
                    {card.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Bento Photo Collage Redesign */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full flex items-center justify-center mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-[620px] h-[650px] flex items-center justify-center">
            {/* Animated background rings */}
            <div className="absolute w-[540px] h-[540px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute w-[420px] h-[420px] border border-dashed border-white/10 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>

            {/* Photo 1: Family (Large background frame) */}
            <div className="absolute top-8 left-8 w-[320px] h-[320px] rounded-[44px] overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-500 hover:scale-105 z-10 bg-[#160D2E]">
              <Image
                src="/family.jpg"
                alt="Happy Family"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-center">
                <span className="text-xs font-outfit font-bold text-white uppercase tracking-wider">Family Safe</span>
              </div>
            </div>

            {/* Photo 2: Child (Circle floating bottom-left) */}
            <div className="absolute bottom-16 left-20 w-[220px] h-[220px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-500 hover:scale-105 z-20 bg-[#160D2E]">
              <Image
                src="/child.jpg"
                alt="Child Piercing"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent pb-4 pt-8 text-center">
                <span className="text-[11px] font-outfit font-bold text-white uppercase tracking-wider">Kids Care</span>
              </div>
            </div>

            {/* Photo 3: Girl (Rounded rectangle floating right) */}
            <div className="absolute top-28 right-8 w-[260px] h-[350px] rounded-[60px] overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-500 hover:scale-105 z-30 bg-[#160D2E]">
              <Image
                src="/girl.jpg"
                alt="Baby Piercing"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-center">
                <span className="text-xs font-outfit font-bold text-white uppercase tracking-wider">Baby Friendly</span>
              </div>
            </div>
            
            {/* Small floating badge */}
            <div className="absolute bottom-24 right-20 bg-[#EAB308] text-[#1B0A3A] font-extrabold font-outfit text-sm px-5 py-2.5 rounded-full shadow-lg border border-white/20 animate-bounce z-40">
              Starting ₹1,500
            </div>
          </div>
        </motion.div>

      </div>
    </motion.main>
  );
}