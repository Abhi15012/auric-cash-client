import Hero from "../app/landing/components/Hero";
import FAQSection from "./landing/components/Faq";
import How from "./landing/components/How-t-works";


export default function Home() {
  return (
    <div >
      <Hero />
      <How />
      <FAQSection />
    </div>
  );
}
