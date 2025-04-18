import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {AppContext} from '../Context/AppContext'
import { doctors } from '../assets/assets'

const Doctors = () => {
  const {speciality} = useParams()

  const[filterDoc,setFilterDoc] = useState([])

  const navigate = useNavigate()

  const {Doctors} = useContext(AppContext)

  const applyFilter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div className='mt-32 mr-16 ms-16'>
        <p className='text-gray-800 font-semibold'>Browse through the doctors specialist.</p>
        <div className='flex flex-col sm:flex-row items-start gap-8 mt-5'>
          <div className='flex flex-col text-base gap-4 text-gray-500 mt-6'>
            <p onClick={()=>speciality === 'General physician' ? navigate('/doctors'): navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
            <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors'): navigate('/doctors/Gynecologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
            <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors'): navigate('/doctors/Dermatologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
            <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors'): navigate('/doctors/Pediatricians')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
            <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors'): navigate('/doctors/Neurologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
            <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors'): navigate('/doctors/Gastroenterologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-5 w-full gap-4 pt-6 gap-y-7 px-3 sm:px-0'>
            {
              filterDoc.map((item, index) => (
                <div onClick={()=>navigate(`/Appointment/${item._id}`)} className='border border-green-600 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500' key={index}>
                    <img className='bg-green-100' src={item.image} alt={item.name} />
                    <div className='p-4'>
                        <div className=' text-base text-center text-green-600 gap-2 items-center flex'>
                            <p className='w-3 h-3 text-lg bg-green-600 rounded-full'></p><p>Available</p>
                        </div>
                            <p className='text-xl font-medium text-gray-800'>{item.name}</p>
                            <p className='text-lg text-gray-700'>{item.speciality}</p>
                        </div>
                </div>
            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors