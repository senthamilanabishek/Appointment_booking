import React from 'react'
import Home from '../pages/Home';
import Services from '../pages/Services.jsx';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import DoctorDetails from '../pages/Doctors/DoctorDetails.jsx';
import Doctors from '../pages/Doctors/Doctors.jsx';
import MyAccount from '../Dashboard/user-account/MyAccount.jsx';
import Dashboard from '../Dashboard/doctor-account/Dashboard.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

import { Routes, Route } from 'react-router-dom';
import CheckoutSuccess from '../pages/Doctors/CheckoutSuccess.jsx';


function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:id' element={<DoctorDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/checkout-success' element={<CheckoutSuccess/>}/>
        <Route path='/user/profile/me' element={<ProtectedRoute allwoedRoles={['patient']} ><MyAccount/></ProtectedRoute>}/>
        <Route path='/doctors/profile/me' element={<ProtectedRoute allwoedRoles={['doctor']}><Dashboard/></ProtectedRoute>}/>
    </Routes>
  )
}

export default Routers;