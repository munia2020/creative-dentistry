import React from 'react';
import './Schedule.css';

const Schedule = () => {
    return (
        <div className='schedule-container'>
            <div className='schedule-text'>
                <h2>YOU ARE MY PRIORITY</h2>
                <p>Step into an office where your concerns are my concerns.</p>
                <h2>SCHEDULE AN APPOINTMENT</h2>
                <p>Discover the beauty in your smile!</p>
                <button><small>ONLINE SCHEDULING</small></button>
            </div>
            <div className='img-container'>
                <img className='schedule-img' src="https://images.unsplash.com/photo-1573294705900-9623cfc746b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            </div>
        </div>
    );
};

export default Schedule;