"use client";
import React from "react";
import Link from "next/link";

const WhySection = () => {
  return (
    <section className="bg-white px-6 md:px-24 py-16 text-center font-['Playfair_Display'] text-[#6f4e2d]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-shadow">
        Why Dr. Astha Maheshwari
      </h2>
      <p className="text-xl md:text-2xl italic text-[#a58564] mb-6">
        Because she is the best Astrologer in India
      </p>

      {/* Divider with symbol */}
      <div className="flex justify-center items-center mb-6">
        <span className="w-16 h-px bg-[#3c2e21] mr-2"></span>
        <span className="text-xl">✦✦</span>
        <span className="w-16 h-px bg-[#3c2e21] ml-2"></span>
      </div>

      {/* Subheading */}
      <p className="uppercase text-[14px] tracking-wide text-[#b39378] mb-10">
        Get personalized Astrological guidance. Navigate life’s journey with
        cosmic wisdom tailored to you by the best astrologer in India.
      </p>

      {/* Paragraphs */}
      <div className="space-y-6 max-w-4xl mx-auto text-[17px] leading-relaxed text-[#2d2d2d]">
        <p>
          Dr. Astha Maheshwari firmly believes that, akin to physical health,
          every individual possesses spiritual well-being to nurture. Spiritual
          vitality plays a crucial role in shaping one’s karma, overall
          well-being, and connection with the universe. According to her,
          Astrology is not just fortune-telling; it is the means of course
          correction, aligning planetary energies to foster personal growth and
          upliftment.
        </p>
        <p>
          Dr. Maheshwari advises her clients to prioritize their life’s most
          significant aspects and address them with potent remedies, whether
          through astrology, numerology, or tantric practices tailored to their
          needs. Her teachings underscore the importance of focusing on one’s
          spiritual health alongside physical wellness for a harmonious and
          fulfilling life journey.
        </p>
      </div>

      {/* Button with Link */}
      <div className="mt-10">
        <Link href="/next">
          <button className="bg-[#3e3526] text-white px-6 py-3 text-sm hover:bg-[#2f271e]">
            ♦ Book Appointment
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhySection;
