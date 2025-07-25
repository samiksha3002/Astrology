import React from "react";

const AwardSection = () => {
  return (
    <section className="bg-[#fdf7ef] py-16 px-4 md:px-20 relative">
      {/* Optional Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-gray-500 hover:text-gray-700">
        &#10094;
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-gray-500 hover:text-gray-700">
        &#10095;
      </button>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Image with vase and frame */}
        <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-lg p-6">
          <img
            src="/award-certificate.png"
            alt="Award Certificate"
            className="rounded-md mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-[#6f4e2d]">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-[#9a744e] drop-shadow-[0_2px_2px_rgba(154,116,78,0.2)]">
            Grand Ph.D. in Astrology
          </h2>
          <p className="text-base leading-relaxed text-[#5f4e3a]">
            Dr. Sohini Sastri’s remarkable achievement of receiving the Grand
            Ph.D. in Astrology from the National American University stands as a
            testament to her exceptional contributions to the field. As the sole
            astrologer honored with this prestigious award, Dr. Sastri’s
            recognition highlights her profound expertise, dedication, and
            influence in astrology. Her work not only elevates the standards of
            astrological practice but also inspires peers and enthusiasts
            globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
