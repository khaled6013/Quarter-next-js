"use client";
import React, { useState } from 'react'
import { FaList, FaFilter } from "react-icons/fa"; 
import { PiSquaresFourDuotone } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai"; 
import PropertyType from './PropertyType';
import PropertyList from './PropertyList';

const ApartmentList = () => {
    const [activeView, setActiveView] = useState('grid');
    const [showFilter, setShowFilter] = useState(false); 

    const handleList = () => {
        setActiveView('list');
    }

    const handleSquare = () => {
        setActiveView('grid');
    }

    return (
        <>
            <div className="lg:py-20 py-10 bg-white relative">
                <div className="lg:w-9/12 w-11/12 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
                        <h2 className='font-bold text-[#0A2C3D] text-[22px] lg:text-[25px] font-poppins text-center lg:text-left'>
                            Advance Information
                        </h2>
                        <div className="lg:hidden w-full flex justify-between items-center mb-4">
                             <button 
                                onClick={() => setShowFilter(true)}
                                className="flex items-center gap-2 bg-[#FF5A3C] text-white px-4 py-2 rounded font-nunito font-bold text-sm"
                             >
                                <FaFilter /> Filter
                             </button>
                             <div className="flex items-center gap-2">
                                <button
                                    onClick={handleSquare}
                                    className={`p-2 rounded border transition-all shadow-sm ${activeView === 'grid'
                                            ? 'bg-[#FF5A3C] border-[#FF5A3C] text-white' 
                                            : 'bg-white border-[#E2E8F0] text-[#8B93BB]' 
                                        }`}
                                >
                                    <PiSquaresFourDuotone className="text-xl" />
                                </button>
                                <button
                                    onClick={handleList}
                                    className={`p-2 rounded border transition-all shadow-sm ${activeView === 'list'
                                            ? 'bg-[#FF5A3C] border-[#FF5A3C] text-white' 
                                            : 'bg-white border-[#E2E8F0] text-[#8B93BB]' 
                                        }`}
                                >
                                    <FaList className="text-xl" />
                                </button>
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-wrap items-center lg:justify-end gap-4 lg:gap-x-4">
                            <div className="flex items-center gap-3">
                                <span className="text-[#0F172A] font-normal text-[14px] lg:text-[16px] font-poppins whitespace-nowrap">Per Page:</span>
                                <div className="relative">
                                    <select
                                        className="appearance-none border border-[#8B93BB] rounded bg-transparent px-3 py-2 pr-8 text-slate-500 text-sm lg:text-base focus:outline-none focus:border-blue-500 cursor-pointer"
                                        defaultValue="6"
                                    >
                                        <option value="6">6</option>
                                        <option value="10">10</option>
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
                            <div className={`
                                fixed inset-0 z-50 bg-white p-6 overflow-y-auto transition-transform duration-300 transform lg:static lg:z-auto lg:p-0 lg:bg-transparent lg:w-3/12 lg:transform-none lg:block
                                ${showFilter ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                            `}>
                                <div className="flex justify-between items-center mb-6 lg:hidden">
                                    <h3 className="font-bold text-[#0A2C3D] text-[20px] font-poppins">Filters</h3>
                                    <button onClick={() => setShowFilter(false)} className="text-[#FF5A3C] text-2xl">
                                        <AiOutlineClose />
                                    </button>
                                </div>

                                <PropertyType />
                            </div>
                            {showFilter && (
                                <div 
                                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                                    onClick={() => setShowFilter(false)}
                                ></div>
                            )}

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