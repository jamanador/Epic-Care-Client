import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard/ServiceCard';
const Services = () => {


const serciesData = [

{
    _id:1,
    title:'Fluoride Treatment',
    description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    icon:fluoride,
},
{
    _id:2,
    title:'Cavity Filling',
    description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    icon:cavity,
},
{
    _id:3,
    title:'Teeth Whitening',
    description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    icon:whitening,
},


]


    return (
        <div className='container mx-auto text-center my-10 '>
            <h3 className='text-primary font-bold'>OUR SERVICES</h3>
            <h6 className='text-accent font-medium pt-1'>Services We Provide</h6>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-11 mx-6">
    {
        serciesData.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
    }
  </div>
        </div>
    );
};

export default Services;