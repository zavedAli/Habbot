import React from "react";
import Bg from "../../../public/assets/Hero/Hero.png";
import img1 from "../../../public/assets/Hero/input/1.png";
import img2 from "../../../public/assets/Hero/input/2.png";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center w-[100%] mb-10"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#123557] bg-opacity-80 z-10"></div>{" "}
      {/* Custom alpha layer */}
      <div className="p-8 rounded-lg text-center text-white max-w-4xl w-[100%] z-20">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Are You a Supplier?
        </h1>
        <h1 className="text-3xl md:text-4xl font-light mb-4">
          Explore Matching Oppurtunity
        </h1>

        {/* Form Section */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Input: Required Service */}
          <div className="in1 relative w-[100%]">
            <input
              type="text"
              placeholder="Search your required service here"
              className="flex-1 w-[100%]  py-3 ps-12 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-green-800"
            />
            <img src={img1} alt="" className="absolute left-3 top-3" />
          </div>
          {/* Input: Desired Location */}
          <div className="in2 relative w-[100%]">
            <input
              type="text"
              placeholder="Search your desired location here"
              className="flex-1 w-[100%] py-3 ps-12 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-green-800"
            />
            <img src={img2} alt="" className="absolute left-3 top-3" />
          </div>

          {/* Search Button */}
          <button className="bg-green-700 text-white px-6 py-3 rounded-[5px] hover:bg-green-800">
            Search
          </button>
        </div>

        {/* Buyer Link */}
        <div className="mt-6">
          <p className="text-m">
            <span className="h font-bold"> Are you a buyer?{"  "}</span>

            <a href="/buyer" className="underline">
              Click here if you are looking to post a requirement.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
