import React from 'react';
import { MdToys } from 'react-icons/md'; 
import { FaCar, FaSwimmingPool, FaStethoscope } from 'react-icons/fa';
import { BiShield, BiLibrary, BiBed, BiHomeAlt } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

const Listing = () => {
  const amenities = [
    { id: 1, name: "Parking Space", icon: <FaCar size={24} /> },
    { id: 2, name: "Swimming Pool", icon: <FaSwimmingPool size={24} /> },
    { id: 3, name: "Private Security", icon: <BiShield size={24} /> },
    { id: 4, name: "Medical Center", icon: <FaStethoscope size={24} /> },
    { id: 5, name: "Library Area", icon: <BiLibrary size={24} /> },
    { id: 6, name: "King Size Beds", icon: <BiBed size={24} /> },
    { id: 7, name: "Smart Homes", icon: <BiHomeAlt size={24} /> },
    { id: 8, name: "Kid’s Playland", icon: <MdToys size={24} /> }, 
  ];

  return (
    <section className="lg:py-20 py-10">
      <div className="lg:w-9/12 w-11/12 mx-auto">
        <div className="mb-12 text-center">
          <p className="bg-[#FFEDE8] text-[#FF5A3C] font-bold px-5 py-1 rounded-full w-fit text-sm mb-3 font-nunito text-center mx-auto">
            Properties
          </p>
          <h2 className="font-bold text-black lg:text-[48px] text-[28px] font-poppins">
            Featured Listings
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          {amenities.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded-[20px] p-8 text-center transition-all duration-300 hover:bg-[#FF5A3C] shadow-xl hover:shadow-xl cursor-pointer"
            >
              <div className="w-20 h-20 mx-auto bg-[#FFF5F3] rounded-full flex items-center justify-center text-[#FF5A3C] mb-6 transition-colors duration-300 group-hover:bg-white group-hover:text-[#FF5A3C]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins text-black mb-4 transition-colors duration-300 group-hover:text-white">
                {item.name}
              </h3>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-white text-gray-400 group-hover:text-[#FF5A3C]">
                  <BsArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Listing;