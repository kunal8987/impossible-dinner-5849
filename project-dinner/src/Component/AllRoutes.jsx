import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/> */}
      </Routes>
    </div>
  )
}

export default AllRoutes
