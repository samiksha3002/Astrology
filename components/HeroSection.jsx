"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-white font-['Playfair_Display'] overflow-hidden">
      {/* Astha Connects Text on Top (overlay style, no gap) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30 text-center pt-4">
        <h1 className="text-2xl md:text-3xl font-bold text-[#3e3526] tracking-wide uppercasepx-4 py-1 rounded-md shadow-sm">
          Astha Connects
        </h1>
      </div>

      {/* Hero Content */}
      <div className="px-6 md:px-20 pb-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="lg:w-1/2 text-center lg:text-left text-[#6f4e2d] mt-4 md:mt-10">
          <h2 className="text-4xl md:text-5xl font-semibold leading-snug mb-4">
            The most Trusted name <br />
            in the field of Astrology
          </h2>
          <p className="italic font-semibold text-lg mb-6">
            Dr. Astha Maheshwari
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="/appointment"
              className="bg-[#3e3526] text-white px-6 py-3 text-sm hover:bg-[#2f271e]"
            >
              ♦ Book Appointment
            </a>
            <span className="text-sm">Call: 9163 532 538</span>
          </div>
        </div>

        {/* Right Image + Rotating Wheel */}
        <div className="relative w-fit">
          {/* Wheel Image in front */}
          <Image
            src="/astrology-wheel.webp"
            alt="Rotating Wheel"
            width={220}
            height={220}
            className="absolute bottom-[-40px] right-[-30px] lg:right-[-50px] lg:bottom-[-40px] z-20 animate-spinSlow"
          />

          {/* Girl Image behind */}
          <Image
            src="/girl.png"
            alt="Dr. Sohini Sastri"
            width={380}
            height={380}
            className="rounded-xl relative z-10 shadow-md"
          />
        </div>
      </div>

      {/* Vertical Text (only on desktop) */}
      <div className="hidden lg:block absolute left-2 top-32 rotate-180 writing-vertical text-[12px] text-[#5b4832] tracking-wider uppercase">
        THE BEST ASTROLOGER IN KOLKATA
      </div>
    </section>
  );
};

export default HeroSection;
