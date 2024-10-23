// frontend/src/components/RegisterClient.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterClient = ({ onSubmit }) => {
  const [clientName, setClientName] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    onSubmit({ clientName });
    navigate('/form16-upload');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Register Client</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="block mb-2">Client Name</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="border rounded w-full p-2"
          placeholder="Enter client name"
        />
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default RegisterClient;
