"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null); 

    const toggleFaq = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); 
        } else {
            setOpenIndex(index);
        }
    };

    const faqData = [
        {
            question: "Is it possible to purchase a home in MO with no money down?",
            answer: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar."
        },
        {
            question: "What are the benefits to paying off a mortgage early?",
            answer: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placerat Lorem ipsum dolor sit amet onsectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora."
        },
        {
            question: "How do I list my rental home on your site. I used to have an account?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora. Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue."
        },
        {
            question: "Is it possible to purchase a home in MO with no money down?",
            answer: "Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula."
        },
        {
            question: "ou can arrange a service visit, find out what's happening with you?",
            answer: "Vivamus semper at orci at placerat. Placerat Lorem ipsum dolor sit amet onsectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora."
        },
        {
            question: "Can I manage my account online?",
            answer: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem."
        },
        {
            question: "What are the benefits to paying off a mortgage early?",
            answer: "Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat."
        },
        {
            question: "How do I list my rental home on your site. I used to have an account with?",
            answer: "Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat. Placerat Lorem ipsum dolor sit amet onsectetur adipisicing elit."
        }
    ];

    return (
        <section className="bg-white lg:py-24 py-12">
            <div className="lg:w-8/12 w-11/12 mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-[#0A2C3D] font-bold lg:text-[40px] text-[28px] font-poppins mb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#5C727D] text-[15px] font-nunito">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="transition-all duration-300">
                                <div 
                                    onClick={() => toggleFaq(index)}
                                    className={`flex items-center justify-between px-6 py-5 cursor-pointer rounded border transition-all duration-300
                                    ${isOpen 
                                        ? "bg-[#FF5A3C] border-[#FF5A3C] shadow-lg" 
                                        : "bg-white border-gray-200 hover:border-[#FF5A3C]"
                                    }`}
                                >
                                    <h3 className={`font-bold font-nunito text-[16px] lg:text-[17px] transition-colors duration-300 
                                        ${isOpen ? "text-white" : "text-[#5C727D] hover:text-[#FF5A3C]"}`}>
                                        {item.question}
                                    </h3>
                                    
                                    <div className={`w-6 h-6 flex items-center justify-center rounded text-[12px] transition-colors duration-300
                                        ${isOpen ? "bg-white/20 text-white" : "text-[#5C727D]"}`}>
                                        {isOpen ? <FaMinus /> : <FaPlus />}
                                    </div>
                                </div>

                                <div 
                                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out
                                    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <div className="p-6 pt-4 text-[#5C727D] font-nunito text-[15px] leading-7 bg-white">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Faq;