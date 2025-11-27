import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Focus = () => {
    return (
        <>
            <div className="lg:py-20 py-10 bg-[#F8F7FC] relative">
                <div className="lg:w-9/12 w-11/12 mx-auto">
                    <div className="mb-12 text-center">
                        <p className='bg-[#FFEDE8] text-[#FF5A3C] font-bold px-5 py-1 rounded-full w-fit text-sm mb-3 font-nunito text-center mx-auto'>Our Services</p>
                        <h2 className='font-bold text-black lg:text-[48px] text-[28px] font-poppins'>Our Main Focus</h2>
                    </div>
                    <div className="lg:flex gap-8 justify-between items-center">
                        <div className="lg:w-1/3 lg:mt-0 mt-6">
                            <div className="bg-white py-10 px-10 shadow-lg hover:shadow-2xl duration-300 
                                            relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                                            after:w-full after:h-[3px] after:bg-[#FF5A3C] after:scale-x-0 
                                            after:origin-left after:transition-transform after:duration-300 
                                            hover:after:scale-x-100">
                                <img src="/image/f1.png" alt="focus" className='mx-auto' />

                                <h2 className='font-bold font-poppins text-[28px] text-black text-center pt-4'>
                                    Buy a home
                                </h2>

                                <p className='text-[#5C727D] font-normal font-nunito lg:text-[16px] text-[14px] mt-2 text-center'>
                                    over 1 million+ homes for sale available
                                    on the website, we can match you with a
                                    house you will want to call home.
                                </p>

                                <div className="flex items-center gap-2 mx-auto justify-center mt-6">
                                    <a href="#" className='font-bold font-nunito text-[18px] text-[#FF5A3C]'>
                                        Find A Home
                                    </a>
                                    <FaArrowRightLong className='text-[#FF5A3C]' />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mt-0 mt-6">
                            <div className="bg-white py-10 px-10 shadow-lg hover:shadow-2xl duration-300 
                                            relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                                            after:w-full after:h-[3px] after:bg-[#FF5A3C] after:scale-x-0 
                                            after:origin-left after:transition-transform after:duration-300 
                                            hover:after:scale-x-100">
                                <img src="/image/f2.png" alt="focus" className='mx-auto' />

                                <h2 className='font-bold font-poppins text-[28px] text-black text-center pt-4'>
                                    Rent a home
                                </h2>

                                <p className='text-[#5C727D] font-normal font-nunito lg:text-[16px] text-[14px] mt-2 text-center'>
                                    over 1 million+ homes for sale available
                                    on the website, we can match you with a
                                    house you will want to call home.
                                </p>

                                <div className="flex items-center gap-2 mx-auto justify-center mt-6">
                                    <a href="#" className='font-bold font-nunito text-[18px] text-[#FF5A3C]'>
                                        Find A Home
                                    </a>
                                    <FaArrowRightLong className='text-[#FF5A3C]' />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mt-0 mt-6">
                            <div className="bg-white py-10 px-10 shadow-lg hover:shadow-2xl duration-300 
                                            relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                                            after:w-full after:h-[3px] after:bg-[#FF5A3C] after:scale-x-0 
                                            after:origin-left after:transition-transform after:duration-300 
                                            hover:after:scale-x-100">
                                <img src="/image/f3.png" alt="focus" className='mx-auto' />

                                <h2 className='font-bold font-poppins text-[28px] text-black text-center pt-4'>
                                    Sell a home
                                </h2>

                                <p className='text-[#5C727D] font-normal font-nunito lg:text-[16px] text-[14px] mt-2 text-center'>
                                    over 1 million+ homes for sale available
                                    on the website, we can match you with a
                                    house you will want to call home.
                                </p>

                                <div className="flex items-center gap-2 mx-auto justify-center mt-6">
                                    <a href="#" className='font-bold font-nunito text-[18px] text-[#FF5A3C]'>
                                        Find A Home
                                    </a>
                                    <FaArrowRightLong className='text-[#FF5A3C]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 top-0 lg:block hidden">
                    <img src="/image/shape.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default Focus