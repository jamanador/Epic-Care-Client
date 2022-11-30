import React from "react";

const TestiCard = ({ testimonial }) => {
  return (
    <div className={`card flex-col shadow-md card-side rounded-lg p-4`}>
      <p>{testimonial?.riview}</p>
      <div className="flex  items-center p-8">
      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
            <img
              src={testimonial?.img}
              alt=""
              className=" w-12 rounded text-white h-12"
            />
          </div>
        {/* <div>
          <img
            src={testimonial?.img}
            alt=""
            className=" w-12 rounded text-white h-12 mr-4"
          />
        </div> */}
        <div className="">
          <h2 className="card-title">{testimonial?.name}</h2>
          <p>{testimonial?.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestiCard;
