"use client";
import React from "react";
import { TiSocialFacebook, TiSocialTwitter, TiSocialPinterest } from "react-icons/ti";
import { FaVimeoV } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-[#171B2A] relative pt-[120px] lg:pb-[100px] pb-5">
                <div className="absolute -top-[70px] left-1/2 -translate-x-1/2 w-11/12 lg:w-9/12 bg-[#FF5A3C] lg:py-10 py-6 px-6 lg:px-10 shadow-lg">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-white font-poppins font-bold text-2xl lg:text-3xl">
                                looking for a dream home?
                            </h2>
                            <p className="text-white font-nunito text-[15px]">
                                We help you make the dream of new house a reality
                            </p>
                        </div>
                        <button className="bg-white text-[#FF5A3C] font-poppins text-[15px] py-3 px-6 rounded cursor-pointer shadow">
                            Explore Properties →
                        </button>
                    </div>
                </div>
                <div className="lg:w-9/12 w-11/12 mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-white font-poppins font-semibold text-[20px] mb-3">
                            About Us.
                        </h3>
                        <p className="text-[#A4A7B7] text-[14px] leading-[22px] font-nunito mb-4">
                            corporate clients and leisure travelers has been relying on Groundlink for dependable safe,
                            and professional chauffeured car service in major cities across World. Indeed it has been
                            more than one decade and five years that Groundlink.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-[35px] h-[35px] rounded-full bg-white hover:bg-[#FF5A3C] hover:text-white  flex items-center justify-center cursor-pointer text-[#0A2C3D]">
                                <TiSocialFacebook />
                            </div>
                            <div className="w-[35px] h-[35px] rounded-full bg-white hover:bg-[#FF5A3C] hover:text-white  flex items-center justify-center cursor-pointer text-[#0A2C3D]">
                                <TiSocialTwitter />
                            </div>
                            <div className="w-[35px] h-[35px] rounded-full bg-white hover:bg-[#FF5A3C] hover:text-white flex items-center justify-center cursor-pointer text-[#0A2C3D]">
                                <TiSocialPinterest />
                            </div>
                            <div className="w-[35px] h-[35px] rounded-full bg-white hover:bg-[#FF5A3C] hover:text-white  flex items-center justify-center cursor-pointer text-[#0A2C3D]">
                                <FaVimeoV />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-poppins font-semibold text-[20px] mb-3">
                            Useful Links
                        </h3>
                        <ul className="space-y-2 text-[#A4A7B7] text-[14px] font-nunito">
                            <li>About</li>
                            <li>News</li>
                            <li>Partners</li>
                            <li>Room Details</li>
                            <li>Gallery</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-poppins font-semibold text-[20px] mb-3">
                            Help?
                        </h3>
                        <ul className="space-y-2 text-[#A4A7B7] text-[14px] font-nunito">
                            <li>FAQ</li>
                            <li>Term & conditions</li>
                            <li>Reporting</li>
                            <li>Documentation</li>
                            <li>Support Policy</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div>
                        <div className="">
                            <img src="/image/logo.png" alt="logo" />
                        </div>
                        <p className="text-[#A4A7B7] text-[14px] font-nunito leading-[22px] mb-4 pt-4">
                            We are a team of designers and developers create high quality Magento, Prestashop.
                        </p>

                        <div className="flex items-center gap-2 text-white font-nunito mb-4">
                            <IoLocationOutline />
                            <p className="text-[14px]">254 Lillian Blvd, Holbrook</p>
                        </div>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Enter email address"
                                className="px-4 py-2 w-full outline-none bg-white text-[#171B2A] text-[14px]"
                            />
                            <button className="bg-[#FF5A3C] px-5 text-white text-[14px] cursor-pointer">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </footer>
            <div className="w-full bg-[#262b3f] py-4">
                <div className="lg:w-9/12 w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-2">
                    <p className="text-[#A4A7B7] text-[14px] font-nunito text-center lg:text-left">
                        © TunaIThemes 2021. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3 text-[14px] text-[#A4A7B7] font-nunito">
                        <a href="#" className="hover:text-white transition">Terms of Use</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;
