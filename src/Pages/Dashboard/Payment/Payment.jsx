import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner/LoadingSpinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_CLIENT_SECRET);

const Payment = () => {
  const bookings = useLoaderData().data;
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const { treatment, phone, email, patient, appointmentDate } = bookings;

  return (
    <div className="px-12">
      <h3 className="font-bold py-3">Payement for your service</h3>
      <div className="text-white card w-96  bg-gray-900">
        <div className="card-body">
          <h2 className="card-title">Service : {treatment}</h2>
          <p className="font-bold">Patient: {patient}</p>
          <p>Date : {appointmentDate}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm bookings={bookings}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
