import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Des = () => {
  return (
    <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-20">
      {/* Left Side: Text Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Ready to dive into <span className="text-indigo-900">HABOT</span>?
        </h2>
        <p className="mt-4 text-gray-600">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="mt-6  py-2 bg-green-700 text-white text-lg font-sm rounded-sm px-10 hover:bg-green-800 transition flex gap-8 items-center">
          Sign up Today!
          <FaArrowRightLong />
        </button>
      </div>

      {/* Right Side: Cards */}
      <div className="grid grid-cols-2 gap-4">
        {[
          "Abu Dhabi",
          "Dubai",
          "Sharjah & Ajman",
          "Fujairah",
          "Ras Al Khaimah",
          "Umm Al Quwain",
        ].map((location) => (
          <div
            key={location}
            className="border-2 border-yellow-500 rounded-md text-center py-4 text-gray-700 font-medium hover:bg-yellow-50 transition cursor-pointer"
          >
            {location}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Des;
