import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../Components/Shared/PrimaryButton/PrimaryButton";
import "./ApppointmentSection.css";


const AppointmentSection = () => {
  return (
   <div className="appointment mt-10 mb-20">
    <div className="max-w-[1100px] mx-auto">
    <div className=" md:flex md:justify-between items-center px-6">
      <img
        src={doctor}
        alt=""
        className="md:w-11/12 w-full h-96 -mt-16 rounded-md shadow-sm"
      />
    

      <div className="text-content md:ml-12 lg:py-0 py-12 text-white">
        <span className="text-primary font-bold py-4 mt-12">Appointment</span>
        <h3 className=" font-bold text-white lg:text-3xl md:text-2xl text-1xl">
          Make an appointment Today
        </h3>
        <p className="py-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Book Now</PrimaryButton>
      </div>
      <div></div>
    </div>
    </div>
   </div>
  );
};

export default AppointmentSection;
