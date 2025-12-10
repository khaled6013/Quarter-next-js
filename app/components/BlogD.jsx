import React from 'react';
import Link from 'next/link';
import { FiCalendar, FiMessageSquare } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const BlogD = () => {

    const blogPosts = [
        {
            id: 1,
            image: "/image/lt3.png", 
            date: "July 27, 2020",
            comments: "1 Comments",
            title: "How to Prepare for your First his consumer focused",
            desc: "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
        },
        {
            id: 2,
            image: "/image/lt2.png",
            date: "August 10, 2023",
            comments: "3 Comments",
            title: "New Trends in Modern Architecture Design",
            desc: "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
        },
        {
            id: 3,
            image: "/image/lt1.png",
            date: "Sep 05, 2023",
            comments: "0 Comments",
            title: "Best Real Estate Investment Opportunities",
            desc: "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
        },
        {
            id: 4,
            image: "/image/lt2.png",
            date: "Sep 08, 2025",
            comments: "9 Comments",
            title: "Best Real Estate Investment Opportunities",
            desc: "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
        }
    ];

    return (
        <>
            <div className="lg:py-20 py-10 bg-white">
                <div className="lg:w-9/12 w-11/12 mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        <div className="lg:w-8/12 w-full flex flex-col gap-y-12">
                            {blogPosts.map((item) => (
                                <div key={item.id} className="group relative">
                                    <div className="w-full lg:h-[450px] h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-lg relative z-10 mx-4 lg:mx-8 -mt-24 border border-gray-100 transition-transform duration-300 group-hover:-translate-y-2">
                                        <div className="flex items-center gap-6 mb-4 text-[#FF5A3C] text-[14px] font-nunito">
                                            <div className="flex items-center gap-2">
                                                <FiCalendar />
                                                <span>{item.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FiMessageSquare />
                                                <span>{item.comments}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-[#0A2C3D] text-[24px] lg:text-[30px] font-bold font-poppins leading-tight mb-4 group-hover:text-[#FF5A3C] transition-colors duration-300 cursor-pointer">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#5C727D] text-[15px] font-nunito leading-7 mb-6">
                                            {item.desc}
                                        </p>
                                        <Link href="#" className="inline-flex items-center gap-2 text-[#FF5A3C] font-bold font-nunito uppercase text-[14px] hover:gap-4 transition-all duration-300">
                                            Read More <BsArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:w-4/12 w-full">
                            <div className="bg-[#F8F7FC] p-8 rounded-lg border border-[#E9E9E9]">
                                <h3 className="font-bold text-[#0A2C3D] text-[20px] font-poppins mb-6">Search</h3>
                                <input type="text" placeholder="Type here..." className="w-full p-3 border border-gray-300 rounded outline-none focus:border-[#FF5A3C]" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogD;