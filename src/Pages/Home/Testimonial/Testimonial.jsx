import React from "react";
import quote from "../../../assets/icons/quote.svg";
import testi1 from '../../../assets/images/people1.png';
import testi2 from '../../../assets/images/people2.png';
import testi3 from '../../../assets/images/people3.png';
import TestiCard from "./TestiCard/TestiCard";


const Testimonial = () => {

const testimonialData = [
    {
        _id:1,
        name:'Winson Herry',
        location:'Cailfornia',
        riview:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: testi1
    },
    { 
        _id:2,
        name:'Matt Sony',
        location:'Usa',
        riview:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: testi2
    },
    {
        _id:3,
        name:'David Jr',
        location:'Cailfornia',
        riview:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: testi3
    },
]



  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center px-8 md:px-18">
        <div>
          <h6 className="text-primary font-bold">Testimonial</h6>
          <h3 className="text-accent font-medium">What Our Patients Says</h3>
        </div>
        <div className="">
          <img src={quote} alt="" className="md:w-28 md:h-28 w-14 -14" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-11 mx-6">
{
    testimonialData.map(testimonial =><TestiCard key={testimonial._id} testimonial={testimonial}></TestiCard>)
}
      </div>
    </div>
  );
};

export default Testimonial;
