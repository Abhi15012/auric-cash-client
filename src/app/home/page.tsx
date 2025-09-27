import React from "react";
import Hero from "./_components/Hero";

import WhyChooseUs from "./_components/why-choose-us";
import VideoSection from "./_components/videoSection";
import Services from "./_components/our-services";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      {/* <VideoSection /> */}
      <Testimonials />


    </>
  );
}
