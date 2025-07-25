import React from "react";
import HeroSection from "../components/HeroSection";
import TopMarquee from "../components/TopMarquee";
import TopRatedBadges from "../components/TopRatedBadges";
import AwardSection from "../components/AwardSection";
import Footer from "../components/Footer";
import WhySection from "../components/WhySection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <TopMarquee />
      <TopRatedBadges />
      <AwardSection />
      <WhySection />
      {/* Add more sections as needed */}
      {/* Ensure the Footer is at the bottom of the page */}
      <Footer />
    </div>
  );
}

export default App;
