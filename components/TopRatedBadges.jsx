import React from "react";

const TopRatedBadges = () => {
  const badges = [
    {
      city: "KOLKATA",
      color: "text-[#3e3f2b]",
      border: "border-[#3e3f2b]",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      city: "MUMBAI",
      color: "text-[#9b371d]",
      border: "border-[#9b371d]",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      city: "DELHI",
      color: "text-[#9c8a6e]",
      border: "border-[#9c8a6e]",
      stars: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="bg-[#fdf7ef] py-10 px-6 text-center">
      <p className="text-left italic text-[#6f4e2d] font-semibold text-xl mb-8"></p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-60 h-60 border-2 ${badge.border} rounded-full p-6`}
          >
            <div className="text-yellow-500 text-xl mb-2">{badge.stars}</div>
            <p className={`text-xl font-semibold ${badge.color}`}>TOP RATED</p>
            <p className={`text-sm font-medium ${badge.color}`}>
              ASTROLOGER <br /> IN {badge.city}
            </p>
            <div
              className={`mt-4 w-10 h-10 border-b-4 ${badge.border} border-l-4 rounded-bl-full`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedBadges;
