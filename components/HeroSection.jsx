"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-white font-['Playfair_Display'] overflow-hidden">
      {/* Astha Connects Text on Top (single line) */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 text-center">
        <h1
          className="text-5xl md:text-6xl text-[#3e3526] tracking-wide italic font-normal text-nowrap"
          style={{ fontFamily: "Italianno, cursive" }}
        >
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
              href="/next"
              className="bg-[#3e3526] text-white px-6 py-3 text-sm hover:bg-[#2f271e]"
            >
              ♦ Book Package
            </a>
          </div>
        </div>

        {/* Right Image + Wheel */}
        <div className="relative w-fit">
          <Image
            src="/astrology-wheel.webp"
            alt="Rotating Wheel"
            width={220}
            height={220}
            className="absolute bottom-[-40px] right-[-30px] lg:right-[-50px] lg:bottom-[-40px] z-20 animate-spinSlow"
          />
          <Image
            src="/girl.png"
            alt="Dr. Astha Maheshwari"
            width={380}
            height={380}
            className="rounded-xl relative z-10 shadow-md"
          />
        </div>
      </div>

      {/* Vertical Text */}
      <div className="hidden lg:block absolute left-2 top-32 rotate-180 writing-vertical text-[12px] text-[#5b4832] tracking-wider uppercase">
        THE BEST ASTROLOGER IN India
      </div>
    </section>
  );
};

export default HeroSection;
