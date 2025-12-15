"use client";
import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";

const Leatest = () => {
    return (
        <section className='bg-white lg:pt-24 lg:pb-30 pt-12 pb-20'>
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <div className="mb-12 text-center">
                    <p className='bg-[#FFEDE8] text-[#FF5A3C] font-bold px-5 py-1 rounded-full w-fit text-sm mb-3 font-nunito text-center mx-auto'>News & Blogs</p>
                    <h2 className='font-bold text-black lg:text-[48px] text-[28px] font-poppins lg:w-[525px] mx-auto'>See Our Leatest News & Read Blogs</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-8">
                        <div className="group relative h-[300px]  overflow-hidden cursor-pointer">
                            <img
                                src="/image/lt1.png"
                                alt="blog-1"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className=" text-white text-[12px] font-bold px-3 py-1  font-nunito uppercase">Product Design</span>
                                    <span className="text-white text-[13px] font-nunito flex items-center gap-1"><FiCalendar /> 02 Sep 2023</span>
                                </div>
                                <h3 className="text-white font-bold text-[20px] font-poppins leading-snug mb-3 transition-colors duration-300">
                                    This consumer-focused blog gives clients
                                </h3>
                                <Link href="#" className="text-white text-[14px] font-nunito font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                    Read More <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div className="group relative h-[300px]  overflow-hidden cursor-pointer">
                            <img
                                src="/image/lt2.png"
                                alt="blog-2"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className=" text-white text-[12px] font-bold px-3 py-1 font-nunito uppercase">Architecture</span>
                                    <span className="text-white text-[13px] font-nunito flex items-center gap-1"><FiCalendar /> 05 Sep 2023</span>
                                </div>
                                <h3 className="text-white font-bold text-[20px] font-poppins leading-snug mb-3 transition-colors duration-300">
                                    This consumer-focused blog gives clients
                                </h3>
                                <Link href="#" className="text-white text-[14px] font-nunito font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                    Read More <BsArrowRight />
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="group relative lg:h-[630px] h-[500px]  overflow-hidden cursor-pointer">
                        <img
                            src="/image/lt3.png"
                            alt="blog-3"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="flex items-center gap-4 mb-4">
                                <span className=" text-white text-[12px] font-bold px-3 py-1 font-nunito uppercase">Web Developer</span>
                                <span className="text-white text-[13px] font-nunito flex items-center gap-1"><FiCalendar /> 07 Sep 2023</span>
                            </div>
                            <h3 className="text-white font-bold text-[24px] font-poppins leading-snug mb-4 transition-colors duration-300">
                                Have an ear to the ground on what real estate invest
                            </h3>
                            <p className="text-[#e0e0e0] text-[15px] font-nunito leading-6 mb-5 line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <Link href="#" className="text-white text-[14px] font-nunito font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                Read More <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="group relative lg:h-[630px] h-[500px] overflow-hidden cursor-pointer">
                        <img
                            src="/image/lt3.png"
                            alt="blog-4"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-white text-[12px] font-bold px-3 py-1 font-nunito uppercase">Estate Agency</span>
                                <span className="text-white text-[13px] font-nunito flex items-center gap-1"><FiCalendar /> 10 Sep 2023</span>
                            </div>
                            <h3 className="text-white font-bold text-[24px] font-poppins leading-snug mb-4 transition-colors duration-300">
                                Appraisal skills and real estate career? McKissock
                            </h3>
                            <p className="text-[#e0e0e0] text-[15px] font-nunito leading-6 mb-5 line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <Link href="#" className="text-white text-[14px] font-nunito font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                Read More <BsArrowRight />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Leatest;