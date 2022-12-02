import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import SmallSpinner from "../../../Components/Shared/LoadingSpinner/SmallSpinner";
const CheckoutForm = ({ bookings }) => {
  const { price, phone, email, patient, _id } = bookings;

  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transcationId, setTranscationId] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${process.env.REACT_APP_SERVER_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setLoading(true);
    setSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transcationId: paymentIntent.id,
        email,
        phone,
        bookingId: _id,
      };
      fetch(`${process.env.REACT_APP_SERVER_URL}/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess("Congress!! Your Payment Completed");
            setTranscationId(paymentIntent.id);
          }
        });
    }
    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-8 border my-2 bg-white text-black"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="mt-6 rounded-md py-1 px-6 bg-black text-white font-medium"
          disabled={!stripe}
        >
          {loading ? <SmallSpinner></SmallSpinner> : "Confirm Now"}
        </button>
      </form>
      <p className="py-3 font-medium text-red-500">{cardError}</p>
      {success && (
        <>
          <p className="text-green-400 font-bold py-2">{success}</p>{" "}
          <small className="text-primary font-bold py-2">
            Transcation Id : {transcationId}
          </small>
        </>
      )}
    </>
  );
};

export default CheckoutForm;
