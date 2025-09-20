"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import CommonTitle from "../../release-gold/_components/commonTitle"

// Testimonial data array (Gold Buyers Context)
const testimonials = [
  {
    id: 1,
    quote: "I sold my pledged gold through PRC Gold Buyers and received the best market price instantly. The process was transparent and smooth.",
    author: "Ramesh Kumar",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1" // Indian man, Unsplash
  },
  {
    id: 2,
    quote: "PRC Gold Buyers helped me release my pledged gold from the bank with zero hassle. I was paid on the spot with complete trust.",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6" // Indian woman, Unsplash
  },
  {
    id: 3,
    quote: "I urgently needed funds, and PRC Gold Buyers gave me the highest value for my ornaments. Their service is fast, fair, and very professional.",
    author: "Arun Patel",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" // Indian man, Unsplash
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
    <section className="bg-white py-8 sm:py-12 md:py-16 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <CommonTitle title={"TESTIMONIALS"} />
          <h2 className="font-poppins text-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
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
                      alt={currentTestimonial.author}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <div className="mb-4 h-14 w-10 overflow-hidden sm:mb-6">
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
                    <span className="text-yellow-600">&quot;{currentTestimonial.quote.split(' ')[0]}</span> {currentTestimonial.quote.split(' ').slice(1).join(' ')}&quot;
                  </p>

                  <div className="mt-4 sm:mt-6 md:mt-8">
                    <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{currentTestimonial.author}</p>
                  </div>

                  <div className="ml-0 justify-end sm:ml-auto mt-4 sm:mt-6 flex gap-2">
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
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
