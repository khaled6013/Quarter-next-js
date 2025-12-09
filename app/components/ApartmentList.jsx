"use client";
import React, { useState } from 'react'
import { FaList } from "react-icons/fa";
import { PiSquaresFourDuotone } from "react-icons/pi";
import PropertyType from './PropertyType';
import PropertyList from './PropertyList';

const ApartmentList = () => {
    const [activeView, setActiveView] = useState('grid');

    const handleList = () => {
        setActiveView('list');
    }

    const handleSquare = () => {
        setActiveView('grid');
    }

    return (
        <>
            <div className="lg:py-20 py-10 bg-white">
                <div className="lg:w-9/12 w-11/12 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
                        <h2 className='font-bold text-[#0A2C3D] text-[22px] lg:text-[25px] font-poppins text-center lg:text-left'>
                            Advance Information
                        </h2>
                        <div className="flex flex-wrap items-center lg:justify-end gap-4 lg:gap-x-4">
                            <div className="flex items-center gap-3">
                                <span className="text-[#0F172A] font-normal text-[14px] lg:text-[16px] font-poppins whitespace-nowrap">Per Page:</span>
                                <div className="relative">
                                    <select
                                        className="appearance-none border border-[#8B93BB] rounded bg-transparent px-3 py-2 pr-8 text-slate-500 text-sm lg:text-base focus:outline-none focus:border-blue-500 cursor-pointer"
                                        defaultValue="12"
                                    >
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                        <option value="36">36</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[#0F172A] font-normal text-[14px] lg:text-[16px] font-poppins whitespace-nowrap">Sort By:</span>
                                <div className="relative">
                                    <select
                                        className="appearance-none border border-[#8B93BB] rounded bg-transparent px-3 py-2 pr-8 text-slate-500 text-sm lg:text-base min-w-[120px] lg:min-w-[140px] focus:outline-none focus:border-blue-500 cursor-pointer"
                                        defaultValue="best-match"
                                    >
                                        <option value="best-match">Best Match</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 ml-0 lg:ml-2">
                                <button
                                    onClick={handleSquare}
                                    className={`p-2 rounded border transition-all shadow-sm ${activeView === 'grid'
                                            ? 'bg-[#FF5A3C] border-[#FF5A3C] text-white' 
                                            : 'bg-white border-[#E2E8F0] text-[#8B93BB] hover:border-[#8B93BB]' 
                                        }`}
                                >
                                    <PiSquaresFourDuotone className="text-xl" />
                                </button>
                                <button
                                    onClick={handleList}
                                    className={`p-2 rounded border transition-all shadow-sm ${activeView === 'list'
                                            ? 'bg-[#FF5A3C] border-[#FF5A3C] text-white' 
                                            : 'bg-white border-[#E2E8F0] text-[#8B93BB] hover:border-[#8B93BB]' 
                                        }`}
                                >
                                    <FaList className="text-xl" />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="lg:mt-10 mt-5">
                        <div className="lg:flex justify-between gap-8">
                            <div className="lg:w-3/12 w-full">
                                <PropertyType />
                            </div>
                            <div className="lg:w-9/12 w-full">
                                <PropertyList activeView={activeView} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApartmentList