import React from 'react'

const Delivery = () => {
  return (
    <div className='deliver'>
        <div className="left">
            <img src="./Images/right.png" alt="" />
            <h2 className=''>Select a vendor</h2>
            <p>Patronise top endorsed merchant<br></br>
            for various service on the go
            </p>
            <h4><a href='#'>Sign in to your account</a></h4>
        </div>
        <div className="middle">
          <img src="/Images/middle.png" alt="" />
          <h2 className=''>Pick up an order</h2>
          <p>
            Find order closest to your area<br></br>
            and get a commision for every order
          </p>
          <h4><a href='#'>Create an account</a></h4>
        </div>
        <div className="right">
          <img src="./Images/left.jpeg" alt="" />
          <h2>Get the app</h2>
          <p>Experience the best delivery<br></br>
          services on your mobile
          </p>
          <h4><a href='#'>Get the app</a></h4>
        </div>
    </div>
  )
}

export default Delivery