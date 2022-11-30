import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className={`card shadow-sm card-side border text-center`}>
      <div className="flex justify-center items-center p-8">
        <div className="">
          <img
            src={service?.icon}
            alt=""
            className=" w-12 rounded text-white h-12"
          />
          <h2 className="card-title py-3">{service?.title}</h2>
          <p>{service?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
