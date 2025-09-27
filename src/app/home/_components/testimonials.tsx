'use client';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import CommonTitle from "./commonTitle";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "PRC Gold Buyers gave me the best price for my gold ornaments. The process was fast, transparent, and hassle-free. Highly recommended!",
      name: "Ravi Reddy",
      designation: "Businessman from Hyderabad",
      src: "/testimonial1.jpeg",
    },
    {
      quote:
        "I sold my old gold coins through PRC Gold Buyers and received instant payment. The staff were professional and the rates were much better than local shops.",
      name: "Suresh Kumar",
      designation: "Shop Owner from Vijayawada",
      src: "/testimonial2.jpeg",
    },
    {
      quote:
        "When I needed urgent cash, PRC Gold Buyers helped me release my pledged gold from the bank quickly. The service was smooth and trustworthy.",
      name: "Naveen",
      designation: "Teacher from Warangal",
      src: "/testimonial3.jpeg",
    },
    {
      quote:
        "Excellent service! PRC Gold Buyers helped me release my pledged gold at a very low commission. I got my gold back safely and on time.",
      name: "Kiran",
      designation: "Engineer from Visakhapatnam",
      src: "/testimonial3.jpeg",
    },
    {
      quote:
        "At first I was doubtful, but PRC Gold Buyers proved to be very reliable. They offered fair prices, secure handling, and great customer support.",
      name: "Prasad Raju",
      designation: "Doctor from Guntur",
      src: "/testimonial4.jpeg",
    },
  ];

  return (
    <motion.section className="w-full lg:px-20 bg-white mx-auto px-4 py-8 lg:py-16 pb-12 lg:pb-20">
      {/* Header */}
      <div className="text-center mb-6 md:mb-12 lg:mb-16">
        <CommonTitle title={"What our customers say"} />
        <h2 className="font-poppins text-heading text-xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Customer Testimonials
        </h2>
      </div>

      {/* Testimonials Component */}
      <div className="bg-white rounded-lg md:rounded-2xl mx-auto max-w-6xl overflow-hidden">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </motion.section>
  );
}
