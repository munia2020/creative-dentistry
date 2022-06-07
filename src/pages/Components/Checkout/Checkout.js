import React from 'react';
import './Checkout.css';


const Checkout = () => {
    return (
        <div className='checkout-container'>
            <h1>STOP HIDING YOUR SMILE</h1>
            <p>Don't miss out on laughing and smiling with total confidence.</p>
            <br />
            <div className='check-boxes'> 
                <p>Name</p>
                <input type="text" name="name" id="name" placeholder='Your name' />
            </div>
            <div className='check-boxes'> 
                <p>Address</p>
                <input type="text" name="address" id="address" placeholder='Your Address' />
            </div>
            <div className='check-boxes'> 
                <p>Billing Address</p>
                <input type="number" name="billing" id="billing" placeholder='Billing Address' />
            </div>
            <button>submit</button>
        </div>
    );
};

export default Checkout;