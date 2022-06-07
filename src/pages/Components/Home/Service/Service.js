import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    return (
        <div className='single-service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: $ <span>{price}</span></p>
            <p><small>{description}</small></p>
            <Link to='/checkout'><button>Proceed to Checkout</button></Link>
        </div>
    );
};

export default Service;