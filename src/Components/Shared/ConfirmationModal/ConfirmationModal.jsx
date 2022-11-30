import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  modalData,
  successAction,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="confirmation-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title} </h3>
          <p className="py-2 text-red-500 text-sm">{message}</p>
          <div className="flex flex-wrap">
            <button
              onClick={closeModal}
              className="px-2 py-1 text-sm text-white bg-accent mr-4"
            >
              Cancel
            </button>
            {/* <button
              onClick={() => successAction(modalData)}
              className="px-2 text-sm py-1 text-white bg-red-500"
            >
              Confirm Delete
            </button> */}
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirmation-modal"
              className="px-2 text-sm py-1 text-white bg-red-500"
            >
              Confirm Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
