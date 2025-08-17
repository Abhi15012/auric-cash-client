import Hero from "../app/landing/components/Hero";
import FAQSection from "./landing/components/Faq";
import How from "./landing/components/How-it-works";
import VideoSection from "./landing/components/videoSection";
import WhyChooseUs from "./landing/components/why-choose-us";


export default function Home() {
  return (
    <div >
      <Hero />
      <How />
      <WhyChooseUs/>
      <VideoSection/>
      <FAQSection />
    </div>
  );
}
