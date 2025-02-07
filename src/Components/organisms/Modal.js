import React from "react";

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  submitButtonText = "Submit",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold">{title}</h2>
        {children}
        <div className="flex justify-end space-x-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-red-300 text-red-800 rounded hover:bg-red-400"
          >
            {submitButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
