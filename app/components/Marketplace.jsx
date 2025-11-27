import React from 'react'
import { AiTwotoneHome } from "react-icons/ai";        // Smart Home
import { MdLandscape } from "react-icons/md";          // Beautiful Scene
import { GiWeightLiftingUp } from "react-icons/gi";    // Lifestyle
import { RiShieldCheckLine } from "react-icons/ri";    // Security

const Marketplace = () => {
    return (
        <>
            <div className="lg:pt-[180px] pt-10 lg:pb-[100px] pb-12">
                <div className="lg:w-9/12 w-11/12 mx-auto">
                    <div className="lg:flex items-center ">
                        <div className=" relative lg:pl-4">
                            <div className="shadow-xl">
                                <img src="/image/marketplaceOne.png" alt="marketplaceOne" />
                            </div>
                            <div className="lg:absolute lg:-left-5 lg:bottom-0 lg:mt-0 mt-5">
                                <img src="/image/marketplaceTwo.png" alt="marketplaceTwo" />
                            </div>
                            <div className="absolute -left-5 -top-7 -z-1 lg:block hidden">
                                <img src="/image/dot.png" alt="dot" />
                            </div>
                        </div>
                        <div className="lg:ml-20 lg:mt-0 mt-10">
                            <div className="bg-[#FFEDE8] text-[#FF5A3C] font-semibold px-5 py-1 rounded-full w-fit text-sm mb-5 font-nunito">
                                About Us
                            </div>
                            <h2 className="text-[32px] lg:text-[42px] font-extrabold text-[#0A0A0A] leading-snug font-poppins">
                                The Leading Real Estate <br /> Rental Marketplace
                            </h2>
                            <p className="text-[#52525B] mt-4 leading-7 lg:w-9/12 font-nunito">
                                Over 39,000 people work for us in more than 70 countries all over the
                                world. This breadth of global coverage, combined with specialist services
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

                                <div className="flex items-center gap-3">
                                    <AiTwotoneHome className='text-[#FF5A3C] w-8 h-8'/>
                                    <p className="font-semibold text-[16px] text-[#0A2C3D] font-nunito">
                                        Smart Home Design
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MdLandscape className='text-[#FF5A3C] w-8 h-8'/>
                                    <p className="font-semibold text-[16px] text-[#0A2C3D] font-nunito">
                                        Beautiful Scene Around
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <GiWeightLiftingUp className='text-[#FF5A3C] w-8 h-8'/>
                                    <p className="font-semibold text-[16px] text-[#0A2C3D] font-nunito">
                                        Exceptional Lifestyle
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <RiShieldCheckLine className='text-[#FF5A3C] w-8 h-8'/>
                                    <p className="font-semibold text-[16px] text-[#0A2C3D] font-nunito">
                                        Complete 24/7 Security
                                    </p>
                                </div>

                            </div>
                            <div className="bg-[#FFF4F2] border-l-4 border-[#FF5A3C] px-6 py-6 mt-10 text-[#52525B] leading-7 text-[15px] font-nunito">
                                “Enimad minim veniam quis nostrud exercitation<br />
                                ullamco laboris. Lorem ipsum dolor sit amet”
                            </div>
                            <button className="mt-8 bg-[#FF5A3C] text-white px-8 py-3 text-[15px] cursor-pointer hover:bg-[#e14c30] duration-200 font-poppins">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketplace