import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='container'>
                <div className='heading'>
                    <h2>DeliverNow</h2>
                </div>
                <nav>
                   
                    <NavLink to = "/home">Home</NavLink>
                    
                    <NavLink to = "/signin">Sign In</NavLink>
                    
                    <NavLink to = "/signup"><button className='signUp'>Sign Up</button></NavLink>
            
                </nav>
            </div>
         </div>


        
        
    )
}

export default Navbar
