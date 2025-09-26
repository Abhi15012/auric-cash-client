'use client';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import CommonTitle from "./commonTitle";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Auric Cash gave me the best rate for my gold jewelry. The process was quick and transparent with no hidden charges. Highly recommended!",
      name: "Priya Sharma",
      designation: "Homemaker from Mumbai",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I sold my old gold coins through Auric Cash and got immediate payment. The team was professional and the rates were excellent compared to local jewelers.",
      name: "Rajesh Kumar",
      designation: "Business Owner from Delhi",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "When I needed urgent cash, Auric Cash helped me get a gold loan within hours. The interest rates were fair and the process was hassle-free.",
      name: "Meera Patel",
      designation: "Teacher from Bangalore",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Excellent service! They handled my gold release transaction professionally. Got my gold back safely after loan repayment. Trustworthy platform!",
      name: "Amit Singh",
      designation: "Engineer from Pune",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I was skeptical at first, but Auric Cash exceeded my expectations. Fair pricing, secure handling, and excellent customer support throughout the process.",
      name: "Deepika Reddy",
      designation: "Doctor from Chennai",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <motion.section className="w-full lg:px-20 bg-[#EEF8FE] mx-auto px-4 py-8 lg:py-16 pb-12 lg:pb-20">
      {/* Header */}
      <div className="text-center mb-6 md:mb-12 lg:mb-16">
        <CommonTitle title={"What our customers say"} />
        <h2 className="font-poppins text-heading text-xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Customer Testimonials
        </h2>
      </div>

      {/* Testimonials Component */}
      <div className="bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-lg mx-auto max-w-6xl overflow-hidden">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </motion.section>
  );
}
