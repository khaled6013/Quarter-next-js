import React from 'react'

const Sells = () => {
  return (
    <>
      <div className="lg:pt-20 pt-10">
        <div className="lg:w-9/12 w-11/12 mx-auto">
          <div className="lg:flex justify-between gap-10">
            <div className="lg:w-1/2 w-2/2">
              <div className="bg-[#FFEDE8] text-[#FF5A3C] px-5 py-1 w-fit rounded-full text-sm  mb-4 font-nunito font-bold">
                About Us
              </div>
              <h2 className="text-[35px] lg:text-[42px] font-bold font-poppins text-[#0A0A0A] leading-snug">
                Today Sells Properties
              </h2>
              <p className="text-[#52525B] mt-4 leading-7 font-nunito lg:text-[16px] text-[14px] lg:w-[484px]">
                Houzez allow you to design unlimited panels and real estate custom
                forms to capture leads and keep record of all information
              </p>
              <ul className="mt-6 space-y-3 text-[15px] text-[#5C727D]">
                <li className="flex items-center gap-2">
                  <span className="text-[#FF5A3C] text-xl font-nunito font-bold">—</span>
                  Live Music Cocerts at Luviana
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF5A3C] text-xl font-nunito font-bold">—</span>
                  Our SecretIsland Boat Tour is Just for You
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF5A3C] text-xl font-nunito font-bold">—</span>
                  Live Music Cocerts at Luviana
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF5A3C] text-xl font-nunito font-bold">—</span>
                  Live Music Cocerts at Luviana
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-8 mt-10">

                <div className="border-r pr-4 text-center border-[#707070]">
                   <div className="flex items-center gap-2 ">
                     <h3 className="text-[22px] font-medium">3</h3>
                     <img src="/image/bed.png" alt="bed" />
                   </div>
                  <p className="text-[#5C727D] text-[14px] font-bold mt-1">Bedrooms</p>
                </div>
                <div className="border-r pr-4 text-center border-[#707070]">
                   <div className="flex items-center gap-2 ">
                     <h3 className="text-[22px] font-medium">2</h3>
                     <img src="/image/bath.png" alt="bath" />
                   </div>
                  <p className="text-[#5C727D] text-[14px] font-bold mt-1">Bathrooms</p>
                </div>
                <div className="border-r pr-4 text-center border-[#707070]">
                   <div className="flex items-center gap-2 ">
                     <h3 className="text-[22px] font-medium">2</h3>
                     <img src="/image/car.png" alt="car" />
                   </div>
                  <p className="text-[#5C727D] text-[14px] font-bold mt-1">Car parking</p>
                </div>
                <div className="">
                   <div className="flex items-center gap-2 ">
                     <h3 className="text-[22px] font-medium">3450</h3>
                     <img src="/image/ft.png" alt="ft" />
                   </div>
                  <p className="text-[#5C727D] text-[14px] font-bold mt-1">Squre Ft</p>
                </div>

              </div>
              <div className="flex gap-5 mt-10 flex-wrap">
                <img src="/image/sell1.png" className="w-[120px] h-[90px] object-cover shadow-md" />
                <img src="/image/sell2.png" className="w-[120px] h-[90px] object-cover shadow-md" />
                <img src="/image/sell3.png" className="w-[120px] h-[90px] object-cover shadow-md" />
              </div>

            </div>

            <div className="lg:w-1/2 w-2/2 mt-10 lg:mt-0 flex gap-4">
              <div className="w-1/2">
                <img
                  src="/image/sellR1.png"
                  className="w-full h-[78%] "
                />
              </div>
              <div className="w-1/2 flex flex-col gap-4">
                <img
                  src="/image/sellR2.png"
                  className="w-full h-[38%]  "
                />
                <img
                  src="/image/sellR3.png"
                  className="w-full h-[38%]  "
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Sells
