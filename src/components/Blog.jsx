import React from 'react'
import landscape4 from "../assets/landscape4.jpg"
import landscape5 from "../assets/landscape5.jpg"
import landscape6 from "../assets/landscape6.jpg"

export default function Blog() {
  return (
    <div id="about-us" className='py-16 bg-black'>
        <div className='container'>
            <div>
                <h1 data-aos="slide-right" className='text-2xl sm:text-4xl text-white font-kanit'>Build your own</h1>
                <h1 data-aos="slide-right" className='text-9xl sm:text-9xl text-purple-900 font-bold font-kanit'>Garage</h1>
            </div>
            <div className='p-4 py-12 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 z-10'>
                <div data-aos="fade-up" data-aos-delay="0" className='sm:col-span-3' >
                    <div className='absolute bottom-0 sm:bottom-5 p-5 flex flex-col z-20'>
                        <p data-aos="zoom-in" className='text-white font-bold text-xl sm:text-2xl font-kanit'>Tailored Financing Options</p>
                        <p data-aos="zoom-in" className='max-w-[800px] text-gray-300 font-kanit text-sm sm:text-xl mt-1'>We offer tailored financing options designed to make owning your dream luxury car a seamless and rewarding experience,ensuring that luxury is within reach</p>
                    </div>
                    <img className="h-full w-full object-cover rounded-xl shadow-sm shadow-white hover:scale-105 duration-300" src={landscape4} alt="blog1" />
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className='col-span-2'>
                    <div className='absolute bottom-0 sm:bottom-5 p-5 flex flex-col z-20'>
                        <p data-aos="zoom-in" className='text-white font-bold text-xl sm:text-2xl font-kanit'>Global Shipping</p>
                        <p data-aos="zoom-in" className='max-w-[800px] text-gray-300 font-kanit text-sm sm:text-xl mt-1'>Experience unparalleled convenience wiht our global shipping services,allowing you to take delivery of your luxury car anywhere in the world</p>
                    </div>
                    <img className="h-full w-full object-cover rounded-xl shadow-sm shadow-white hover:scale-105 duration-300" src={landscape5} alt="blog1" />
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                    <div className='absolute bottom-0 sm:bottom-5 p-5 flex flex-col z-20'>
                        <p data-aos="zoom-in" className='text-white font-bold text-xl sm:text-2xl font-kanit'>Customize Your Car</p>
                        <p data-aos="zoom-in" className='max-w-[800px] text-gray-300 font-kanit text-sm sm:text-xl mt-1'>Tailor your luxury car to reflect your individual style preferences with our bespoke customization services.</p>
                    </div>
                    <img className="h-full w-full object-cover rounded-xl shadow-sm shadow-white hover:scale-105 duration-300"  src={landscape6} alt="blog1" />
                </div>
            </div>
        </div>
    </div>
  )
}


