import React from 'react'
import { FiMaximize2, FiHeart, FiPlus } from 'react-icons/fi';
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyList = () => {
    const properties = [
        {
            id: 1,
            image: "/image/sl3.png", 
            type: "For Rent",
            title: "New Apartment Nice View",
            address: "Belmont Gardens, Chicago",
            beds: 3,
            baths: 2,
            sqft: 3450,
            price: "349,00"
        },
        {
            id: 2,
            image: "/image/sl1.png",
            type: "For Rent",
            title: "Modern Apartment",
            address: "New York City, NY",
            beds: 4,
            baths: 3,
            sqft: 4200,
            price: "450,00"
        },
        {
            id: 3,
            image: "/image/sl2.png",
            type: "For Rent",
            title: "Comfortable Studio",
            address: "Los Angeles, CA",
            beds: 2,
            baths: 1,
            sqft: 1250,
            price: "220,00"
        },
        {
            id: 4,
            image: "/image/sl3.png",
            type: "For Rent",
            title: "Luxury Villa",
            address: "Miami Beach, FL",
            beds: 5,
            baths: 4,
            sqft: 5600,
            price: "850,00"
        },
        {
            id: 5,
            image: "/image/sl3.png",
            type: "For Rent",
            title: "Luxury Villa",
            address: "Miami Beach, FL",
            beds: 5,
            baths: 4,
            sqft: 5600,
            price: "850,00"
        },
        {
            id: 6,
            image: "/image/sl3.png",
            type: "For Rent",
            title: "Luxury Villa",
            address: "Miami Beach, FL",
            beds: 5,
            baths: 4,
            sqft: 5600,
            price: "850,00"
        }
    ];

    return (
        <div className="w-full">
            <div className="relative">
                <input type="text" placeholder='Search For More Properties' className='w-full py-3 px-6 bg-[#F5F5F8] outline-0' />
                <IoSearch className='absolute top-2.5 right-6 text-[23px] text-[#263045]' />
            </div>
            <div className="lg:mt-6 mt-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {properties.map((item) => (
                    <div key={item.id} className="group bg-white rounded-lg border border-[#E9E9E9] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="relative h-60 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="text-[#FF5A3C] font-medium text-[15px] mb-2 font-nunito uppercase tracking-wide">
                                {item.type}
                            </div>

                            <h3 className="text-[#0A2C3D] font-bold text-[22px] font-poppins mb-3 hover:text-[#FF5A3C] transition-colors cursor-pointer">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-2 text-[#5C727D] text-[15px] font-nunito mb-6">
                                <IoLocationOutline className="text-lg" />
                                <span>{item.address}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-6">
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
                            </div>

                            <div className="flex items-center gap-2 mb-6">
                                <BiArea className="text-[#5C727D] text-xl" />
                                <span className="font-bold text-[#0A2C3D] font-poppins text-lg">{item.sqft}</span>
                                <span className="text-[#5C727D] text-[14px] font-nunito">Square Ft</span>
                            </div>
                            <div className="flex items-center gap-4 pb-6 border-b border-[#E9E9E9]">
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
                            <div className="pt-5 flex items-center justify-between">
                                <div className="text-[#FF5A3C] font-bold text-[20px] font-poppins">
                                    $ {item.price}
                                    <span className="text-[15px] font-normal text-[#FF5A3C]">/Month</span>
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