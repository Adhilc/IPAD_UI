import React from 'react'
import log from "../assets/log.png"

export default function navbar() {
  return (
    <div className='z-40 relative top-0 bg-black'>
        <div className='py-4'>
            <div className='container flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className='w-24' src={log} alt="shoeze" />
                    <a className='font-kanit uppercase text-2xl sm:text-3xl tracking-widest font-bold text-white '>premier</a>
                </div>
                <div className=' justify-between items-center gap-4 hidden lg:block'>
                    <ul className='flex items-center gap-6'>
                        <li><a href="" className='text-xl text-gray-300 hover:text-white duration-200 font-kanit'>Home</a></li>
                        <li><a href="#about-us" className='text-xl text-gray-300 hover:text-white duration-200  font-kanit'>About Us</a></li>
                        <li><a href="#explore" className='text-xl text-gray-300 hover:text-white duration-200 font-kanit'>Explore</a></li>
                        <li><a href="" className='text-xl text-gray-300 hover:text-white duration-200 font-kanit'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <a className='text-xl cursor-pointer text-gray-300 hover:text-white duration-200 font-kanit'>Sign in</a>
                    <p className='text-xl text-gray-500'>/</p>
                    <a className='text-xl cursor-pointer text-gray-300 hover:text-white duration-200 font-kanit'>Explore Now</a>
                </div>
            </div>
        </div>
    </div>
  )
}
