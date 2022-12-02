import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner/LoadingSpinner";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/apointmentSpecialty`);
      const data = await res.json();
      const result = data.data;
      return result;
    },
  });
  const navigate = useNavigate();
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // console.log(image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_HOST_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          //   console.log(imageData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imageData.data.url,
          };
          // save information to database
          fetch(`${process.env.REACT_APP_SERVER_URL}/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
            //   console.log(result);
              if (result.acknowledged > 0) {
                toast.success(`${data.name} is added successfully`);
                navigate("/dashboard/managedoctors");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="px-12">
      <h3 className="font-bold py-6">All a New Doctor</h3>
      <div className=" w-full max-w-md p-8 space-y-3 rounded-xl shadow-md bg-white">
        <form
          onSubmit={handleSubmit(handleAddDoctor)}
          className="space-y-2 ng-untouched ng-pristine ng-valid"
        >
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: "name is required" })}
            className="w-full px-4 py-2 rounded-md border-gray-200 border bg-white  text-gray-800 "
          />
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 rounded-md border-gray-200 border bg-white  text-gray-800 "
          />
          {errors.email && (
            <span className="text-red-600 font-medium pt-2">
              {errors.email?.message}
            </span>
          )}
          <label htmlFor="email" className="block text-gray-600">
            Specialty
          </label>
          <select
            {...register("specialty")}
            required
            className="select select-ghost w-full px-4 py-2 rounded-md bg-white border-gray-200 border  text-gray-800"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty?.name}>
                {specialty?.name}
              </option>
            ))}
          </select>

          <label htmlFor="name" className="block text-gray-600">
            Photo
          </label>
          <input
            type="file"
            placeholder="name"
            accept="image/*"
            {...register("image", { required: "photo is required" })}
            className="text-center w-full px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="submit"
            value="Add"
            className="block w-full p-3 text-center rounded-sm text-white bg-accent"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
