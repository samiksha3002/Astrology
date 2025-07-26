// pages/book.tsx

"use client";

import React from "react";
import Link from "next/link";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      {/* Video Section */}
      <div className="w-full h-[80vh] sm:h-[90vh] max-w-[500px] mb-6 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
        <video
          src="/videoplus.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain bg-black"
        />
      </div>

      {/* Button */}
      <Link
        href="/appointment"
        className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md"
      >
        Book a Package
      </Link>
    </main>
  );
}
