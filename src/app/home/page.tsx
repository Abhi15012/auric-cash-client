import React from "react";
import Hero from "./_components/Hero";
import How from "./_components/How-it-works";
import WhyChooseUs from "./_components/why-choose-us";
import VideoSection from "./_components/videoSection";
import FAQSection from "./_components/Faq";
import LocationPopup from "./_components/location-popup";
import Services from "./_components/our-services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <VideoSection />
      {/* <LocationPopup /> */}


    </>
  );
}
