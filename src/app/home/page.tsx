import React from "react";
import Hero from "./_components/Hero";
import About from "./_components/about";
import Services from "./_components/our-services";
import How from "./_components/How-it-works";
import WhyChooseUs from "./_components/why-choose-us";
import { Testimonials } from "./_components/testimonials";
import FAQSection from "./_components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <How />

      <Testimonials />
      <FAQSection />
    </>
  );
}
