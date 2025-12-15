import React from 'react';
import { FiUser, FiMail } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
    return (
        <section className="bg-white lg:py-24 py-12">
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-[#0A2C3D] font-bold text-[30px] lg:text-[45px] font-poppins leading-tight mb-10">
                            Feel free to contact us for any query.
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-5">
                                <div className="w-[50px] h-[50px] bg-[#FF5A3C] rounded-full flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-[#FF5A3C]/20">
                                    <BsTelephone />
                                </div>
                                <div>
                                    <h4 className="text-[#0A2C3D] font-bold text-[18px] font-poppins mb-1">Phone Number:</h4>
                                    <p className="text-[#5C727D] font-nunito text-[16px]">Head office: (210) 123 451</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="w-[50px] h-[50px] bg-[#FF5A3C] rounded-full flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-[#FF5A3C]/20">
                                    <HiOutlineMailOpen />
                                </div>
                                <div>
                                    <h4 className="text-[#0A2C3D] font-bold text-[18px] font-poppins mb-1">Mail Address:</h4>
                                    <p className="text-[#5C727D] font-nunito text-[16px]">webecyenvato12@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="w-[50px] h-[50px] bg-[#FF5A3C] rounded-full flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-[#FF5A3C]/20">
                                    <IoLocationOutline />
                                </div>
                                <div>
                                    <h4 className="text-[#0A2C3D] font-bold text-[18px] font-poppins mb-1">Office Address:</h4>
                                    <p className="text-[#5C727D] font-nunito text-[16px]">254 Lillian Blvd, Holbrook</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Contact Form */}
                    <div className="lg:w-1/2 w-full">
                        <form className="flex flex-col gap-6">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="First Name*"
                                        className="w-full bg-[#F5F5F8] px-5 py-4 rounded outline-none text-[#5C727D] font-nunito placeholder:text-[#5C727D]"
                                    />
                                    <FiUser className="absolute right-5 top-1/2 -translate-y-1/2 text-[#5C727D]" />
                                </div>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Last Name*"
                                        className="w-full bg-[#F5F5F8] px-5 py-4 rounded outline-none text-[#5C727D] font-nunito placeholder:text-[#5C727D]"
                                    />
                                    <FiUser className="absolute right-5 top-1/2 -translate-y-1/2 text-[#5C727D]" />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder="Mail Address"
                                        className="w-full bg-[#F5F5F8] px-5 py-4 rounded outline-none text-[#5C727D] font-nunito placeholder:text-[#5C727D]"
                                    />
                                    <FiMail className="absolute right-5 top-1/2 -translate-y-1/2 text-[#5C727D]" />
                                </div>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="w-full bg-[#F5F5F8] px-5 py-4 rounded outline-none text-[#5C727D] font-nunito placeholder:text-[#5C727D]"
                                    />
                                    <BsTelephone className="absolute right-5 top-1/2 -translate-y-1/2 text-[#5C727D]" />
                                </div>
                            </div>

                            <div className="relative w-full">
                                <select className="w-full bg-[#F5F5F8] px-5 py-4 rounded outline-none text-[#5C727D] font-nunito appearance-none cursor-pointer">
                                    <option>Choose Properties</option>
                                    <option>Apartment</option>
                                    <option>House</option>
                                    <option>Villa</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#5C727D]">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                </div>
                            </div>

                            <div className="relative w-full">
                                <textarea
                                    placeholder="Enter Message"
                                    className="w-full bg-[#F5F5F8] px-5 py-4 rounded outline-none text-[#5C727D] font-nunito h-40 resize-none placeholder:text-[#5C727D]"
                                ></textarea>
                                <BiMessageDetail className="absolute right-5 top-6 text-[#5C727D]" />
                            </div>

                            <button className="bg-[#FF5A3C] text-white font-bold font-nunito text-[16px] px-8 py-4 rounded hover:bg-[#e04f35] transition-colors w-fit flex items-center gap-2 mt-2">
                                Submit Request <FaArrowRightLong />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;