import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About'
import MyProfile from './Pages/MyProfile'
import Contact from './Pages/Contact'
import MyAppointments from './Pages/MyAppointments'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App