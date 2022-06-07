import React from 'react';
import './Banner.css';
import banner from '../../../../images/banner.jpg';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <h1 className='heading1'>BUILD YOUR</h1>
                <h1 className='heading2'>SMILE CONFIDENCE</h1>
                <h4>EXPERIENCE COMPREHENSIVE DENTAL CARE IN COMPLETE COMFORT.</h4>
                <p>Have all of your dental needs taken care of by experienced and trusted dentist <span>Dr. Israt</span> in Dhaka.</p>
            </div>
        </div>
    );
};

export default Banner;