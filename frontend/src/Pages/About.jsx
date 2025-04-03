import React from 'react'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div className='mt-32 ml-14 mr-14'>
        <div className=' text-gray-600 font-semibold pt-5 text-center text-3xl'>
          <p>About<span className='text-gray-800 font-semibold'>Us</span></p>
        </div>

        <div className='flex flex-col md:flex-row my-12 gap-20'>
          <img className='w-full max-w-[400px]' src={assets.about_image} alt="" />
          <div className='mt-10 flex flex-col justify-center gap-10 md:h-2/4 text-base text-gray-700'>
            <p>Welcome to BookMyDoctor, your trusted partner in managing your healthcare needs conveniently and efficiently. At BookMyDoctor, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p>BookMyDoctor is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, BookMyDoctor is here to support you every step of the way.</p>
            <b className='text-gray-900'>Our Vision</b>
            <p>Our vision at BookMyDoctor is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>

        <div className='text-xl my-14'>
          <p>WHY <span className='text-gray-900 font-semibold'>CHOOSE US</span></p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-6 text-[15px] hover:bg-green-400 transition-all duration-300 text-gray-700 cursor-pointer'>
            <b>EFFICIENCY:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>

          <div className='border border-gray-300 px-10 md:px-16 sm:py-16 flex flex-col gap-6 text-[15px] hover:bg-green-400  transition-all duration-300 text-gray-700 cursor-pointer'>
            <b>CONVENIENCE:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>

          <div className='border border-gray-300 px-10 md:px-16 sm:py-16 flex flex-col gap-6 text-[15px] hover:bg-green-400 transition-all duration-300 text-gray-700 cursor-pointer'>
            <b>PERSONALIZATION:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
    </div>
  )
}

export default About