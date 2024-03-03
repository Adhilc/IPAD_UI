import React from 'react'
import Typewriter from "../components/TypewriterEffect"

export default function Hero () {
  return (
    <div className='container'>
        <div className=' min-h-[550px] sm:min-h-[650px] flex justify-center items-center'>
            <div className='flex flex-col justify-center space-y-3'>
                <div className='flex items-center flex-col justify-center gap-4  text-center order-2 sm:order-1 relative z-10 space-y-2'>
                    <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className=' font-kanit text-md sm:text-2xl text-gray-300'>Our collections</p>
                    <Typewriter />
                    <h3 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='font-kanit text-md sm:text-2xl text-gray-300'>Discover Unmatched Elegance and Performance</h3>
                    <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-delay="300" className='flex items-center justify-center'>
                        <button className='w-[300px] mt-7 font-kanit cursor-pointer hover:scale-125 duration-300 py-2 px-8 rounded-full relative z-10 text-black bg-white hover:text-white hover:bg-purple-900'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
