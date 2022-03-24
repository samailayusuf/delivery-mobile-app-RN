
import Navbar from "./components/Navbar";
import { Routes, Route, } from 'react-router-dom'
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import './components/css/signin.css'
import './components/css/nav.css'
import './components/css/home.css'
import './components/css/signup.css'
import './components/css/delivery.css'


import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar />
      
      
   <Routes>
     <Route path="/home"element={<Home />} />
     <Route path="/signin"element={<Signin />} />
     <Route path="/signup"element={<Signup />} />
   </Routes>
    </div>
  )
}

export default App



 
