import React from "react";

const SupplierCard = () => {
  return (
    <div className="bg-[#E8FBFF] py-20 items-center mt-20 flex justify-around">
      <div className="text-center ">
        <h2 className="text-2xl font-bold text-black flex gap-2">
          Let Suppliers{" "}
          <span className="flex flex-col gap-1">
            Find You
            <div className="underlin bg-[#EB7150] w-[100%] h-[2px]"></div>
          </span>
        </h2>
      </div>
      <div className="ml-5">
        <button className="bg-[#EB7150] text-white px-6 py-2 rounded hover:bg-orange-600 transition">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default SupplierCard;
