import React from 'react'
import {Routes, Route} from "react-router-dom"

//Admin Pages
import Adminlogin from './Components/admin-login/Adminlogin'
import Dolist from './Components/admin-DoList/Dolist'

//User Pages
import Userlogin from './Components/user-login/Userlogin'
import Home from './Components/Home/Home'
import Summary from './Components/Summary/Summary'
import Checkout from './Components/checkout/Checkout'

const Routing = () =>
{
  return(
    <Routes>     
      <Route path="/" element={<Userlogin/>} /> 
      <Route path="/home" element={<Home/>} /> 
      <Route path="/summary" element={<Summary/>} /> 
      <Route path="/checkout" element={<Checkout/>} /> 

      <Route path="/adminlogin" element={<Adminlogin/>} /> 
      <Route path="/admindolist" element={<Dolist/>} /> 
    </Routes>
  )
}

const App = () => {
  return (
    <>
      <Routing/>
    </> 
  )
}

export default App
