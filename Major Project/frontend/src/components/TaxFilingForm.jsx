// src/components/TaxFilingForm.js
import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import FileUpload from './FileUpload';
import IncomeSources from './IncomeSources';
import TaxSavings from './TaxSavings';

const TaxFilingForm = () => {
  const [personalDetails, setPersonalDetails] = useState({});
  const [form16, setForm16] = useState(null);
  const [incomeSources, setIncomeSources] = useState({});
  const [taxSavings, setTaxSavings] = useState({});
  const [taxSummary, setTaxSummary] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('personalDetails', JSON.stringify(personalDetails));
    formData.append('form16', form16);
    formData.append('incomeSources', JSON.stringify(incomeSources));
    formData.append('taxSavings', JSON.stringify(taxSavings));

    fetch('http://localhost:5000/api/tax-filing', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((summary) => {
        setTaxSummary(summary);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Tax Filing Form</h2>
      <form onSubmit={handleSubmit}>
        <PersonalDetails setPersonalDetails={setPersonalDetails} />
        <FileUpload setForm16={setForm16} />
        <IncomeSources setIncomeSources={setIncomeSources} />
        <TaxSavings setTaxSavings={setTaxSavings} />
        <button type="submit">Submit</button>
      </form>

      {taxSummary && (
        <div>
          <h3>Tax Summary</h3>
          <p>Gross Income: ₹{taxSummary.grossIncome}</p>
          <p>Taxable Income: ₹{taxSummary.taxableIncome}</p>
          <p>Tax Liability: ₹{taxSummary.taxLiability}</p>
          <p>Total Tax Payable: ₹{taxSummary.totalTaxPayable}</p>
          <p>Taxes Paid: ₹{taxSummary.taxesPaid}</p>
        </div>
      )}
    </div>
  );
};

export default TaxFilingForm;
