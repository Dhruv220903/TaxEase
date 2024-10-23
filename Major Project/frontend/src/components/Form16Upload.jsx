// frontend/src/components/Form16Upload.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form16Upload = ({ onSubmit }) => {
  const [form16File, setForm16File] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    onSubmit({ form16File });
    navigate('/personal-info');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Upload Form 16</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="file"
          onChange={(e) => setForm16File(e.target.files[0])}
          className="border rounded w-full p-2"
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

export default Form16Upload;
