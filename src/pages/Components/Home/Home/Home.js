import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Schedule from '../Schedule/Schedule';
import Footer from '../../../SharedComponents/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Schedule></Schedule>
            <Footer></Footer>
        </div>
    );
};

export default Home;