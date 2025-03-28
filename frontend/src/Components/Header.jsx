import React from 'react'
import {assets} from '../assets/assets'
const Header = () => {
  return (
    <div className='bg-green-600 rounded-lg h-auto mt-6 md:px-10 lg:px-20 flex flex-col  flex-wrap md:flex-row'>
        {/*--------Left side---------*/}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[30px]'>
             <p className='w-96 text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:lead lg:leading-tight'>Book Appointment With Trusted Doctors</p>
             <div className='flex flex-col md:flex-row gap-4 items-center text-white text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/>schedule your appointment hassle-free.</p>
             </div>
             <a href="#speciality" className='flex gap-3 items-center bg-white px-6 py-3 rounded-full text-gray-700 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-1000'>Book Appointment<img className='w-5' src={assets.arrow_icon} alt="" /></a>
        </div>

        {/*--------Right side---------*/}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 rounded-lg h-auto' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header