import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaVimeoV } from "react-icons/fa";


const Navbar = () => {
    return (
        <>
            <div className='bg-[#0A2C3D] w-full lg:py-0 py-3'>
                <div className="lg:w-10/12 w-11/12 mx-auto ">
                    <div className="lg:flex justify-between items-center">
                        <div className="lg:flex items-center  gap-2 text-white">
                            <div className="flex items-center justify-center gap-2 border-r-2 lg:pr-4 ">
                                <IoLocationOutline />
                                <p className='font-normal font-nunito text-[14px] text-white'>254 Lillian Blvd, Holbrook</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <TfiEmail />
                                <p className='font-normal font-nunito text-[14px] text-white'>info@santizex-site.com</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-6 text-white lg:mt-0 mt-3">
                           <div className="flex items-center gap-4">
                              <TiSocialFacebook />
                              <TiSocialTwitter />
                              <FaVimeoV />
                           </div>
                           <div className="">
                                <button className='bg-[#FF5C00] text-white font-poppins font-normal text-[14px] lg:py-3 py-2 px-4 cursor-pointer'>Add Listings</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar