import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-white px-6 md:px-20 py-12 font-['Playfair_Display']">
      {/* Vertical Text */}
      <div className="absolute left-2 top-20 rotate-180 writing-vertical text-[12px] text-[#5b4832] tracking-wider uppercase">
        THE BEST ASTROLOGER IN KOLKATA
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full text-[#6f4e2d]">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-snug mb-4">
            The most Trusted name <br />
            in the field of Astrology
          </h1>
          <p className="italic font-semibold text-lg mb-6">Dr. Sohini Sastri</p>
          <div className="flex items-center gap-6">
            <button className="bg-[#3e3526] text-white px-6 py-3 text-sm hover:bg-[#2f271e]">
              ♦ Book Appointment
            </button>
            <span className="text-sm">Call : 9163 532 538</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-10 lg:mt-0">
          <img
            src="/sohini.webp"
            alt="Dr. Sohini Sastri"
            className="w-[320px] lg:w-[380px] rounded-lg shadow-md"
          />
          <img
            src="/astrology-wheel.webp"
            alt="Astrology Wheel"
            className="absolute -bottom-10 -right-10 w-44 lg:w-52"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
