import React from "react";
import chair from '../../../assets/images/chair.png';
import PrimaryButton from "../../../Components/Shared/PrimaryButton/PrimaryButton";
import './Banner.css';
const Banner = () => {
  return (
    <div className="container mx-auto banner md:flex md:justify-around items-center md:py-28 py-20 px-6">
      <div className="text-content">
        <h3 className="text-accent font-bold lg:text-3xl md:text-2xl text-1xl">Your New Smile Starts Here</h3>
        <p className="py-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    <img src={chair} alt=""  className="w-6/12 h-80 rounded-sm shadow-sm md:block hidden"/>
      <div>

      </div>
    </div>
  );
};

export default Banner;
