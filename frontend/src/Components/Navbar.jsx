import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowmenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <div className='flex justify-between items-center text-sm  border-b border-green-600'>
      <img className='w-40 h-40' src={assets.logo} alt="" />
      <ul className='hidden md:flex items:start gap-16 font-bold'>
       <NavLink to='/'>
        <li>HOME</li>
        <hr className='border-none outline-none h-0.5 bg-green-600 w-3/7 m-auto hidden' />
       </NavLink> 

       <NavLink to='/doctors'>
        <li>ALL DOCTORS</li>
        <hr className='border-none outline-none h-0.5 bg-green-600 w-3/7 m-auto hidden'  />
       </NavLink>

       <NavLink to='/about'>
        <li>ABOUT</li>
        <hr className='border-none outline-none h-0.5 bg-green-600 w-3/7 m-auto hidden'  />
       </NavLink>

       <NavLink to='/contact'>
        <li>CONTACT</li>
        <hr className='border-none outline-none h-0.5 bg-green-600 w-3/7 m-auto hidden'  />
       </NavLink>
      </ul>
      <div>
      {
        token
        ? <div className='flex gap-6 items-center cursor-pointer group relative'>
          <img className='w-20 rounded-full' src={assets.profile_pic} alt="" />
          <img className='w-5' src={assets.dropdown_icon} alt="" />
          <div className='absolute top-0 right-0 pt-32 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
            <div className='bg-gray-200 min-w-44 p-8 rounded flex-colnp-8'>
              <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>MyProfile</p>
              <p onClick={()=>navigate('my-appointments')} className='pt-4 hover:text-black cursor-pointer'>MyAppointments</p>
              <p onClick={()=>setToken(false)} className='pt-4 hover:text-black cursor-pointer'>Logout</p>
            </div>
          </div>
        </div>
        : <button onClick={()=>navigate('/login')} className='font-bold bg-green-600 text-white px-8 py-3 rounded-full hidden md:block'>Create Account</button>
      }
      </div>
    </div>
  )
}

export default Navbar