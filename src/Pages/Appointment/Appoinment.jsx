import React, { useState } from "react";
import ApointmentBanner from "./ApointmentBanner/ApointmentBanner";
import ApointmentDate from "./ApointmentDate/ApointmentDate";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <ApointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></ApointmentBanner>
      <ApointmentDate selectedDate={selectedDate}></ApointmentDate>
    </div>
  );
};

export default Appoinment;
