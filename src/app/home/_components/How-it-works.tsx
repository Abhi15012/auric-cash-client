import React from "react";
import { ArrowRight } from "lucide-react";
import CommonTitle from "./commonTitle";

export default function How() {
  const steps = [
    {
      id: 1,
      title: "Book Slot",
      description: "Fill our simple online callback form or call us directly to book a convenient home visit slot.",
    },
    {
      id: 2,
      title: "Sanitization",
      description: "Our certified specialist arrives with medical-grade sanitization and fully sterilized tools.",
    },
    {
      id: 3,
      title: "Marking",
      description: "We clean the area, select the safe point, and mark it clearly for your preview and final approval.",
    },
    {
      id: 4,
      title: "Gentle Piercing",
      description: "We perform the manual or gunshot piercing quickly, ensuring minimal discomfort and maximum safety.",
    },
    {
      id: 5,
      title: "Aftercare Guide",
      description: "We apply antiseptic and walk you through simple aftercare steps to ensure smooth, infection-free healing.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#FAF7FF] pb-16 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <CommonTitle title={"HOW IT WORKS"} />
          <h2 className="font-poppins text-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mt-4">
            Step-by-Step
            <br />
            Home Ear Piercing Process
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Row 1: Steps 1, 2, 3 */}
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
            {steps.slice(0, 3).map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 flex flex-col items-center text-center group hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold font-poppins mb-4 transition-transform duration-300 group-hover:scale-105">
                  {step.id}
                </div>
                <h3 className="font-poppins font-semibold text-gray-800 mb-2 text-lg">
                  {step.title}
                </h3>
                <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Row 2: Steps 4, 5 */}
          <div className="flex justify-center gap-8 max-w-5xl mx-auto">
            {steps.slice(3).map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 flex flex-col items-center text-center group hover:shadow-md hover:border-primary/30 transition-all duration-300 w-[calc(33.333%-1.333rem)]"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold font-poppins mb-4 transition-transform duration-300 group-hover:scale-105">
                  {step.id}
                </div>
                <h3 className="font-poppins font-semibold text-gray-800 mb-2 text-lg">
                  {step.title}
                </h3>
                <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 font-poppins">
                  {step.id}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-gray-800 text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
