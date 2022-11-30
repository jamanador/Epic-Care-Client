import React from "react";

const ApointmentDateCard = ({ apointment, setTreatment }) => {
  const { name, price, slots } = apointment;
  return (
    <div className={`card shadow-md`}>
      <div className="flex justify-center items-center p-8">
        <div className="text-center">
          <h2 className="card-title font-bold text-primary">{name}</h2>
          <p className="py-2">
            {slots.length > 0 ? slots[0] : "try another day"}
          </p>
          <p className="pt-1 pb-1">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          <p className="pt-1 pb-1">
            <small>Price : ${price}</small>
          </p>
          {/* <PrimaryButton>Book Now</PrimaryButton> */}
          {slots.length ? (
            <label
              onClick={() => setTreatment(apointment)}
              htmlFor="my-modal-3"
              disabled
              className={
                slots.length === 0
                  ? `bg-gray-700 rounded-lg py-2 px-6 text-sm text-white`
                  : `bg-gradient-to-tr from-primary to-secondary   rounded-lg py-2 px-6 text-sm text-white`
              }
            >
              Book Apointment
            </label>
          ) : (
            "Please tommorow Again Try"
          )}
        </div>
      </div>
    </div>
  );
};

export default ApointmentDateCard;
