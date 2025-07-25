import React from "react";
import HeroSection from "../components/HeroSection";
import TopMarquee from "../components/TopMarquee";
import TopRatedBadges from "../components/TopRatedBadges";
import AwardSection from "../components/AwardSection";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <TopMarquee />
      <TopRatedBadges />
      <AwardSection />
      <Footer />
    </div>
  );
}

export default App;
