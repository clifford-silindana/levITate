import React from 'react';
import { Link } from 'react-router-dom';
import closeicon from "../assets/icons/close.png";

const EditForm = ({ displayForm, closeForm, selectedTicketId }) => {
  return (
    <div className={`${displayForm} fixed inset-0 flex items-center justify-center z-50`}>
      {/* Background overlay with opacity */}
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
      
      {/* Form container */}
      <div className="w-1/2 bg-gray-900 rounded-lg p-6 relative z-50">
        <div className="flex justify-end">
          <Link to="#" onClick={closeForm} className="m-4">
            <img className="w-5" src={closeicon} alt="Close Icon" />
          </Link>
        </div>
        <div className="mb-4">
          <h1 className="block text-sm mb-5 text-white">{`Ticket Number: ${selectedTicketId}`}</h1>
          <input type="text" className="w-full border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
