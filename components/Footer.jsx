import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#fdf7ef] border-t border-[#e2d6c5] text-[#6f4e2d] font-serif">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Dr. Astha Maheshwari</h2>
          <p className="text-sm leading-relaxed">
            Trusted and awarded astrologer with decades of experience in Vedic
            astrology, palmistry, and tantra practices. Honored with Grand Ph.D.
            & National Awards.
          </p>
        </div>

        {/* Navigation Links */}

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
          <a
            href="https://wa.me/919607184781"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline text-green-700"
          >
            📱 Chat on WhatsApp: +91 96071 84781
          </a>
          <p className="text-sm mt-2">Email: info@asthamaheshwari.com</p>
          <div className="mt-4 flex space-x-4 text-lg">
            <a href="#" className="hover:text-[#9a744e]">
              🌐
            </a>
            <a href="#" className="hover:text-[#9a744e]">
              📘
            </a>
            <a href="#" className="hover:text-[#9a744e]">
              📸
            </a>
            <a href="#" className="hover:text-[#9a744e]">
              ▶️
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs py-4 border-t border-[#e2d6c5]">
        &copy; {new Date().getFullYear()} Dr. Astha Maheshwari. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
