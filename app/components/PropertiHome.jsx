import React from 'react'

const PropertiHome = () => {
  return (
    <>
     <div className="lg:py-20 py-10 bg-[#F4F4F8]">
        <div className="lg:w-9/12 w-11/12 mx-auto">
            <h2 className='font-bold text-[#0A2C3D] lg:text-[48px] text-[28px] font-poppins'>Properties List</h2>
            <div className="flex items-center gap-2 mt-2">
                <img src="/image/banLogo.png" alt="banLogo" />
                 <div className="flex items-center gap-x-2">
                    <p className='font-normal text-[#133344] text-[18px] font-nunito'>Listings </p>
                    <p className='font-normal text-[#133344] text-[18px] font-nunito'>Properties List</p>
                 </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default PropertiHome