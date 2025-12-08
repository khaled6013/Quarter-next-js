import React from 'react'

const PropertyType = () => {
    const types = [
        { name: "House", count: "3,924", checked: false },
        { name: "Single Family", count: "3,610", checked: false },
        { name: "Apartment", count: "2,912", checked: false },
        { name: "Office Villa", count: "2,687", checked: false },
        { name: "Luxary Home", count: "1,853", checked: false },
        { name: "Studio", count: "893", checked: false },
    ];
    const Amenities = [
        { name: "Dishwasher", count: "3,924", checked: false },
        { name: "Floor Coverings", count: "3,610", checked: false },
        { name: "Internet", count: "2,912", checked: false },
        { name: "Build Wardrobes", count: "2,687", checked: false },
        { name: "Supermarket", count: "1,853", checked: false },
        { name: "Kids Zone", count: "893", checked: false },
    ];
    const Price  = [
        { name: "Low Budget", count: "3,924", checked: false },
        { name: "Medium", count: "3,610", checked: false },
        { name: "High Budget", count: "2,912", checked: false },
    ];
    const Catagory  = [
        { name: "Buying", count: "3,924", checked: false },
        { name: "Renting", count: "3,610", checked: false },
        { name: "Selling", count: "2,912", checked: false },
    ];

    return (
        <>
            <div className="lg:p-10 p-5 bg-white shadow-lg rounded-md border border-gray-100">

                <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-bold text-[#0A2C3D] text-[20px] font-poppins mb-6">
                        Property Type
                    </h3>
                    <ul className="flex flex-col gap-y-4">
                        {types.map((item, index) => (
                            <li key={index} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id={`type-${index}`}
                                        defaultChecked={item.checked}
                                        className="w-5 h-5 rounded border-[#E2E8F0] text-[#FF5A3C] focus:ring-0 accent-[#FF5A3C] cursor-pointer"
                                    />
                                    <label
                                        htmlFor={`type-${index}`}
                                        className={`text-[16px] font-nunito cursor-pointer transition-colors duration-200 ${item.checked ? 'text-[#0A2C3D]' : 'text-[#5C727D] group-hover:text-[#FF5A3C]'
                                            }`}
                                    >
                                        {item.name}
                                    </label>
                                </div>
                                <span className="text-[#5C727D] text-[16px] font-nunito group-hover:text-[#FF5A3C] transition-colors duration-200">
                                    {item.count}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border-b border-gray-200 pb-6 lg:mt-5 ">
                    <h3 className="font-bold text-[#0A2C3D] text-[20px] font-poppins mb-6">
                       Amenities
                    </h3>
                    <ul className="flex flex-col gap-y-4">
                        {Amenities.map((item,indexOne) => (
                            <li key={indexOne} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id={`typeOne-${indexOne}`}
                                        defaultChecked={item.checked}
                                        className="w-5 h-5 rounded border-[#E2E8F0] text-[#FF5A3C] focus:ring-0 accent-[#FF5A3C] cursor-pointer"
                                    />
                                    <label
                                        htmlFor={`typeOne-${indexOne}`}
                                        className={`text-[16px] font-nunito cursor-pointer transition-colors duration-200 ${item.checked ? 'text-[#0A2C3D]' : 'text-[#5C727D] group-hover:text-[#FF5A3C]'
                                            }`}
                                    >
                                        {item.name}
                                    </label>
                                </div>
                                <span className="text-[#5C727D] text-[16px] font-nunito group-hover:text-[#FF5A3C] transition-colors duration-200">
                                    {item.count}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border-b border-gray-200 pb-6 lg:mt-5 ">
                    <h3 className="font-bold text-[#0A2C3D] text-[20px] font-poppins mb-6">
                      Price Renge
                    </h3>
                    <ul className="flex flex-col gap-y-4">
                        {Price.map((item,indexTwo) => (
                            <li key={indexTwo} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id={`typeTwo-${indexTwo}`}
                                        defaultChecked={item.checked}
                                        className="w-5 h-5 rounded border-[#E2E8F0] text-[#FF5A3C] focus:ring-0 accent-[#FF5A3C] cursor-pointer"
                                    />
                                    <label
                                        htmlFor={`typeTwo-${indexTwo}`}
                                        className={`text-[16px] font-nunito cursor-pointer transition-colors duration-200 ${item.checked ? 'text-[#0A2C3D]' : 'text-[#5C727D] group-hover:text-[#FF5A3C]'
                                            }`}
                                    >
                                        {item.name}
                                    </label>
                                </div>
                                <span className="text-[#5C727D] text-[16px] font-nunito group-hover:text-[#FF5A3C] transition-colors duration-200">
                                    {item.count}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border-b border-gray-200 pb-6 lg:mt-5 ">
                    <h3 className="font-bold text-[#0A2C3D] text-[20px] font-poppins mb-6">
                      Price Renge
                    </h3>
                    <ul className="flex flex-col gap-y-4">
                        {Catagory.map((item,indexThree) => (
                            <li key={indexThree} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id={`typeThree-${indexThree}`}
                                        defaultChecked={item.checked}
                                        className="w-5 h-5 rounded border-[#E2E8F0] text-[#FF5A3C] focus:ring-0 accent-[#FF5A3C] cursor-pointer"
                                    />
                                    <label
                                        htmlFor={`typeThree-${indexThree}`}
                                        className={`text-[16px] font-nunito cursor-pointer transition-colors duration-200 ${item.checked ? 'text-[#0A2C3D]' : 'text-[#5C727D] group-hover:text-[#FF5A3C]'
                                            }`}
                                    >
                                        {item.name}
                                    </label>
                                </div>
                                <span className="text-[#5C727D] text-[16px] font-nunito group-hover:text-[#FF5A3C] transition-colors duration-200">
                                    {item.count}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default PropertyType