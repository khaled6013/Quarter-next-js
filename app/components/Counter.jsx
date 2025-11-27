import React from 'react'

const Counter = () => {
    return (
        <>
            <div className=" bg-[#F6F5FC]">
                <div className="lg:w-8/12 w-11/12 mx-auto">
                    <div className="lg:flex justify-between items-center">
                        <div className="lg:w-1/4 w-full items-center text-center hover:scale-101 duration-200 hover:bg-white py-10 hover:shadow-xl">
                            <img src="/image/icon1.png" alt="icon1" className='mx-auto' />
                            <h2 className='text-black text-[40px] font-bold font-poppins pt-7'>560</h2>
                            <p className='text-[#5C727D] text-[20px] font-bold font-nunito'>Total Area Sq</p>
                        </div>
                        <div className="lg:w-1/4 w-full items-center text-center hover:scale-101 duration-200 hover:bg-white py-10 hover:shadow-xl">
                            <img src="/image/icon2.png" alt="icon2" className='mx-auto' />
                            <h2 className='text-black text-[40px] font-bold font-poppins pt-7'>197</h2>
                            <p className='text-[#5C727D] text-[20px] font-bold font-nunito'>Apartments Sold</p>
                        </div>
                        <div className="lg:w-1/4 w-full items-center text-center hover:scale-101 duration-200 hover:bg-white py-10 hover:shadow-xl">
                            <img src="/image/icon3.png" alt="icon3" className='mx-auto' />
                            <h2 className='text-black text-[40px] font-bold font-poppins pt-7'>268</h2>
                            <p className='text-[#5C727D] text-[20px] font-bold font-nunito'>Total Constructions</p>
                        </div>
                        <div className="lg:w-1/4 w-full items-center text-center hover:scale-101 duration-200 hover:bg-white py-10 hover:shadow-xl">
                            <img src="/image/icon4.png" alt="icon4" className='mx-auto' />
                            <h2 className='text-black text-[40px] font-bold font-poppins pt-7'>340</h2>
                            <p className='text-[#5C727D] text-[20px] font-bold font-nunito'>Apartio Rooms</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
