import React from 'react'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center my-16 gap-5 text-gray-800 md:mx-10'>
    <h1 className='text-4xl font-medium'>Top Doctors to Book</h1>
    <p className='text-base text-center sm:w-1/3'>Simply browse through our extensive list of trusted doctors.</p>
    <div className='grid grid-cols-1 sm:grid-cols-5 w-full gap-4 pt-6 gap-y-7 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
            <div onClick={()=>navigate('./appointment/${item._id}')} className='border border-green-600 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500' key={index}>
                <img className='bg-green-100' src={item.image} alt={item.name} />
                <div className='p-4'>
                    <div className=' text-base text-center text-green-600 gap-2 items-center flex'>
                        <p className='w-3 h-3 text-lg bg-green-600 rounded-full'></p><p>Available</p>
                    </div>
                        <p className='text-2xl font-medium text-gray-800'>{item.name}</p>
                        <p className='text-lg text-gray-700'>{item.speciality}</p>
                    </div>
            </div>
        ))}
    </div>
    <button onClick={()=>{navigate('./doctors');scrollTo(0,0)}} className='bg-green-100 text-gray-900 px-12 py-3 rounded-full mt-10'>More</button>
</div>

  )
}

export default TopDoctors