import React from 'react';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import Banner from './Banner/Banner';
import ExtraFeature from './ExtraFeature/ExtraFeature';
import OurDetail from './OurDetail/OurDetail';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
       <Banner></Banner>
       <OurDetail></OurDetail>
       <Services></Services>
       <ExtraFeature></ExtraFeature>
       <AppointmentSection></AppointmentSection>
       <Testimonial></Testimonial>
        </div>
    );
};

export default Home;