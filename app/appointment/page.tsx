"use client";
import React, { useState } from "react";
import Image from "next/image";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    dob: "",
    birthTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "d6907de1-88da-4049-b20d-bc731cf12d21"); // Web3Forms Key
    form.append("subject", "New Astrology Appointment");
    form.append("name", formData.name);
    form.append("number", formData.number);
    form.append("email", formData.email);
    form.append("dob", formData.dob);
    form.append("birthTime", formData.birthTime);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await res.json();

    if (result.success) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        number: "",
        email: "",
        dob: "",
        birthTime: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-white px-6 md:px-20 py-16 font-['Playfair_Display'] text-[#3e3526]">
      {/* Top Image */}
      <div className="max-w-3xl mx-auto mb-10">
        <Image
          src="/img1.jpg"
          alt="Astrology Banner"
          width={1000}
          height={400}
          unoptimized
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Book an Appointment
      </h1>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6 p-6 rounded-xl shadow-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/img2.jpg')" }}
      >
        <div className="bg-white/80 p-6 rounded-lg space-y-6 backdrop-blur-sm">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          {/* Birth Time */}
          <div>
            <label className="block mb-1 font-medium">Birth Time</label>
            <input
              type="time"
              name="birthTime"
              value={formData.birthTime}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#3e3526] text-white px-6 py-2 rounded hover:bg-[#2f271e] block mx-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AppointmentForm;
