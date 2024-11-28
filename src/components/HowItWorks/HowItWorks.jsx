import React from "react";
import img1 from "../../../public/assets/howItworks/1.png";
import img2 from "../../../public/assets/howItworks/2.png";
import img3 from "../../../public/assets/howItworks/3.png";
import img4 from "../../../public/assets/howItworks/4.png";
import img5 from "../../../public/assets/howItworks/5.png";
import img6 from "../../../public/assets/howItworks/6.png";

const HowItWorks = () => {
  return (
    <section className="bg-white py-12 px-6 m-auto w-[80%]">
      <h2 className="text-3xl font-bold text-center mb-8">How it works?</h2>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center text-center bg-[#E8FBFF]  p-10  justify-center">
          <div className="p-4 rounded-full mb-4">
            <img src={img1} alt="Icon" className="h-16 w-16" />
          </div>
          <h3 className="font-semibold text-lg">
            Select Your Role and Sign Up
          </h3>
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <div className=" p-4 rounded-full mb-4">
            <img src={img2} alt="Icon" className="h-16 w-16" />
          </div>
          <h3 className="font-semibold text-lg">
            Buyers Post Your Requirements
          </h3>
        </div>
        <div className="flex flex-col items-center text-center justify-center bg-[#E8FBFF] p-10">
          <div className=" p-4 rounded-full mb-4">
            <img src={img3} alt="Icon" className="h-16 w-16" />
          </div>
          <h3 className="font-semibold text-lg">
            Review, Select, and Contact the Best Suppliers
          </h3>
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <div className=" p-4 rounded-full mb-4">
            <img src={img4} alt="Icon" className="h-16 w-16" />
          </div>
          <h3 className="font-semibold text-lg">
            Suppliers Complete your Profile
          </h3>
        </div>
        <div className="flex flex-col items-center text-center justify-center bg-[#E8FBFF] p-10">
          <div className="p-4 rounded-full mb-4">
            <img src={img5} alt="Icon" className="h-16 w-16" />
          </div>
          <h3 className="font-semibold text-lg">
            Contact Buyers and Share Your Quote
          </h3>
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <div className="p-4 rounded-full mb-4">
            <img src={img6} alt="Icon" className="h-16 w-16" />
          </div>
          <h3 className="font-semibold text-lg">
            Make Business and Leave Feedback
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
