import React from 'react';
import Link from 'next/link';
import { FiCalendar, FiMessageSquare, FiSearch, FiUser, FiMail, FiEdit3 } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaStar } from "react-icons/fa";

const BlogD = () => {

    const blogPosts = [
        {
            id: 1,
            image: "/image/lt3.png",
            date: "July 27, 2020",
            comments: "1 Comments",
            title: "How to Prepare for your First his consumer focused",
            desc: "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
        },
        {
            id: 2,
            image: "/image/lt2.png",
            date: "August 10, 2023",
            comments: "3 Comments",
            title: "New Trends in Modern Architecture Design",
            desc: "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
        },
        {
            id: 3,
            image: "/image/lt2.png",
            date: "August 10, 2023",
            comments: "3 Comments",
            title: "New Trends in Modern Architecture Design",
            desc: "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
        },
        {
            id: 4,
            image: "/image/lt2.png",
            date: "August 10, 2023",
            comments: "3 Comments",
            title: "New Trends in Modern Architecture Design",
            desc: "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
        },
        {
            id: 5,
            image: "/image/lt2.png",
            date: "August 10, 2023",
            comments: "3 Comments",
            title: "New Trends in Modern Architecture Design",
            desc: "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
        },

    ];

    const latestProperties = [
        { id: 1, img: "/image/prop1.png", price: "$320,000", title: "Neue Zimmersberies Schritphlach" },
        { id: 2, img: "/image/prop2.png", price: "$750,000", title: "Lange Beach House" },
        { id: 3, img: "/image/prop3.png", price: "$120,000", title: "Eaton Garth Penthouse" },
    ];

    const categories = [
        { name: "Apartment", count: 25 },
        { name: "Picture Studio", count: 24 },
        { name: "Office", count: 12 },
        { name: "Luxury Villas", count: 19 },
        { name: "Duplex House", count: 14 },
    ];

    const latestBlogs = [
        { id: 1, date: "27 Jul, 2020", title: "It is a long established fact popular" },
        { id: 2, date: "10 Aug, 2023", title: "Contrary to popular belief ipsum" },
        { id: 3, date: "05 Sep, 2023", title: "Lorem Ipsum has been the industry" },
    ];

    const tags = ["Business", "Office", "Crypto", "Jochy", "Bumbal", "Topic"];

    return (
        <>
            <div className="lg:py-20 py-10 bg-white">
                <div className="lg:w-9/12 w-11/12 mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        <div className="lg:w-8/12 w-full flex flex-col gap-y-12">
                            {blogPosts.map((item) => (
                                <div key={item.id} className="group relative">
                                    <div className="w-full lg:h-[450px] h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-lg relative z-10 mx-4 lg:mx-8 -mt-24 border border-gray-100 transition-transform duration-300 group-hover:-translate-y-2">
                                        <div className="flex items-center gap-6 mb-4 text-[#FF5A3C] text-[14px] font-nunito">
                                            <div className="flex items-center gap-2">
                                                <FiCalendar />
                                                <span>{item.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FiMessageSquare />
                                                <span>{item.comments}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-[#0A2C3D] text-[24px] lg:text-[30px] font-bold font-poppins leading-tight mb-4 group-hover:text-[#FF5A3C] transition-colors duration-300 cursor-pointer">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#5C727D] text-[15px] font-nunito leading-7 mb-6">
                                            {item.desc}
                                        </p>
                                        <Link href="#" className="inline-flex items-center gap-2 text-[#FF5A3C] font-bold font-nunito uppercase text-[14px] hover:gap-4 transition-all duration-300">
                                            Read More <BsArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="lg:w-4/12 w-full flex flex-col gap-10">
                            <div className="bg-white p-8 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.05)] text-center border border-gray-100">
                                <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4 overflow-hidden">
                                    <img src="/image/user-placeholder.jpg" alt="User" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-[#0A2C3D] text-[20px] font-bold font-poppins">Johnny Rose</h3>
                                <p className="text-[#5C727D] text-[14px] font-nunito mb-2">Frontend Programmer</p>
                                <div className="flex justify-center gap-1 text-[#FF5A3C] text-xs mb-4">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
                                    <span className="text-gray-400 ml-1">( 4.0 review )</span>
                                </div>
                                <p className="text-[#5C727D] text-[14px] leading-6 mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                </p>
                                <div className="flex justify-center gap-4">
                                    {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                                        <a key={idx} href="#" className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#5C727D] hover:bg-[#FF5A3C] hover:text-white transition-all">
                                            <Icon size={14} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* 2. Search Bar */}
                            <div className="bg-white">
                                <h3 className="text-[18px] font-bold text-[#0A2C3D] border-l-2 border-[#FF5A3C] pl-3 mb-6 font-poppins">Search Bar</h3>
                                <div className="relative">
                                    <input type="text" placeholder="Search Blogs" className="w-full p-4 pr-14 border border-gray-200 rounded text-sm outline-none focus:border-[#FF5A3C]" />
                                    <button className="absolute right-0 top-0 h-full w-14 bg-[#FF5A3C] flex items-center justify-center text-white rounded-r">
                                        <FiSearch size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* 3. Drop Message Form */}
                            <div className="bg-[#F2F6F7] p-8 rounded-lg">
                                <h3 className="text-[18px] font-bold text-[#0A2C3D] mb-6 font-poppins">Drop Message For Book</h3>
                                <form className="flex flex-col gap-4">
                                    <div className="relative">
                                        <FiUser className="absolute left-4 top-4 text-gray-400" />
                                        <input type="text" placeholder="Your Name*" className="w-full pl-10 p-3 rounded border outline-none text-sm" />
                                    </div>
                                    <div className="relative">
                                        <FiMail className="absolute left-4 top-4 text-gray-400" />
                                        <input type="email" placeholder="Your Email*" className="w-full pl-10 p-3 rounded border outline-none text-sm" />
                                    </div>
                                    <div className="relative">
                                        <FiEdit3 className="absolute left-4 top-4 text-gray-400" />
                                        <textarea placeholder="Write Message" className="w-full pl-10 p-3 rounded border outline-none text-sm h-24 resize-none"></textarea>
                                    </div>
                                    <button className="w-full bg-[#FF5A3C] text-white font-bold py-3 rounded hover:bg-[#e04f35] transition-colors">
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* 4. Latest Properties */}
                            <div className="bg-white">
                                <h3 className="text-[18px] font-bold text-[#0A2C3D] border-l-2 border-[#FF5A3C] pl-3 mb-6 font-poppins">Latest Properties</h3>
                                <div className="flex flex-col gap-6">
                                    {latestProperties.map((prop) => (
                                        <div key={prop.id} className="flex gap-4 items-center group cursor-pointer">
                                            <div className="w-24 h-20 bg-gray-200 rounded overflow-hidden shrink-0">
                                                <img src={prop.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div>
                                                <span className="text-[#FF5A3C] text-xs font-bold font-nunito">{prop.price}</span>
                                                <h4 className="text-[#0A2C3D] text-[15px] font-bold font-poppins leading-tight hover:text-[#FF5A3C] transition-colors">
                                                    {prop.title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 5. Top Categories */}
                            <div className="bg-white">
                                <h3 className="text-[18px] font-bold text-[#0A2C3D] border-l-2 border-[#FF5A3C] pl-3 mb-6 font-poppins">Top Categories</h3>
                                <ul className="flex flex-col gap-3">
                                    {categories.map((cat, idx) => (
                                        <li key={idx}>
                                            <a href="#" className="flex justify-between items-center bg-[#F2F6F7] py-3 px-4 rounded text-[#5C727D] text-[14px] hover:bg-[#FF5A3C] hover:text-white transition-all group font-nunito">
                                                <span>{cat.name}</span>
                                                <span className="group-hover:text-white">({cat.count})</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 6. Popular Properties (Single Card) */}
                            <div className="bg-white">
                                <h3 className="text-[18px] font-bold text-[#0A2C3D] border-l-2 border-[#FF5A3C] pl-3 mb-6 font-poppins">Popular properties</h3>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <div className="h-[200px] bg-gray-300">
                                        <img src="/image/lt3.png" className="w-full h-full object-cover" alt="Popular" />
                                    </div>
                                    <div className="pt-4">
                                        <span className="text-[#FF5A3C] font-bold font-nunito block mb-1">$ 560,000.00</span>
                                        <h4 className="text-[#0A2C3D] text-[18px] font-bold font-poppins mb-1 hover:text-[#FF5A3C] cursor-pointer">New Apartment Nice View</h4>
                                        <p className="text-[#5C727D] text-xs mb-2">Belmont Gardens, Chicago</p>
                                    </div>
                                </div>
                            </div>

                            {/* 7. Latest Blogs (Small List) */}
                            <div className="bg-white">
                                <h3 className="text-[18px] font-bold text-[#0A2C3D] border-l-2 border-[#FF5A3C] pl-3 mb-6 font-poppins">Latest Blogs</h3>
                                <div className="flex flex-col gap-6">
                                    {latestBlogs.map((blog) => (
                                        <div key={blog.id} className="flex gap-4 items-center group cursor-pointer">
                                            <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden shrink-0">
                                                <img src="/image/lt1.png" alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div>
                                                <span className="text-[#FF5A3C] text-[10px] flex items-center gap-1 font-nunito mb-1">
                                                    <FiCalendar /> {blog.date}
                                                </span>
                                                <h4 className="text-[#0A2C3D] text-[14px] font-bold font-poppins leading-tight hover:text-[#FF5A3C] transition-colors">
                                                    {blog.title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 8. Follow Us & Tags */}
                            <div className="bg-white">
                                <h3 className="text-[18px] font-bold text-[#0A2C3D] border-l-2 border-[#FF5A3C] pl-3 mb-6 font-poppins">Follow Us</h3>
                                <div className="flex gap-3 mb-10">
                                    {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                                        <a key={idx}  className="w-10 h-10 rounded bg-[#F2F6F7] flex items-center justify-center text-[#5C727D] hover:bg-[#FF5A3C] hover:text-white transition-all shadow-sm">
                                            <Icon size={16} />
                                        </a>
                                    ))}
                                </div>

                                <h3 className="text-[18px] font-bold text-[#0A2C3D] border-l-2 border-[#FF5A3C] pl-3 mb-6 font-poppins">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag, idx) => (
                                        <a key={idx} className="border border-gray-200 text-[#5C727D] text-[13px] px-4 py-2 rounded hover:bg-[#FF5A3C] hover:text-white hover:border-[#FF5A3C] transition-all font-nunito">
                                            {tag}
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogD;