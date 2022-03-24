import React from 'react'
import Delivery from '../components/Delivery'

const Home = () => {
  return (
    <div className='heroSectio'>
        <div className="heroSection">
        <div className='description'>
            <h2 className='have'>Have an order from your<br></br>
            favorite vendors delivered<br></br>
            right to your doorstep
            </h2>
            <h2 className='link'><a href='#'>Get Started</a></h2>
        </div>
        <div className='hero'>
            <img src="./Images/hero-image.jpg" alt="" />
        </div>
        </div>
        <div className="delivery">

            <Delivery />
        </div>
    </div>
  )
}

export default Home