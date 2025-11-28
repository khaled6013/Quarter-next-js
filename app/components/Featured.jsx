"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiMaximize2 } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TfiVideoClapper } from "react-icons/tfi";
import { IoCameraSharp } from "react-icons/io5";

const Featured = () => {

    const featuredData = [
        {
            id: 1,
            image: "/image/sl3.png",
            type: "FOR RENT",
            price: "349.00",
            title: "Light and modern apartment",
            desc: "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
            address: "Belmont Gardens, Chicago",
            beds: 3,
            baths: 2,
            sqft: 3450,
            agentName: "Alex Maisha",
            agentRole: "Estate Agents",
            agentImg: "/image/man.png"
        },
        {
            id: 2,
            image: "/image/sell2.png",
            type: "FOR SALE",
            price: "450,000",
            title: "Luxury Family Home",
            desc: "Spacious family home with modern amenities and a large backyard.",
            address: "Beverly Hills, California",
            beds: 4,
            baths: 3,
            sqft: 4200,
            agentName: "John Doe",
            agentRole: "Senior Agent",
            agentImg: "/image/man.png"
        },
        {
            id: 3,
            image: "/image/sl2.png",
            type: "FOR RENT",
            price: "550.00",
            title: "Modern City Condo",
            desc: "Stunning view of the city skyline, close to all major transport hubs.",
            address: "Downtown, New York",
            beds: 2,
            baths: 2,
            sqft: 1500,
            agentName: "Sarah Smith",
            agentRole: "Sales Executive",
            agentImg: "/image/man.png"
        },
        {
            id: 4,
            image: "/image/sl1.png",
            type: "FOR SALE",
            price: "220,000",
            title: "Cozy Cottage",
            desc: "Perfect for a small family, located in a quiet and peaceful neighborhood.",
            address: "Green Valley, Texas",
            beds: 3,
            baths: 1,
            sqft: 1200,
            agentName: "Mike Ross",
            agentRole: "Realtor",
            agentImg: "/image/man.png"
        },
        {
            id: 5,
            image: "/image/sell2.png",
            type: "FOR RENT",
            price: "850.00",
            title: "Beachfront Villa",
            desc: "Enjoy the ocean breeze in this beautiful villa right on the beach.",
            address: "Miami Beach, Florida",
            beds: 5,
            baths: 4,
            sqft: 5000,
            agentName: "Emily Clarke",
            agentRole: "Luxury Agent",
            agentImg: "/image/man.png"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>
            <div className="lg:py-20 py-10 relative">
                <div className="lg:w-11/12 w-10/12 mx-auto">
                    <div className="mb-12 text-center">
                        <p className="bg-[#FFEDE8] text-[#FF5A3C] font-bold px-5 py-1 rounded-full w-fit text-sm mb-3 font-nunito text-center mx-auto">
                            Properties
                        </p>
                        <h2 className="font-bold text-black lg:text-[48px] text-[28px] font-poppins">
                            Featured Listings
                        </h2>
                    </div>

                    <Slider {...settings}>
                        {featuredData.map((item) => (
                            <div key={item.id} className="lg:px-3">
                                <div className="bg-white lg:shadow-lg overflow-hidden w-full duration-300">
                                    <div className="relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-[260px] object-cover"
                                        />
                                        <p className="absolute top-4 right-4 bg-[#FF5A3C] text-white text-[12px] px-3 py-1 font-semibold">
                                            {item.type}
                                        </p>
                                        <div className="absolute bottom-4 right-4 flex items-center gap-3">
                                            <button className="bg-white p-1.5 shadow-md hover:bg-gray-100">
                                                <IoCameraSharp className="text-[16px]" />
                                            </button>
                                            <button className="bg-white p-1.5 shadow-md hover:bg-gray-100">
                                                <TfiVideoClapper className="text-[16px]" />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-4 left-4 flex items-center text-white gap-2">
                                            <IoLocationOutline className="text-[20px]" />
                                            <p className="text-sm font-medium">{item.address}</p>
                                        </div>
                                    </div>

                                    <div className="px-6 py-6">
                                        <p className="text-[#FF5A3C] text-[26px] font-medium font-poppins mb-1">
                                            $ {item.price}
                                            <span className="text-[16px] font-normal text-[#FF5A3C]">
                                                {item.type === "FOR RENT" ? "/Month" : ""}
                                            </span>
                                        </p>
                                        <h3 className="font-bold text-[22px] text-black mb-1 font-poppins truncate">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#5C727D] text-[13px] leading-5 mb-3 font-nunito h-10 overflow-hidden">
                                            {item.desc}
                                        </p>

                                        <div className="flex items-center gap-x-4 pt-4 border-b pb-6 border-[#C1C1C1]">
                                            <div className="border-r pr-2 border-[#707070]">
                                                <div className="flex items-center gap-2 ">
                                                    <h3 className="text-[22px] font-medium">{item.beds}</h3>
                                                    <img src="/image/bed.png" alt="bed" />
                                                </div>
                                                <p className="text-[#5C727D] text-[14px] font-bold">Bedrooms</p>
                                            </div>
                                            <div className="border-r pr-2 border-[#707070]">
                                                <div className="flex items-center gap-2 ">
                                                    <h3 className="text-[22px] font-medium">{item.baths}</h3>
                                                    <img src="/image/bath.png" alt="bath" />
                                                </div>
                                                <p className="text-[#5C727D] text-[14px] font-bold">Bathrooms</p>
                                            </div>
                                            <div className=" pr-2 border-[#707070]">
                                                <div className="flex items-center gap-2 ">
                                                    <h3 className="text-[22px] font-medium">{item.sqft}</h3>
                                                    <img src="/image/ft.png" alt="ft" />
                                                </div>
                                                <p className="text-[#5C727D] text-[14px] font-bold">Square Ft</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center mt-3">
                                            <div className=" flex items-center gap-3 ">
                                                <img
                                                    src={item.agentImg}
                                                    className="w-11 h-11 rounded-full object-cover"
                                                    alt="agent"
                                                />
                                                <div>
                                                    <h4 className="font-medium text-[15px] font-poppins">{item.agentName}</h4>
                                                    <p className="text-[#5C727D] text-[9px] font-nunito">{item.agentRole}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="bg-[#C1C1C1] p-2 hover:bg-[#FF5A3C] hover:text-white cursor-pointer">
                                                    <FiMaximize2 className="text-[16px]" />
                                                </div>
                                                <div className="bg-[#C1C1C1] p-2 hover:bg-[#FF5A3C] hover:text-white cursor-pointer">
                                                    <AiOutlineHeart className="text-[16px]" />
                                                </div>
                                                <div className="bg-[#C1C1C1] p-2 hover:bg-[#FF5A3C] hover:text-white cursor-pointer">
                                                    <FaCodeCompare className="text-[16px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Featured;