import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='mt-32'>
        <div className='text-3xl font-semibold text-center pt-5 text-gray-600'>
          <p>CONTACT <span className='text-gray-800 font-semibold' >US</span></p>
        </div>

        <div className='flex flex-col md:flex-row my-10 mb-28 gap-12 justify-center text-sm'>
          <img className='w-full max-w-[400px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-10'>
          <p className='text-lg text-gray-600 font-bold'>OUR OFFICE</p>
          <p className='text-gray-500'>00000 Willms Station <br />Suite 000, Washington, USA</p>
          <p className='text-gray-500'>Tel : (000) 000-0000 <br />Email : drxyz0@gmail.com</p>
          <p className='text-lg text-gray-600 font-bold'>CAREERS AT BOOKMYDOCTOR</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-base hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
        </div>
    </div>
  )
}

export default Contact