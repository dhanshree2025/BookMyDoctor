import React from 'react'
import {assets} from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className='flex bg-green-400 px-7 sm:px-10 md:px-14 lg:px-12'>
        {/*-------------Left Side--------------*/}
        <div className='flex-1 py-9 lg:py-28 md:py-16 sm:py-10 lg:pl-6'>
            <div className='text-lg lg:text-5xl md:text-3xl sm:text-2xl font-semibold text-white'>
                <p>Book Appointment</p>
                <p className='mt-6'>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='text-sm sm:text-base text-gray-700 bg-white px-8 py-3 rounded-full hover:scale-105 transition-all mt-16 hover:font-semibold'>Create Account</button>
        </div>

        {/*-------------Right Side--------------*/}
        <div className='hidden md:block md:w-1/2 lg:w-[390px] relative'>
            <img className='w-full bottom-0 right-0 absolute max-w-md' src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner