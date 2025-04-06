import React, { useContext } from 'react'
import {AppContext} from '../Context/AppContext'
import { assets } from '../assets/assets'

const MyAppointments = () => {
  const {doctors} = useContext(AppContext)

  return (
    <div className='mt-32 ml-14 mr-14'>
        <p>My Appointments</p>
        <div>
          {doctors.slice(0,2).map((Item,index)=>(
            <div key={index}>
               <div>
                <img src={Item.image} alt="" />
               </div>
               <div>
                  <p>{Item.name}</p>
                  <p>{Item.speciality}</p>
                  <p>Address:</p>
                  <p>{Item.address.line1}</p>
                  <p>{Item.address.line2}</p>
                  <p><span>Date & Time:</span>25,July,2024 | 8:30PM</p>
               </div>
               <div></div>
               <div>
                <button>Pay Online</button>
                <button>Cancle Appointment</button>
               </div>
            </div>
            
          ))}
        </div>
    </div>
  )
}

export default MyAppointments