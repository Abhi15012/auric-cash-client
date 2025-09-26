"use client"
import React, { useState, useRef, useEffect } from "react";
import CommonTitle from "./commonTitle";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger
} from "../../../../components/ui/accordion";
import { Minus, Plus } from "lucide-react";




const faqData = [
  {
    question: "Can I sell my pledged gold after releasing it?",
    answer:
      "Yes, once your pledged gold is released and evaluated, you can sell it immediately.",
  },
  {
    question: "Do you buy both pledged and normal gold?",
    answer:
      "Yes, we buy both pledged gold (released from banks, NBFCs, or pawnbrokers) and normal gold jewelry directly.",
  },
  {
    question: "How do I sell my gold?",
    answer:
      "You can contact us and then visit us directly with your jewelry, or we can help release pledged gold and buy it at the same time.",
  },
  {
    question: "How soon will I get my payment?",
    answer:
      "We offer instant payment — cash, bank transfer, or UPI — once your gold is evaluated.",
  },
  {
    question: "How do you determine the price?",
    answer:
      "We use certified testing methods and pay you based on the day's highest market rate.",
  },
  {
    question: "Is my gold safe during the evaluation?",
    answer:
      "Absolutely. The evaluation is done in your presence using certified testing methods.",
  },
  {
    question: "What documents do I need to sell my gold?",
    answer:
      "You only need to provide a valid ID proof and address proof.",
  },
  {
    question: "Can I sell damaged or old jewelry?",
    answer:
      "Yes, we buy gold in any form — broken, old, or unused jewelry — and pay based on purity and weight.",
  },
  {
    question: "Do you provide valuation help before selling?",
    answer:
      "Yes, you can walk in for a free gold valuation with no obligation to sell.",
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)
  const accordionRef = useRef<HTMLDivElement>(null)

  // Handle outside clicks to close accordion
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {

      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])


  
function FAQTrigger({
  children,
  ...props
}: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      className="flex flex-1 items-center justify-between py-4 px-4 text-left font-poppins text-sm md:text-base text-heading hover:no-underline group gap-4"
      {...props}
    >
      {children}
      <div className="relative flex items-center justify-center w-6 h-6  rounded-full border-2 border-primary bg-white transition-all duration-300 ease-in-out group-data-[state=open]:scale-110">
        <Plus className="absolute w-3 h-3 text-primary transition-all duration-300 ease-in-out group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0" />
        <Minus className="absolute w-3 h-3 text-primary transition-all duration-300 ease-in-out opacity-0 rotate-45 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
      </div>
    </AccordionTrigger>
  )
}

  return (
    <section className="w-full lg:px-20 bg-[#EEF8FE] mx-auto px-6 py-16">
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
      <div
        ref={accordionRef}
        className="bg-[#eef8fe] rounded-2xl md:p-8 py-10 "
      >
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
  )
}
