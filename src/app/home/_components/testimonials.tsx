"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import CommonTitle from "../../release-gold/_components/commonTitle"

// Testimonial data array
const testimonials = [
  {
    id: 1,
    quote: "I sold my pledged gold after release and got the highest market price without hassle",
    author: "Ramesh V",
    role: "Co-Founder of",
    company: "Waverio",
    companyLogo: "/waverio-logo.png",
    image: "/testimonial-person.png"
  },
  {
    id: 2,
    quote: "IMPACT369 has completely transformed how we approach our projects. The efficiency and results speak for themselves.",
    author: "Michael Brown",
    role: "CEO of",
    company: "Nextech",
    companyLogo: "/waverio-logo.png", // Replace with actual logo
    image: "/testimonial-person.png" // Replace with actual image
  },
  {
    id: 3,
    quote: "The support and tools provided by IMPACT369 helped our team deliver projects 40% faster with outstanding quality.",
    author: "Sarah Johnson",
    role: "Product Manager at",
    company: "Innovate",
    companyLogo: "/waverio-logo.png", // Replace with actual logo
    image: "/testimonial-person.png" // Replace with actual image
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 border-t  border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Section Header */}
               <div className="text-center mb-12 md:mb-16 lg:mb-20">
             <CommonTitle title={"TESTIMONIALS"} />
                 <h2 className="font-poppins text-heading text-3xl md:text-4xl lg:text-5xl  font-semibold leading-tight">
                   What Our Customers Say
                 </h2>
               </div>

        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:gap-8 md:flex-row">
            {/* Testimonial Image */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={currentTestimonial.image}
                      alt="hello wolrld"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <div className="mb-4 sm:mb-6">
                <Image src="/quote-icon.png" alt="Quote" width={70} height={70} className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-slate-900">
                    <span className="text-blue-600">&quot;{currentTestimonial.quote.split(' ')[0]}</span> {currentTestimonial.quote.split(' ').slice(1).join(' ')}&quot;
                  </p>

                  <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row sm:items-center">
                    <div>
                      <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{currentTestimonial.author}</p>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1 sm:mt-0">
                        <p className="text-xs sm:text-sm md:text-base text-gray-600">{currentTestimonial.role}</p>
                        <Image src={currentTestimonial.companyLogo} alt={currentTestimonial.company} width={30} height={30} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                        <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">{currentTestimonial.company}</p>
                      </div>
                    </div>

                    <div className="ml-0 justify-end sm:ml-auto mt-4 sm:mt-0 flex gap-2">
                      <button 
                        onClick={goToPrev}
                        className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 cursor-pointer transition-colors"
                      >
                       <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </button>
                      <button 
                        onClick={goToNext}
                        className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 cursor-pointer transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}