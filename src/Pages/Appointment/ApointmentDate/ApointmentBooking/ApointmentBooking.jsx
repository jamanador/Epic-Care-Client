import { format } from "date-fns";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import SmallSpinner from "../../../../Components/Shared/LoadingSpinner/SmallSpinner";
import { authContext } from "../../../../Context/AuthProvider";

const ApointmentBooking = ({
  treatment,
  setTreatment,
  selectedDate,
  refetch,
}) => {
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const fullname = form.fullname.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: fullname,
      slot,
      phone,
      email,
      price,
    };
    setLoading(true);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          refetch();
          setTreatment(null);
          setLoading(false);
        } else {
          toast.error(data.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold pb-2">{treatmentName}</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              name="date"
              value={date}
              disabled
              className="input border border-gray-300 w-full my-2"
            />
            <select name="slot" className="select select-bordered  w-full">
              {slots?.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="fullname"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Full Name"
              className="input border border-gray-300 w-full my-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input border border-gray-300 w-full my-2"
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              disabled
              className="input border border-gray-300 w-full my-2"
            />
            {/* {loading ? (
              <SmallSpinner></SmallSpinner>
            ) : (
              <input
                type="submit"
                value="Submit"
                className="bg-accent text-white px-6 py-2 w-full mt-4"
              />
            )} */}
            {user ? (
              <button
                type="submit"
                className="bg-accent text-white px-6 py-2 w-full mt-4"
              >
                {loading ? <SmallSpinner></SmallSpinner> : "Submit"}
              </button>
            ) : (
              <button className="btn px-6 py-2 w-full mt-4 " disabled>
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ApointmentBooking;
