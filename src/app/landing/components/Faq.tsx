"use client";

import type React from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

// Custom FAQ Trigger with Plus/Minus animation
function FAQTrigger({
  children,
  className,
  isLast = false,
  ...props
}: React.ComponentProps<typeof AccordionTrigger> & { isLast?: boolean }) {
  return (
    <AccordionTrigger
      className="flex flex-1 items-center justify-between py-6 text-left text-base font-medium text-heading hover:no-underline group"
      {...props}
    >
      {children}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-primary bg-white transition-all duration-200 group-hover:bg-roman">
        <Plus className="absolute w-4 h-4 text-primary transition-all duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
        <Minus className="absolute w-4 h-4 text-primary transition-all duration-200 group-data-[state=closed]:rotate-90 group-data-[state=closed]:opacity-0" />
      </div>
    </AccordionTrigger>
  );
}

const faqData = [
  {
    question: "Do you provide gold loans?",
    answer:
      "Yes, we help you close your existing gold loan and return your gold.",
  },
  {
    question: "Can I release my pledged gold?",
    answer:
      "We provide services to help you release your pledged gold from existing loans.",
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
];

export default function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-primary"></div>
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            FAQS
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-heading leading-tight">
          You've Got Questions,
          <br />
          We've Got Answers
        </h2>
      </div>

      {/* Accordion */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <Accordion type="single" collapsible className="space-y-0">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 last:border-b-0"
            >
              <FAQTrigger isLast={index === faqData.length - 1}>
                {faq.question}
              </FAQTrigger>
              <AccordionContent className="pb-6 pt-2 overflow-hidden transition-all data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <p className="text-foreground leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
