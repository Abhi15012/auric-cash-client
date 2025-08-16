import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function How() {
  const steps = [
    {
      id: 1,
      image: "/image48.svg",
      title: "Fill Your Contact Details",
      description: "Enter your name and mobile number in our website form",
      width: 140,
      height: 100,
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
  ];

  return (
    <section className="bg-gray-100 py-8 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-1 h-8 bg-primary mr-3"></div>
            <span className="font-bold text-sm uppercase tracking-wide text-gray-700">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Your Simple, Secure
            <br />
            Gold Release Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Card */}
              <div className="text-center group">
                <div className="relative mb-4 md:mb-6 flex justify-center">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={step.width}
                    height={step.height}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.id}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 &&
                (step.id === 3 ? (
                  <div className="hidden lg:flex items-center justify-center"></div>
                ) : (
                  <div className="hidden lg:flex items-center justify-center">
                    <ArrowRight className="w-20 h-20 text-black" />
                  </div>
                ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
