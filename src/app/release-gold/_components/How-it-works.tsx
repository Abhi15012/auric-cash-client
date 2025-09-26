import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CommonTitle from "./commonTitle";

export default function How() {
  const steps = [
    {
      id: 1,
      image: "/image48.svg",
      title: "Fill Your Contact Details",
      description: "Enter your name and mobile number in our website form",
      width: 120,
      height: 80,
    },
    {
      id: 2,
      image: "/image49.svg",
      title: "KYC Form Submission",
      description: "Complete a simple KYC with ID & address proof",
      width: 240,
      height: 200,
    },
    {
      id: 3,
      image: "/image50.svg",
      title: "Loan & Gold Verification",
      description: "We confirm the loan amount and pledged gold details",
      width: 240,
      height: 200,
    },
    {
      id: 4,
      image: "/image51.svg",
      title: "Affordable Settlement",
      description:
        "We negotiate with your bank / financier & release your gold at the lowest commission rate",
      width: 190,
      height: 200,
    },
    {
      id: 5,
      image: "/image52.svg",
      title: "Gold in Your Hands",
      description: "Your gold is returned safely — without overpaying",
      width: 230,
      height: 200,
    },
    {
      id: 6,
      image: "/image48.svg",
      title: "Complete Transaction",
      description: "Process completed with full transparency and documentation",
      width: 120,
      height: 80,
    },
  ];

  return (
    <section className="bg-white pb-15 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <CommonTitle title={"HOW IT WORKS"} />
          <h2 className="font-poppins text-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mt-4">
            Step-by-Step
            <br />
            Gold Release Process
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* First Row - Steps 1, 2, 3 */}
          <div className="flex items-center justify-center mb-16 xl:mb-20">
            <div className="flex items-center gap-8 xl:gap-12">
              {steps.slice(0, 3).map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="text-center group">
                    <div className="relative mb-6 flex justify-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center">
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          width={step.width}
                          height={step.height}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg font-poppins">
                        {step.id}
                      </div>
                    </div>
                    <h3 className="font-poppins font-semibold text-gray-800 mb-3 text-lg xl:text-xl max-w-48">
                      {step.title}
                    </h3>
                    <p className="font-poppins text-gray-600 text-sm xl:text-base leading-relaxed max-w-48">
                      {step.description}
                    </p>
                  </div>

                  {index < 2 && (
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 xl:w-10 xl:h-10 text-gray-400" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Second Row - Steps 4, 5, 6 */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-8 xl:gap-12">
              {steps.slice(3).map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="text-center group">
                    <div className="relative mb-6 flex justify-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center">
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          width={step.width}
                          height={step.height}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg font-poppins">
                        {step.id}
                      </div>
                    </div>
                    <h3 className="font-poppins font-semibold text-gray-800 mb-3 text-lg max-w-48">
                      {step.title}
                    </h3>
                    <p className="font-poppins text-gray-600 text-sm xl:text-base leading-relaxed max-w-48">
                      {step.description}
                    </p>
                  </div>

                  {index < 2 && (
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 xl:w-10 xl:h-10 text-gray-400" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:hidden">
          {steps.map((step) => (
            <div key={step.id} className="text-center group">
              <div className="relative mb-4 flex justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={step.width}
                    height={step.height}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Numbers only show on tablet and above, hidden on mobile */}
                <div className="hidden md:flex absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-primary text-white rounded-full items-center justify-center text-sm md:text-base font-bold shadow-lg font-poppins">
                  {step.id}
                </div>
              </div>
              <h3 className="font-poppins font-semibold text-gray-800 mb-2 text-base md:text-lg">
                {step.title}
              </h3>
              <p className="font-poppins text-gray-600 text-sm md:text-base leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}