import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner/LoadingSpinner";
import { authContext } from "../../../Context/AuthProvider";
import "./Dashboard.css";
const Dashboard = () => {
  const { user } = useContext(authContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const {
    data: bookings = [],
    isLoading,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      const result = data.data;
      return result;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mx-auto">
      <h3 className="text-center font-bold py-6">My Apointments</h3>
      <div className="px-12 ">
        <table className="table w-full bg-base-100">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <h6 className="font-bold text-sm">{booking?.patient}</h6>
                </td>
                <td>
                  <small>{booking?.treatment}</small>
                </td>
                <td>
                  <small>{booking?.appointmentDate}</small>
                </td>
                <td>
                  <small>{booking?.slot}</small>
                </td>
                <td>
                  <small>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="py-1 px-3 bg-accent text-white">
                          Pay
                        </button>
                      </Link>
                    )}

                    {booking.price && booking.paid && (
                      <span className="text-green-500 font-medium">Paid</span>
                    )}
                  </small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
