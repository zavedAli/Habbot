import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaCheck } from "react-icons/fa";

const VideoDes = () => {
  const [activeTab, setActiveTab] = useState("buyer"); // Manage active section

  return (
    <div className="bg-[#123557] text-white flex flex-col md:flex-row items-center justify-between py-20 px-8 md:p-16 w-[100%] sm:w-[90%] m-auto">
      {/* Video Section */}
      <div className="flex-1 flex justify-center items-center my-10 w-full md:w-2/3 lg:w-1/2">
        <div className="w-full">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            controls
            width="100%" // Ensure it's 100% of the container width
            height="300px" // Set a fixed height for the video
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-10 w-[30%]">
        {/* Tabs */}
        <div className="flex justify-center md:justify-start space-x-20  mb-6">
          <button
            onClick={() => setActiveTab("buyer")}
            className={`text-xl font-semibold px-10 pb-2 ${
              activeTab === "buyer"
                ? "text-[#EB7150] border-b-4 rounded-md border-[#EB7150]"
                : "text-white"
            }`}
          >
            Buyer
          </button>
          <button
            onClick={() => setActiveTab("supplier")}
            className={`text-xl font-semibold px-10 pb-2 ${
              activeTab === "supplier"
                ? "text-[#EB7150] border-b-4 rounded-md border-[#EB7150]"
                : "text-white"
            } text-lg`}
          >
            Supplier
          </button>
        </div>

        {/* Content Section */}
        {activeTab === "buyer" ? (
          <ul className="space-y-4 text-lg px-2">
            <li className="flex items-center gap-2">
              <span className="text-white  rounded-full p-1 text-[12px] bg-green-500">
                <FaCheck />
              </span>{" "}
              Post your requirements.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white  rounded-full p-1 text-[12px] bg-green-500">
                <FaCheck />
              </span>{" "}
              Sit back for multiple suppliers to contact you.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white  rounded-full p-1 text-[12px] bg-green-500">
                <FaCheck />
              </span>{" "}
              Choose among the suppliers based on ratings and reviews.
            </li>
          </ul>
        ) : (
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-white  rounded-full p-1 text-[12px] bg-green-500">
                <FaCheck />
              </span>
              View buyer requirements.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white  rounded-full p-1 text-[12px] bg-green-500">
                <FaCheck />
              </span>
              Submit your proposals.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white  rounded-full p-1 text-[12px] bg-green-500">
                <FaCheck />
              </span>
              Get selected based on ratings and experience.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default VideoDes;
