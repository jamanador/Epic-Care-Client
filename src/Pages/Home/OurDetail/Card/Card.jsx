import React from "react";

const Card = ({ detail }) => {
  return (
    <div className={`card shadow-lg text-white card-side ${detail.bgClass}`}>
      <div className="flex justify-between items-center p-8">
      <img src={detail.icon} alt="" className="mr-5 w-10 rounded text-white h-10" />
        <div className="">
          <h2 className="card-title">{detail.title}</h2>
          <p>{detail?.des}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
