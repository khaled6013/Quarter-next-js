import React from 'react'

const FaqBanner = () => {
  return (
    <>
      <div className="lg:py-25 py-10 bg-[#F4F4F8] relative">
        <div className="lg:w-9/12 w-11/12 mx-auto">
            <h2 className='font-bold text-[#0A2C3D] lg:text-[48px] text-[28px] font-poppins'>Faq page</h2>
            <div className="flex items-center gap-2 mt-2">
                <img src="/image/banLogo.png" alt="banLogo" />
                 <div className="flex items-center gap-x-2">
                    <p className='font-normal text-[#133344] text-[18px] font-nunito'>Blog</p>
                    <p className='font-normal text-[#133344] text-[18px] font-nunito'>Faq,s</p>
                 </div>
            </div>
            <div className="absolute -top-15 right-10 lg:block hidden">
               <img src="/image/blogBan.png" alt="blogBan" className='w-[400px]'/>
            </div>
        </div>
     </div>
    </>
  )
}

export default FaqBanner