"use client"
import React from "react";

const Banner = () => {

  return (
    <>
      <div className="bg-[#F2F6F7] lg:py-[100px] py-12 relative ">
        <div className="lg:w-9/12 w-11/12 mx-auto">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-y-10">
            <div>
              <div className="flex items-center gap-x-2 mb-4">
                <img src="/image/banLogo.png" alt="banLogo" />
                <p className="text-[#1D2022] text-[16px] font-nunito">
                  Real Estate Agency
                </p>
              </div>

              <h2 className="font-bold text-[#000000] text-[45px] lg:text-[60px] font-poppins leading-tight">
                Find Your Dream
              </h2>
              <h2 className="font-bold text-[#000000] text-[45px] lg:text-[60px] font-poppins leading-tight">
                House By Us
              </h2>

              <p className="text-[#1D2022] text-[16px] font-nunito mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing
              </p>

              <div className="flex items-center gap-x-4 mt-6">
                <a
                  href="#"
                  className="px-6 py-3 bg-[#FF5A3C] text-[14px] font-nunito text-white hover:bg-[#e64d31] duration-200"
                >
                  View Properties
                </a>
                <img
                  src="/image/banPlay.png"
                  alt="banPlay"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="/image/ban.png"
                alt="ban"
                className="w-[480px] lg:w-[600px]"
              />
            </div>
          </div>

          <div className="flex lg:absolute lg:bottom-[-50px] lg:w-9/12 w-11/12 z-20! mt-10 lg:mt-0">
            <div className="bg-white shadow-xl justify-between  lg:w-9/12 w-11/12 px-8 py-8 flex flex-col lg:flex-row gap-4 items-center">
              <select className="w-full bg-white border border-gray-300 px-4 py-3 outline-1 outline-[#FF5A3C] text-[#5C5B7B] font-bold font-nunito">
                <option>Choose Area</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Sylhet</option>
              </select>
              <select className="w-full bg-white border border-gray-300 px-4 py-3 outline-1 outline-[#FF5A3C]  text-[#5C5B7B] font-bold font-nunito">
                <option>Property Status</option>
                <option>Rent</option>
                <option>Sale</option>
              </select>
              <select className="w-full bg-white border border-gray-300 px-4 py-3 outline-1 outline-[#FF5A3C]  text-[#5C5B7B] font-bold font-nunito">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Office</option>
              </select>
              <div className="flex items-center gap-x-6">
                <img src="/image/se.png" alt="se" />
                <button className="bg-[#FF5A3C] hover:bg-[#e64d31] duration-200 text-white text-[14px] font-poppins px-10 py-3 w-full lg:w-[170px] cursor-pointer">
                  FIND NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
