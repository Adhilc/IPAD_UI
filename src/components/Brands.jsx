import React from 'react'
import gtrlogo from "../assets/gtrlogo.png"
import mclarenlogo from "../assets/mclarenlogo.png"
import shelbylogo from "../assets/shelbylogo.png"
import proschelogo from "../assets/proschelogo.png"
import jagurelogo from "../assets/jagurelogo.png"




export default function Brands() {
  return (
    <div data-aos="zoom-out" className='hidden md:block bg-black/90'>
        <div className='container'>
            <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
                <img className='w-[80px]' src={gtrlogo} alt="gtrlogo" />
                <img className='w-[80px]' src={mclarenlogo} alt="mclarenlogo" />
                <img className='w-[80px]' src={shelbylogo} alt="shelbylogo" />
                <img className='w-[80px]' src={proschelogo} alt="porschelogo" />
                <img className='w-[80px]' src={jagurelogo} alt="jagurelogo" />
            </div>
        </div>
    </div>
  )
}