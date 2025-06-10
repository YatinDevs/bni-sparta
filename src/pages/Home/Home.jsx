import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import MemberDirectory from "./MemberDirectory";
import FAQSection from "./FAQSection";
import TestimonialsSection from "./TestimonialsSection";
import LocationSection from "./LocationSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MemberDirectory />
      <LocationSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}

export default Home;
