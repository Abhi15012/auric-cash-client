'use client';
import React from 'react';
import CommonTitle from "./commonTitle";
import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatarBg: string;
  initials: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Venkat Ramana Reddy",
    location: "Jubilee Hills, Hyderabad",
    rating: 5.0,
    quote:
      "Extremely safe and painless ear piercing experience for my 8-month-old daughter right at home in Jubilee Hills. The specialist brought sterile equipment. She hardly cried!",
    avatarBg: "bg-amber-100 text-amber-900 border-amber-200",
    initials: "VR",
  },
  {
    id: 2,
    name: "Anusha Rao",
    location: "Madhapur, Hyderabad",
    rating: 4.9,
    quote:
      "Booked a home visit for nose piercing in Madhapur. The professional arrived right on time and explained every step clearly. Virtually pain-free and super hygienic!",
    avatarBg: "bg-purple-100 text-purple-900 border-purple-200",
    initials: "AR",
  },
  {
    id: 3,
    name: "Srikanth Varma",
    location: "Gachibowli, Hyderabad",
    rating: 4.8,
    quote:
      "Outstanding service! Got earlobe piercing done for my twin daughters at home. Very clean, polite staff, and excellent post-care guidance. Highly recommended in Gachibowli.",
    avatarBg: "bg-blue-100 text-blue-900 border-blue-200",
    initials: "SV",
  },
  {
    id: 4,
    name: "Lakshmi Narayana",
    location: "Banjara Hills, Hyderabad",
    rating: 5.0,
    quote:
      "Very patient and caring team. Piercing a baby's ears can be stressful, but they handled our little one so gently. Hands down the best home piercing service in Hyderabad!",
    avatarBg: "bg-emerald-100 text-emerald-900 border-emerald-200",
    initials: "LN",
  },
  {
    id: 5,
    name: "Sai Charan Teja",
    location: "Kukatpally, Hyderabad",
    rating: 4.7,
    quote:
      "Super smooth gunshot piercing method. Sealed sterile stud packages were opened right in front of us. Highly professional and hassle-free experience in Kukatpally.",
    avatarBg: "bg-rose-100 text-rose-900 border-rose-200",
    initials: "ST",
  },
  {
    id: 6,
    name: "Divya Reddy",
    location: "Kondapur, Hyderabad",
    rating: 4.9,
    quote:
      "Wonderful doorstep service in Kondapur. They were hygienic, gentle, and used gold-plated titanium studs. My baby girl didn't even cry. Wonderful experience!",
    avatarBg: "bg-indigo-100 text-indigo-900 border-indigo-200",
    initials: "DR",
  },
  {
    id: 7,
    name: "Harish Kumar",
    location: "Ameerpet, Hyderabad",
    rating: 4.8,
    quote:
      "Clean, prompt, and thoroughly professional. The technician followed strict hygiene standards and provided soothing aftercare spray. Great value for money in Ameerpet.",
    avatarBg: "bg-teal-100 text-teal-900 border-teal-200",
    initials: "HK",
  },
  {
    id: 8,
    name: "Kavitha Rani",
    location: "Secunderabad, Hyderabad",
    rating: 5.0,
    quote:
      "Got my nose pierced at home in Secunderabad. Painless procedure with zero swelling afterwards. The specialist gave detailed care instructions. Very satisfied!",
    avatarBg: "bg-orange-100 text-orange-900 border-orange-200",
    initials: "KR",
  },
  {
    id: 9,
    name: "Suresh Chandra",
    location: "LB Nagar, Hyderabad",
    rating: 4.7,
    quote:
      "We were looking for gentle manual ear piercing for our toddler. Their expert came home to LB Nagar and executed it with utmost care and patience. Excellent service!",
    avatarBg: "bg-cyan-100 text-cyan-900 border-cyan-200",
    initials: "SC",
  },
  {
    id: 10,
    name: "Pranathi Rao",
    location: "Begumpet, Hyderabad",
    rating: 4.9,
    quote:
      "Extremely happy with the service! Quick online booking, punctual arrival in Begumpet, and genuine care. My family loved how smooth the entire process was.",
    avatarBg: "bg-pink-100 text-pink-900 border-pink-200",
    initials: "PR",
  },
];

const row1 = testimonials.slice(0, 5);
const row2 = testimonials.slice(5, 10);

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="w-[280px] sm:w-[310px] md:w-[330px] shrink-0 p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-0.5 mx-2.5 flex flex-col justify-between group/card relative">
      {/* Top section: Rating & Quote Icon */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/70">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(item.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-amber-200 text-amber-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-bold text-amber-900 ml-0.5">
              {item.rating.toFixed(1)}
            </span>
          </div>
          <Quote className="w-5 h-5 text-amber-400/80 opacity-70 group-hover/card:scale-110 transition-transform" />
        </div>

        {/* Quote text */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-poppins line-clamp-3">
          "{item.quote}"
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border ${item.avatarBg} shrink-0 shadow-xs`}
        >
          {item.initials}
        </div>
        <div className="overflow-hidden">
          <h4 className="font-semibold text-slate-900 text-xs sm:text-sm truncate font-poppins">
            {item.name}
          </h4>
          <p className="text-[11px] text-slate-500 flex items-center gap-1 truncate mt-0.5">
            <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
            <span className="truncate">{item.location}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <motion.section className="w-full bg-white text-slate-900 py-12 md:py-16 lg:py-20 overflow-hidden relative border-t border-slate-100">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 px-4 max-w-3xl mx-auto">
        <CommonTitle title={"What our customers say"} />
        <h2 className="font-poppins text-slate-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mt-2">
          Trusted by Families Across Hyderabad
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mt-2">
          Read real reviews from our satisfied clients in Hyderabad who experienced safe, painless doorstep ear & nose piercing.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative w-full space-y-4 sm:space-y-5">
        {/* Left and Right Fade Gradients on Pure White */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Row 1: Slow Moving Left, Pause on Hover */}
        <div className="marquee-container overflow-hidden py-1">
          <div className="animate-marquee-left flex hover:[animation-play-state:paused]">
            {[...row1, ...row1, ...row1].map((item, index) => (
              <TestimonialCard key={`row1-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Slow Moving Right, Pause on Hover */}
        <div className="marquee-container overflow-hidden py-1">
          <div className="animate-marquee-right flex hover:[animation-play-state:paused]">
            {[...row2, ...row2, ...row2].map((item, index) => (
              <TestimonialCard key={`row2-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
