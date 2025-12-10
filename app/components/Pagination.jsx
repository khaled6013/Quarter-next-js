import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < pages.length) setCurrentPage(currentPage + 1);
    };

    return (
        <div className='flex items-center justify-center gap-4 mt-12'>
            <button 
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`text-[#5C727D] text-lg transition-colors duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#FF5A3C]'}`}
            >
                <FaArrowLeft />
            </button>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={`w-12 h-12 rounded-full font-bold font-nunito text-[16px] transition-all duration-300 shadow-sm flex items-center justify-center
                        ${page === currentPage 
                            ? 'bg-[#FF5A3C] text-white shadow-[#FF5A3C]/30 shadow-lg scale-110' 
                            : 'bg-white text-[#5C727D] hover:bg-[#FF5A3C] hover:text-white'
                        }`}
                    >
                        {page}
                    </button>
                );
            })}
            <button 
                onClick={handleNext}
                disabled={currentPage === pages.length}
                className={`text-[#5C727D] text-lg transition-colors duration-300 ${currentPage === pages.length ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#FF5A3C]'}`}
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default Pagination;