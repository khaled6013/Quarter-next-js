import React from 'react';

const ServiceCon = () => {

    const serviceData = [
        {
            id: 1,
            title: "Property Management",
            desc: "Lorem ipsum dolor sit amet, cor adipisicing elit, sed do eiusmod tempor incidid labore et dolore magna aliqua. Ut",
            icon: "/image/ser1.png"
        },
        {
            id: 2,
            title: "Mortgage Service",
            desc: "Lorem ipsum dolor sit amet, cor adipisicing elit, sed do eiusmod tempor incidid labore et dolore magna aliqua. Ut",
            icon: "/image/ser1.png"
        },
        {
            id: 3,
            title: "Consulting Service",
            desc: "Lorem ipsum dolor sit amet, cor adipisicing elit, sed do eiusmod tempor incidid labore et dolore magna aliqua. Ut",
            icon: "/image/ser3.png"
        },
        {
            id: 4,
            title: "Home Buying",
            desc: "Lorem ipsum dolor sit amet, cor adipisicing elit, sed do eiusmod tempor incidid labore et dolore magna aliqua. Ut",
            icon: "/image/ser4.png"
        },
        {
            id: 5,
            title: "Home Selling",
            desc: "Lorem ipsum dolor sit amet, cor adipisicing elit, sed do eiusmod tempor incidid labore et dolore magna aliqua. Ut",
            icon: "/image/ser5.png"
        },
        {
            id: 6,
            title: "Escrow Services",
            desc: "Lorem ipsum dolor sit amet, cor adipisicing elit, sed do eiusmod tempor incidid labore et dolore magna aliqua. Ut",
            icon: "/image/ser2.png"
        }
    ];

    return (
        <section className="bg-white lg:pt-24 lg:pb-30 pt-12 pb-20">
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[#0A2C3D] font-bold lg:text-[45px] text-[30px] font-poppins mb-3">
                        Our Core Services
                    </h2>
                    <p className="text-[#5C727D] text-[15px] font-nunito">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceData.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white p-10 rounded-lg shadow-[0px_0px_15px_rgba(0,0,0,0.03)] hover:shadow-[0px_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 text-center cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF5A3C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                            <div className="w-[70px] h-[70px] mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <h3 className="text-[#0A2C3D] font-bold text-[22px] font-poppins mb-4 group-hover:text-[#FF5A3C] transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-[#5C727D] text-[14px] font-nunito leading-7">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceCon;