"use client";
import React, { useState } from "react";

const apartmentData = [
    {
        id: 1,
        label: "The Studio",
        title: "The Studio Suite",
        desc: "Perfect for singles or couples, this studio offers a cozy yet modern living space with smart utilization of every square foot.",
        specs: [
            { label: "Total Area", value: "1200 Sq. Ft" },
            { label: "Bedroom", value: "150 Sq. Ft" },
            { label: "Bathroom", value: "45 Sq. Ft" },
            { label: "Smoking/Pets", value: "Allowed" },
            { label: "Lounge", value: "650 Sq. Ft" },
        ],
        image: "/image/sl3.png",
    },
    {
        id: 2,
        label: "Deluxe Portion",
        title: "Deluxe Portion",
        desc: "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
        specs: [
            { label: "Total Area", value: "2800 Sq. Ft" },
            { label: "Bedroom", value: "150 Sq. Ft" },
            { label: "Bathroom", value: "45 Sq. Ft" },
            { label: "Smoking/Pets", value: "Allowed" },
            { label: "Lounge", value: "650 Sq. Ft" },
        ],
        image: "/image/apart.png",
    },
    {
        id: 3,
        label: "Penthouse",
        title: "Luxury Penthouse",
        desc: "Experience the top-tier lifestyle with our luxury penthouse featuring panoramic views and exclusive amenities.",
        specs: [
            { label: "Total Area", value: "4500 Sq. Ft" },
            { label: "Bedroom", value: "200 Sq. Ft" },
            { label: "Bathroom", value: "80 Sq. Ft" },
            { label: "Smoking/Pets", value: "Not Allowed" },
            { label: "Lounge", value: "900 Sq. Ft" },
        ],
        image: "/image/sl1.png",
    },
    {
        id: 4,
        label: "Top Garden",
        title: "Top Garden Floor",
        desc: "A green sanctuary in the sky. This floor is dedicated to nature lovers with an integrated indoor-outdoor garden system.",
        specs: [
            { label: "Total Area", value: "3200 Sq. Ft" },
            { label: "Bedroom", value: "180 Sq. Ft" },
            { label: "Bathroom", value: "50 Sq. Ft" },
            { label: "Smoking/Pets", value: "Allowed" },
            { label: "Lounge", value: "700 Sq. Ft" },
        ],
        image: "/image/sl2.png",
    },
    {
        id: 5,
        label: "Double Height",
        title: "Double Height Loft",
        desc: "Spacious double-height ceilings provide an airy atmosphere, perfect for creative minds and luxury living.",
        specs: [
            { label: "Total Area", value: "3800 Sq. Ft" },
            { label: "Bedroom", value: "160 Sq. Ft" },
            { label: "Bathroom", value: "55 Sq. Ft" },
            { label: "Smoking/Pets", value: "Allowed" },
            { label: "Lounge", value: "750 Sq. Ft" },
        ],
        image: "/image/sl3.png",
    },
];

const ApartmentPlan = () => {
    const [activeTab, setActiveTab] = useState(2);
    const activeContent = apartmentData.find((item) => item.id === activeTab);

    return (
        <div className="py-20 bg-white">
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <div className="mb-12 text-center">
                    <p className="bg-[#FFEDE8] text-[#FF5A3C] font-bold px-5 py-1 rounded-full w-fit text-sm mb-3 font-nunito text-center mx-auto">
                        Apartment Sketch
                    </p>
                    <h2 className="font-bold text-black lg:text-[48px] text-[28px] font-poppins">
                        Apartments Plan
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
                    {apartmentData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`text-[18px] font-bold font-poppins pb-2 transition-all duration-300 ${activeTab === tab.id
                                ? "text-[#FF5A3C] border-b-2 border-[#FF5A3C]"
                                : "text-[#0A2C3D] hover:text-[#FF5A3C]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="w-full lg:w-[45%] bg-[#FF5A3C] p-10 lg:p-14 text-white shadow-xl min-h-[500px] flex flex-col justify-center">
                        <h2 className="text-[30px] font-bold font-poppins mb-6">
                            {activeContent.title}
                        </h2>
                        <p className="text-[15px] font-nunito leading-7 mb-10 opacity-90">
                            {activeContent.desc}
                        </p>

                        <div className="space-y-4 font-nunito">
                            {activeContent.specs.map((spec, index) => (
                                <div key={index} className="flex items-end justify-between">
                                    <span className="font-semibold text-[16px]">{spec.label}</span>
                                    <div className="flex-1 mx-4 border-b border-dotted border-white/50 mb-1.5"></div>

                                    <span className="text-[16px] opacity-90">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-[50%] flex justify-center items-center">
                        <img
                            key={activeContent.id}
                            src={activeContent.image}
                            alt={activeContent.title}
                            className="w-full max-w-[500px] object-contain animate-fadeIn"
                        />
                    </div>
                </div>
            </div>
            <div className="lg:mt-25 mt-10 lg:w-12/12 w-11/12 mx-auto">
                <div className="relative w-full">
                    <iframe
                        className=" w-full h-[350px]"
                        src="https://www.youtube.com/embed/DmsZG2jwqto?si=Ajn4SIqMV39GVXkX"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default ApartmentPlan;