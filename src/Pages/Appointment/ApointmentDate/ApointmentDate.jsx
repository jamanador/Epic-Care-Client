import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner/LoadingSpinner";
import ApointmentBooking from "./ApointmentBooking/ApointmentBooking";
import ApointmentDateCard from "./ApointmentDateCard/ApointmentDateCard";

const ApointmentDate = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

const date = format(selectedDate, "PP")
  const { data: apointments = [],refetch,isLoading } = useQuery({
    queryKey: ["apointments",date],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/apointmentOptions?date=${date}`);
      const data = await res.json();
      const result = data.data
      return result;
    },
  });

  if(isLoading){
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <div className="container mx-auto my-20">
      <p className="text-center lg:text-xl text-lg font-medium text-primary">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-12 mt-11 mx-6">
        {apointments?.map((apointment) => (
          <ApointmentDateCard
            apointment={apointment}
            key={apointment._id}
            setTreatment={setTreatment}
          ></ApointmentDateCard>
        ))}
      </div>
      {treatment && (
        <ApointmentBooking
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          refetch={refetch}
        ></ApointmentBooking>
      )}
    </div>
  );
};

export default ApointmentDate;
