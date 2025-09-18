import React from "react";
import Hero from "./_components/Hero";
import How from "./_components/How-it-works";
import FAQSection from "./_components/Faq";
import ServiceComp from "../../../components/ui/our-services";

export default function page() {
  return (
    <>
      <Hero />
      <How />
      <ServiceComp
        title={"Selling Gold"}
        data={[
  "Instant Payment – Cash, UPI, or bank transfer within minutes",
  "Transparent Valuation – Purity and weight checked in front of you",
  "Best Market Rates – Get the highest value for your gold jewelry today",
  "Sell Pledged or Direct Gold – Release and sell pledged gold or sell your idle gold directly"
]
}
      />
      <FAQSection />
    </>
  );
}
