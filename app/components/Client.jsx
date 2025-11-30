"use client"; 

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowLeft className="text-[#FF5A3C] text-xl" />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowRight className="text-[#FF5A3C] text-xl" />
    </div>
  );
};

const Client = () => {
    const clientData = [
        {
            id: 1,
            quote: "ous ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
            name: "Lee Barners",
            role: "SELLING AGENTING",
            image: "/image/man.png" 
        },
        {
            id: 2,
            quote: "ous ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
            name: "Lee Barners",
            role: "SELLING AGENTING",
            image: "/image/man.png" 
        },
        {
            id: 3,
            quote: "ous ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
            name: "Lee Barners",
            role: "SELLING AGENTING",
            image: "/image/man.png" 
        },
        {
            id: 4,
            quote: "ous ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
            name: "Lee Barners",
            role: "SELLING AGENTING",
            image: "/image/man.png" 
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className='lg:py-20 py-10 bg-[#F8F7FC] relative client-slider-container'>
                <div className='lg:w-9/12 w-11/12 mx-auto'>
                    <div className="mb-12 text-center">
                        <p className="bg-[#FFEDE8] text-[#FF5A3C] font-bold px-5 py-1 rounded-full w-fit text-sm mb-3 font-nunito text-center mx-auto">
                            Our Clients
                        </p>
                        <h2 className="font-bold text-black lg:text-[48px] text-[28px] font-poppins">
                           Clients Feedback
                        </h2>
                    </div>

                    <Slider {...settings} className="lg:px-10">
                        {clientData.map((item) => (
                            <div key={item.id} className="px-4">
                                <div className="bg-white lg:p-10 p-7 shadow-lg rounded-sm relative">
                                    <RiDoubleQuotesL className="text-[#FF5A3C] text-[40px] absolute top-8 left-8 opacity-20" />
                                    <p className="text-[#5C727D] font-nunito text-[16px] leading-7 mb-8 relative z-10">
                                        {item.quote}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-[60px] h-[60px] rounded-full object-cover" />
                                        <div>
                                            <h4 className="font-bold text-[20px] font-poppins text-[#0A2C3D]">{item.name}</h4>
                                            <p className=" font-nunito text-[14px]">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="absolute left-0 top-0 lg:block hidden">
                    <img src="/image/shape.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default Client;