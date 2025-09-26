"use client"

import type React from "react"
import { Plus, Minus } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion"
import { useState, useRef, useEffect } from "react"
import CommonTitle from "./commonTitle"

// Custom FAQ Trigger with Plus/Minus animation
function FAQTrigger({
  children,
  ...props
}: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      className="flex flex-1 items-center justify-between py-4 px-4 text-left font-poppins text-sm md:text-base text-heading hover:no-underline group gap-2"
      {...props}
    >
      {children}
      <div className="relative flex items-center justify-center w-6 h-6 rounded-full border-2 border-primary bg-white transition-all duration-300 ease-in-out group-data-[state=open]:scale-110">
        <Plus className="absolute w-3 h-3 text-primary transition-all duration-300 ease-in-out group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0" />
        <Minus className="absolute w-3 h-3 text-primary transition-all duration-300 ease-in-out opacity-0 rotate-45 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
      </div>
    </AccordionTrigger>
  )
}

const faqData = [
  {
    question: "Do you provide gold loans?",
    answer: "Yes, we help you close your existing gold loan and return your gold.",
  },
  {
    question: "Can I release my pledged gold?",
    answer: "We provide services to help you release your pledged gold from existing loans.",
  },
  {
    question: "How soon can I get my gold back?",
    answer:
      "The process typically takes 24-48 hours once all documentation is completed and verified.",
  },
  {
    question: "How much is your commission?",
    answer:
      "Our commission structure is transparent and competitive. Contact us for detailed pricing information.",
  },
  {
    question: "Is my gold safe?",
    answer:
      "Yes, your gold is completely safe. We follow strict security protocols and provide full insurance coverage.",
  },
  {
    question: "Can I sell my gold immediately after releasing it?",
    answer:
      "Yes, once your gold is released, you have complete freedom to sell it immediately if you choose.",
  },
  {
    question: "Are there any charges for pledged gold release service?",
    answer:
      "We have transparent pricing with no hidden charges. All fees will be clearly explained upfront.",
  },
  {
    question: "What is the process for releasing pledged gold?",
    answer:
      "The process involves documentation verification, loan settlement, and gold release. We guide you through each step.",
  },
  {
    question: "Do I need to visit the bank or pawnshop personally?",
    answer:
      "In most cases, we can handle the process on your behalf. Personal visits may be required only for final verification.",
  },
  {
    question: "Do you offer valuation help?",
    answer:
      "Yes, we provide professional gold valuation services to ensure you get the best value for your gold.",
  },
]

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)
  const accordionRef = useRef<HTMLDivElement>(null)

  // Handle outside clicks to close accordion
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setOpenItem(undefined)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

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
