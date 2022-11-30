import React from "react";
import { DayPicker } from "react-day-picker";
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
const ApointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div
      className="mt-10 mb-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:max-w-[1100px] sm:w-full mx-auto">
        <div className=" md:flex md:justify-between md:items-center py-12 px-6">
          <div className=" text-center text-black bg-white shadow-xl rounded-lg px-6">
            <DayPicker
              className="w-full"
              mode="single"
              selected={selectedDate}
              onSelect={data =>{
                if(data){
                  setSelectedDate(data)
                }
              }}
            />
          </div>
          <img
            src={chair}
            alt=""
            className="w-6/12 h-80 rounded-sm shadow-sm md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default ApointmentBanner;
