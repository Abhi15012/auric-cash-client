import React from "react";
import Hero from "./_components/Hero";
import How from "./_components/How-it-works";
import WhyChooseUs from "./_components/why-choose-us";
import VideoSection from "./_components/videoSection";
import FAQSection from "./_components/Faq";
import ServiceComp from "../../../components/ui/our-services";

export default function page() {
  return (
    <>
      <Hero />
      <How />
      <FAQSection />
            <ServiceComp
              title={"Release Pledged Gold"}
              data={[
  "End-to-End Support – From loan closure to gold handover",
  "Lowest Commission Guaranteed – More savings for you",
  "Safe & Transparent – 100% secure process with full updates",
  "Fast Processing – Your gold released in days, not weeks"
]

      }
      />  
      
    </>
  );
}
