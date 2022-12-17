import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Jobs from '../Component/Jobs'
import Company from './Company'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/job' element={<Jobs/>}/>
        <Route path='/company' element={<Company/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </div>
  )
}

export default AllRoutes
