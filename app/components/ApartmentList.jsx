"use client";
import React, { useState, useEffect, useRef } from 'react'
import { FaList, FaFilter } from "react-icons/fa";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import PropertyType from './PropertyType';
import PropertyList from './PropertyList';
import Pagination from './Pagination';

const ApartmentList = () => {
    const [activeView, setActiveView] = useState('grid');
    const [showFilter, setShowFilter] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const listTopRef = useRef(null);
    useEffect(() => {
        if (listTopRef.current) {
            const yOffset = -100;
            const element = listTopRef.current;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [currentPage]);

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
            price: "349,00",
            agent: "Agent Pakulla",
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
            price: "450,00",
            agent: "Agent Pakulla",
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
            price: "220,00",
            agent: "Agent Pakulla",
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
            price: "850,00",
            agent: "Agent Pakulla",
        },
        {
            id: 5,
            image: "/image/sl3.png",
            type: "For Rent",
            title: "Sea View Apartment",
            address: "San Diego, CA",
            beds: 3,
            baths: 2,
            sqft: 2800,
            price: "600,00",
            agent: "Agent Pakulla",
        },
        {
            id: 6,
            image: "/image/sl3.png",
            type: "For Rent",
            title: "Downtown Loft",
            address: "Chicago, IL",
            beds: 2,
            baths: 1,
            sqft: 1500,
            price: "300,00",
            agent: "Agent Pakulla",
        },
        {
            id: 7,
            image: "/image/sl1.png",
            type: "For Sale",
            title: "Cozy Family Home",
            address: "Austin, TX",
            beds: 3,
            baths: 2,
            sqft: 2200,
            price: "450,000",
            agent: "John Doe",
        },
        {
            id: 8,
            image: "/image/sl2.png",
            type: "For Rent",
            title: "Modern Duplex",
            address: "Seattle, WA",
            beds: 4,
            baths: 3,
            sqft: 3200,
            price: "2,500",
            agent: "Jane Smith",
        },
        {
            id: 9,
            image: "/image/sl3.png",
            type: "For Sale",
            title: "Garden Villa",
            address: "Orlando, FL",
            beds: 5,
            baths: 4,
            sqft: 4000,
            price: "750,000",
            agent: "Mike Ross",
        },
        {
            id: 10,
            image: "/image/sl1.png",
            type: "For Rent",
            title: "Penthouse Suite",
            address: "New York, NY",
            beds: 3,
            baths: 3,
            sqft: 3500,
            price: "5,000",
            agent: "Rachel Green",
        }
    ];

    const lastPostIndex = currentPage * itemsPerPage;
    const firstPostIndex = lastPostIndex - itemsPerPage;
    const currentProperties = properties.slice(firstPostIndex, lastPostIndex);

    const handleList = () => setActiveView('list');
    const handleSquare = () => setActiveView('grid');
    const handleItemsChange = (e) => setItemsPerPage(parseInt(e.target.value));

    return (
        <>
            <div ref={listTopRef} className="lg:py-20 py-10 bg-white relative">
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
                                    className={`p-2 rounded border transition-all shadow-sm ${activeView === 'grid' ? 'bg-[#FF5A3C] border-[#FF5A3C] text-white' : 'bg-white border-[#E2E8F0] text-[#8B93BB]'}`}
                                >
                                    <PiSquaresFourDuotone className="text-xl" />
                                </button>
                                <button
                                    onClick={handleList}
                                    className={`p-2 rounded border transition-all shadow-sm ${activeView === 'list' ? 'bg-[#FF5A3C] border-[#FF5A3C] text-white' : 'bg-white border-[#E2E8F0] text-[#8B93BB]'}`}
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
                                        value={itemsPerPage}
                                        onChange={handleItemsChange}
                                    >
                                        <option value="6">6</option>
                                        <option value="10">10</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 ml-0 lg:ml-2">
                                <button
                                    onClick={handleSquare}
                                    className={`p-2 rounded border transition-all shadow-sm ${activeView === 'grid' ? 'bg-[#FF5A3C] border-[#FF5A3C] text-white' : 'bg-white border-[#E2E8F0] text-[#8B93BB] hover:border-[#8B93BB]'}`}
                                >
                                    <PiSquaresFourDuotone className="text-xl" />
                                </button>
                                <button
                                    onClick={handleList}
                                    className={`p-2 rounded border transition-all shadow-sm ${activeView === 'list' ? 'bg-[#FF5A3C] border-[#FF5A3C] text-white' : 'bg-white border-[#E2E8F0] text-[#8B93BB] hover:border-[#8B93BB]'}`}
                                >
                                    <FaList className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:mt-10 mt-5">
                        <div className="lg:flex justify-between gap-8">
                            <div className={`fixed inset-0 z-50 bg-white p-6 overflow-y-auto transition-transform duration-300 transform lg:static lg:z-auto lg:p-0 lg:bg-transparent lg:w-3/12 lg:transform-none lg:block ${showFilter ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                                <div className="flex justify-between items-center mb-6 lg:hidden">
                                    <h3 className="font-bold text-[#0A2C3D] text-[20px] font-poppins">Filters</h3>
                                    <button onClick={() => setShowFilter(false)} className="text-[#FF5A3C] text-2xl">
                                        <AiOutlineClose />
                                    </button>
                                </div>
                                <PropertyType />
                            </div>
                            {showFilter && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setShowFilter(false)}></div>}

                            <div className="lg:w-9/12 w-full">
                                <PropertyList activeView={activeView} properties={currentProperties} />

                                <Pagination
                                    totalPosts={properties.length}
                                    postsPerPage={itemsPerPage}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApartmentList