import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Components/Shared/ConfirmationModal/ConfirmationModal";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner/LoadingSpinner";

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
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

  const handleDelete = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.deletedCount > 0) {
          refetch();
          toast.success(`${doctor.name} Deleted Successfully`);
        }
      });
  };

  return (
    <div className="px-12">
      <h3 className="font-bold py-6">Manage Doctors {doctors?.length}</h3>
      <table className="table w-full bg-base-100">
        <thead>
          <tr>
            <th></th>
            <th>Profile</th>
            <th>Name</th>
            <th>specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors?.map((doctor, index) => (
            <tr key={doctor._id}>
              <th>{index + 1}</th>
              <td>
                <h5 className="font-bold">
                  <div className="avatar">
                    <div className="w-12 mask mask-hexagon shadow-sm">
                      <img src={doctor?.image} alt="/" />
                    </div>
                  </div>
                </h5>
              </td>
              <td>
                <h3 className="font-bold text-md">{doctor?.name}</h3>{" "}
                <p className="text-sm">{doctor?.email}</p>
              </td>
              <td>
                <h3 className="font-medium text-md">{doctor?.specialty}</h3>
              </td>

              <td>
                <label
                  onClick={() => setDeletingDoctor(doctor)}
                  htmlFor="confirmation-modal"
                  className=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8  hover:bg-red-500 p-1 hover:text-white font-medium rounded-full text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure want to delete ?`}
          message={`if you want to delete ${deletingDoctor?.name}.it cannot be done!! `}
          closeModal={closeModal}
          successAction={handleDelete}
          modalData={deletingDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctor;
