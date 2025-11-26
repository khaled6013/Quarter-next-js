"use client";

import React, { useState } from "react";
import { FiUser, FiHeart, FiSearch } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="bg-white w-full pt-5 pb-[15px]">
                <div className="lg:w-10/12 w-11/12 mx-auto">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link href="/">
                            <img src="/image/logo.png" alt="logo" className="w-[130px]" />
                            </Link>
                        </div>
                        <div className="hidden lg:flex items-center gap-x-8">
                            <ul className="flex items-center gap-x-9">
                                <li><Link href="/" className="font-bold font-nunito text-[18px] text-[#0A2C3D]">Home</Link></li>
                                <li><Link href="/properties" className="font-bold font-nunito text-[18px] text-[#0A2C3D]">Properties</Link></li>
                                <li><a href="#" className="font-bold font-nunito text-[18px] text-[#0A2C3D]">Property</a></li>
                                <li><a href="#" className="font-bold font-nunito text-[18px] text-[#0A2C3D]">Blog</a></li>
                                <li><a href="#" className="font-bold font-nunito text-[18px] text-[#0A2C3D]">Pages</a></li>
                                <li><a href="#" className="font-bold font-nunito text-[18px] text-[#0A2C3D]">Contact</a></li>
                            </ul>
                            <div className="flex items-center gap-x-4">
                                <div className="w-[45px] h-[45px] bg-white shadow-md flex items-center justify-center cursor-pointer text-[#0A2C3D] hover:text-[#FF5A3C]">
                                    <FiUser className="text-[18px]" />
                                </div>
                                <div className="w-[45px] h-[45px] bg-white shadow-md flex items-center justify-center cursor-pointer text-[#0A2C3D] hover:text-[#FF5A3C]">
                                    <FiHeart className="text-[18px]" />
                                </div>
                                <div className="w-[45px] h-[45px] bg-white shadow-md flex items-center justify-center cursor-pointer text-[#0A2C3D] hover:text-[#FF5A3C]">
                                    <FiSearch className="text-[18px]" />
                                </div>
                            </div>
                        </div>
                        <button className="lg:hidden text-3xl text-[#0A2C3D]" onClick={() => setOpen(true)}>
                            <AiOutlineMenu />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 right-0 w-[70%] h-full bg-white shadow-xl transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 lg:hidden z-50`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setOpen(false)} className="text-3xl text-[#0A2C3D]">
                        <AiOutlineClose />
                    </button>
                </div>
                <ul className="flex flex-col gap-y-4 pl-6 mt-4">
                    <li><a href="#" className="font-bold font-nunito text-[20px] text-[#0A2C3D]">Home</a></li>
                    <li><a href="#" className="font-bold font-nunito text-[20px] text-[#0A2C3D]">Properties</a></li>
                    <li><a href="#" className="font-bold font-nunito text-[20px] text-[#0A2C3D]">Property</a></li>
                    <li><a href="#" className="font-bold font-nunito text-[20px] text-[#0A2C3D]">Blog</a></li>
                    <li><a href="#" className="font-bold font-nunito text-[20px] text-[#0A2C3D]">Pages</a></li>
                    <li><a href="#" className="font-bold font-nunito text-[20px] text-[#0A2C3D]">Contact</a></li>
                </ul>
                <div className="flex items-center gap-x-4 pl-6 mt-6">
                    <div className="w-[45px] h-[45px] bg-white shadow-md flex items-center justify-center cursor-pointer text-[#0A2C3D]">
                        <FiUser className="text-[18px]" />
                    </div>
                    <div className="w-[45px] h-[45px] bg-white shadow-md flex items-center justify-center cursor-pointer text-[#0A2C3D]">
                        <FiHeart className="text-[18px]" />
                    </div>
                    <div className="w-[45px] h-[45px] bg-white shadow-md flex items-center justify-center cursor-pointer text-[#0A2C3D]">
                        <FiSearch className="text-[18px]" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
