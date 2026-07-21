"use client";
import React, { useState } from "react";
import CommonTitle from "./commonTitle";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Minus, Plus } from "lucide-react";

const faqData = [
  {
    question: "Is ear piercing safe for babies?",
    answer:
      "Yes, our trained specialists have extensive experience providing extremely gentle and safe ear piercing for newborns and babies using sterile techniques.",
  },
  {
    question: "What is the starting price?",
    answer:
      "Our professional home ear piercing services start at just ₹1,500, which covers the specialist's home visit, sterilized studs, and procedure.",
  },
  {
    question: "What equipment do you use?",
    answer:
      "We use 100% pre-sterilized, single-use studs and medical-grade equipment (including sealed cassettes for gunshot piercing) to prevent any contamination.",
  },
  {
    question: "Which method is better: manual or gunshot?",
    answer:
      "Both are safe. The manual technique is preferred by some for its precision and traditional nature, while the gunshot method is extremely fast and virtually painless. We can advise you based on the age of the individual.",
  },
  {
    question: "Do you offer services across Hyderabad?",
    answer:
      "Yes, we provide hygienic home ear piercing services in all areas of Hyderabad at your preferred time slot.",
  },
  {
    question: "What aftercare support do you provide?",
    answer:
      "We apply a soothing antiseptic directly after piercing and provide detailed healing guidelines. You can also call us for any post-piercing questions.",
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  function FAQTrigger({
    children,
    ...props
  }: React.ComponentProps<typeof AccordionTrigger>) {
    return (
      <AccordionTrigger
        className="flex flex-1 items-center justify-between py-4 px-4 text-left font-poppins text-sm md:text-base text-heading hover:no-underline group gap-4 animate-none"
        {...props}
      >
        {children}
        <div className="relative flex items-center justify-center w-6 h-6 rounded-full border-2 border-primary bg-white transition-all duration-300 ease-in-out group-data-[state=open]:scale-110">
          <Plus className="absolute w-3 h-3 text-primary transition-all duration-300 ease-in-out group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0" />
          <Minus className="absolute w-3 h-3 text-primary transition-all duration-300 ease-in-out opacity-0 rotate-45 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
        </div>
      </AccordionTrigger>
    );
  }

  return (
    <section id="faq" className="w-full lg:px-20 bg-[#FAF7FF] mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <CommonTitle title={"faq"} />
        <h2 className="text-2xl md:text-5xl font-bold text-heading leading-tight">
          You&apos;ve Got Questions,
          <br />
          We&apos;ve Got Answers
        </h2>
      </div>

      {/* Accordion */}
      <div className="bg-[#FAF7FF] rounded-2xl md:p-8 py-10">
        <Accordion
          type="single"
          collapsible
          className="space-y-0"
          value={openItem}
          onValueChange={setOpenItem}
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 last:border-b-0 data-[state=open]:bg-white data-[state=open]:rounded-lg data-[state=open]:mx-2 transition-all duration-300"
            >
              <FAQTrigger>{faq.question}</FAQTrigger>
              <AccordionContent className="pb-4 pt-2 px-4 overflow-hidden transition-all duration-500 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="transform transition-all duration-300 ease-in-out">
                  <p className="text-foreground leading-relaxed text-sm md:text-base font-poppins text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
