import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/Shared/PrimaryButton/PrimaryButton";
const ExtraFeature = () => {
  return (
    <div className="max-w-[1000px] mx-auto md:flex md:justify-between items-center md:py-28 py-20 px-6">
      <img
        src={treatment}
        alt=""
        className="md:w-11/12 w-full h-96 rounded-md shadow-sm"
      />

      <div className="text-content md:ml-12  mt-6">
        <h3 className="text-accent font-bold lg:text-3xl md:text-2xl text-1xl">
          Exceptional Dental Care, on Your Terms
        </h3>
        <p className="py-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>View Details</PrimaryButton>
      </div>
      <div></div>
    </div>
  );
};

export default ExtraFeature;
