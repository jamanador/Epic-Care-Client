import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import Card from "./Card/Card";
const OurDetail = () => {
  const detialData = [
    {
      _id: 1,
      title: "Opening Hours",
      des: "Open 9am-5pm",
      icon: clock,
      bgClass:'bg-primary'
    },
    {
      _id: 2,
      title: "Visit our location",
      des: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgClass:'bg-accent'

    },
    {
      _id: 3,
      title: "Contact us now",
      des: "+000 123 456789",
      icon: phone,
      bgClass:'bg-primary'
    },
  ];

  return <div className="container mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 my-20 mx-6">
    {
        detialData.map(detail => <Card detail={detail} key={detail._id}></Card>)
    }
  </div>
  </div>;
};

export default OurDetail;
