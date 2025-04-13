import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-24 text-sm'>
            {/*--------------Left Side---------------*/}
            <div className=''>
                <img className='w-40' src={assets.logo} alt="" />
                <p className='ml-6 w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure architecto odit, ut nobis amet fugit deserunt, sint accusamus ipsam provident repellat rem neque veritatis. Quos ut adipisci nesciunt exercitationem.</p>
            </div>

            {/*-------------Middle Side--------------*/}
            <div className='pt-12 ml-6'>
                <p className='text-xl font-medium mb-6'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-500'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/*-------------Right Side--------------*/}
            <div  className='pt-10 ml-6'>
                <p className='text-xl font-medium mb-6'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-500'>
                    <li>+91-123-456-7890</li>
                    <li>drxyx@gmail.com</li>
                </ul>
            </div>
        </div>   
        {/*----------------copyright text------------------*/}
        <div className=''>
            <hr className='border-1 border-gray-400' />
            <p className='text-base text-center py-5'>Copyright 2025@ BookMyDoctor p-All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer