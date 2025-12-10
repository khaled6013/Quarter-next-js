import React from 'react'
import { FiMaximize2, FiHeart, FiPlus } from 'react-icons/fi';
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyList = ({ activeView, properties }) => { 

    return (
        <div className="w-full">
            <div className="relative">
                <input type="text" placeholder='Search For More Properties' className='w-full py-3 px-6 bg-[#F5F5F8] outline-0' />
                <IoSearch className='absolute top-2.5 right-6 text-[23px] text-[#263045]' />
            </div>
            
            <div className={`lg:mt-6 mt-3 ${activeView === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'flex flex-col gap-6'}`}>
                {properties.map((item) => (
                    <div key={item.id} className={`group bg-white rounded-lg border border-[#E9E9E9] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${activeView === 'list' ? 'flex flex-col lg:flex-row' : ''}`}>
                        
                        <div className={`relative overflow-hidden ${activeView === 'list' ? 'lg:w-[40%] h-60 lg:h-auto' : 'h-60'}`}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className={`p-6 ${activeView === 'list' ? 'lg:w-[60%] flex flex-col justify-center' : ''}`}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-[#FF5A3C] font-medium text-[15px] mb-2 font-nunito uppercase tracking-wide">
                                        {item.type}
                                    </div>
                                    <h3 className="text-[#0A2C3D] font-bold text-[22px] font-poppins mb-3 hover:text-[#FF5A3C] transition-colors cursor-pointer">
                                        {item.title}
                                    </h3>
                                </div>
                                {activeView === 'list' && (
                                    <div className="text-[#FF5A3C] font-bold text-[20px] font-poppins hidden lg:block">
                                        $ {item.price}
                                        <span className="text-[15px] font-normal text-[#FF5A3C]">/Month</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-2 text-[#5C727D] text-[15px] font-nunito mb-6">
                                <IoLocationOutline className="text-lg" />
                                <span>{item.address}</span>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <BiBed className="text-[#5C727D] text-xl" />
                                    <span className="font-bold text-[#0A2C3D] font-poppins text-lg">{item.beds}</span>
                                    <span className="text-[#5C727D] text-[14px] font-nunito">Bedrooms</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BiBath className="text-[#5C727D] text-xl" />
                                    <span className="font-bold text-[#0A2C3D] font-poppins text-lg">{item.baths}</span>
                                    <span className="text-[#5C727D] text-[14px] font-nunito">Bathrooms</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BiArea className="text-[#5C727D] text-xl" />
                                    <span className="font-bold text-[#0A2C3D] font-poppins text-lg">{item.sqft}</span>
                                    <span className="text-[#5C727D] text-[14px] font-nunito">Sq Ft</span>
                                </div>
                            </div>

                            <div className="pt-5 border-t border-[#E9E9E9] flex items-center justify-between">
                                {activeView === 'grid' ? (
                                    <div className="text-[#FF5A3C] font-bold text-[20px] font-poppins">
                                        $ {item.price}
                                        <span className="text-[15px] font-normal text-[#FF5A3C]">/Month</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <div className='w-8 h-8 rounded-full bg-gray-200'></div>
                                        <span className="text-[#5C727D] text-[14px] font-nunito">{item.agent || "Agent Info"}</span>
                                    </div>
                                )}

                                <div className="flex items-center gap-2">
                                    <button className="w-10 h-10 rounded-sm bg-[#F2F6F7] flex items-center justify-center text-[#5C727D] hover:bg-[#FF5A3C] hover:text-white transition-all shadow-sm">
                                        <FiMaximize2 className="text-lg" />
                                    </button>
                                    <button className="w-10 h-10 rounded-sm bg-[#F2F6F7] flex items-center justify-center text-[#5C727D] hover:bg-[#FF5A3C] hover:text-white transition-all shadow-sm">
                                        <FiHeart className="text-lg" />
                                    </button>
                                    <button className="w-10 h-10 rounded-sm bg-[#F2F6F7] flex items-center justify-center text-[#5C727D] hover:bg-[#FF5A3C] hover:text-white transition-all shadow-sm">
                                        <FiPlus className="text-lg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PropertyList