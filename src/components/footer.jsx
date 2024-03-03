import React from 'react'
import videobg2 from "../assets/videobg2.mp4"

export default function footer() {
  return (
    <div id='explore' className='p-4 bg-black'>
        <div className='container'>
            <div className='w-100% h-100hv bg-black relative'>
                <video className='hidden sm:block w-screen sm:h-100% h-full object-cover blur-sm ' src={videobg2} autoPlay muted loop />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 '>
                    <div className=' pl-10 flex flex-col items-center gap-4 absolute top-10 sm:top-1/2'>
                        <h1 data-aos="zoom-out" className=' font-kanit text-2xl sm:text-4xl text-white'>Sign Up to get</h1>
                        <h1 data-aos="zoom-out" className=' font-bold font-kanit text-6xl sm:text-7xl text-white'>Explore</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-delay="300" className='bg-white  absolute right-10 sm:top-1/3 sm:right-20 h-[500px] w-[400px] rounded-xl'>
                        <form className='flex flex-col gap-4 items-center space-y-4'>
                            <h1 className='mt-4 font-kanit font-bold text-black text-2xl sm:text-4xl'>welcome to premier</h1>
                            <p  className='text-black font-kanit'>find your dream car</p>
                            <input className='border-[1px] hover:scale-105 duration-300 border-gray-400 rounded-full px-3 py-2 w-[300px]' type="email" placeholder='email' />
                            <input className='border-[1px] hover:scale-105 duration-300 border-gray-400 rounded-full px-3 py-2 w-[300px]' type="text" placeholder='password'/>
                            <button className='mt-7 font-kanit cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10  w-[300px] text-white bg-purple-900' type='submit'>continue</button>
                            <div className='px-4 text-center absolute bottom-5'>
                                <p className='text-sm font-kanit'>By continuing, you agree to Premier 
                                <span className='pl-1 font-bold font-kanit text-sm text-black'>Terms of Services</span>
                                and acknowledge you've read our 
                                <span className='pl-1 font-bold font-kanit text-sm text-black'>
                                    Privacy Policy.Notice at collection</span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
