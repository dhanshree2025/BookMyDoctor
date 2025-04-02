import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets';


const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex items-center flex-col gap-4 py-16 text-gray-800'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-base pt-8'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className="flex gap-12 pt-12 w-full sm:justify-center overflow-scroll">
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-base cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-700 hover:text-lg' key={index} to={`/doctors/${item.speciality.toLowerCase().replace(/\s+/g, '-')}`}>
            <img className='w-16 sm:w-32 mb-2' src={item.image} alt={`${item.speciality} icon`} />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
