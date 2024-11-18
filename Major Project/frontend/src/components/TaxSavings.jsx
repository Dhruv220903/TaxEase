// src/components/TaxSavings.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaxSavings = () => {
    // State for various inputs
    const [deduction80C, setDeduction80C] = useState('');
    const [disabledDependent, setDisabledDependent] = useState(false);
    const [disabilityNature, setDisabilityNature] = useState('');
    const [dependentType, setDependentType] = useState('');
    const [panOfDependent, setPanOfDependent] = useState('');
    const [aadhaarOfDependent, setAadhaarOfDependent] = useState('');
    const [form10IADetails, setForm10IADetails] = useState('');
    const [form10IAFilingDate, setForm10IAFilingDate] = useState('');
    const [form10IAAckNo, setForm10IAAckNo] = useState('');
    const [udidNo, setUdidNo] = useState('');
    const [insuranceSelf, setInsuranceSelf] = useState('');
    const [insuranceParents, setInsuranceParents] = useState('');
    const [donation, setDonation] = useState('');
    const [cashContribution, setCashContribution] = useState('');
    const [nonCashContribution, setNonCashContribution] = useState('');
    const [contributionDate, setContributionDate] = useState('');
    const [transactionRefNo, setTransactionRefNo] = useState('');
    const [ifscCode, setIfscCode] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const taxSavingsData = {
            deduction80C,
            disabledDependent,
            disabilityNature,
            dependentType,
            panOfDependent,
            aadhaarOfDependent,
            form10IADetails,
            form10IAFilingDate,
            form10IAAckNo,
            udidNo,
            insuranceSelf,
            insuranceParents,
            donation,
            cashContribution,
            nonCashContribution,
            contributionDate,
            transactionRefNo,
            ifscCode,
        };

        // Perform further processing with taxSavingsData
        console.log(taxSavingsData);

        // Send data to the backend or navigate
        navigate('/tax-summary', { state: { taxSavingsData } });
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Tax Savings Deductions</h2>
            <form onSubmit={handleSubmit}>
                {/* 80C Deductions */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        80C (PPF, Insurance, ELSS etc.)
                    </label>
                    <input
                        type="text"
                        value={deduction80C}
                        onChange={(e) => setDeduction80C(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Enter Deduction Amount"
                    />
                </div>

                {/* Disabled Dependent */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Declare if you have a disabled dependent.
                    </label>
                    <input
                        type="checkbox"
                        checked={disabledDependent}
                        onChange={(e) => setDisabledDependent(e.target.checked)}
                    />
                </div>

                {disabledDependent && (
                    <>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Disability Nature*
                            </label>
                            <input
                                type="text"
                                value={disabilityNature}
                                onChange={(e) => setDisabilityNature(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                                placeholder="Enter Disability Nature"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Dependent Type*
                            </label>
                            <input
                                type="text"
                                value={dependentType}
                                onChange={(e) => setDependentType(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                                placeholder="Enter Dependent Type"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                PAN of Dependent
                            </label>
                            <input
                                type="text"
                                value={panOfDependent}
                                onChange={(e) => setPanOfDependent(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                                placeholder="Enter PAN"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Aadhaar of Dependent
                            </label>
                            <input
                                type="text"
                                value={aadhaarOfDependent}
                                onChange={(e) => setAadhaarOfDependent(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                                placeholder="Enter Aadhaar"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Form 10IA details
                            </label>
                            <input
                                type="text"
                                value={form10IADetails}
                                onChange={(e) => setForm10IADetails(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                                placeholder="Enter Form 10IA details"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Form 10IA Filing Date
                            </label>
                            <input
                                type="date"
                                value={form10IAFilingDate}
                                onChange={(e) => setForm10IAFilingDate(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Form 10IA Ack no.
                            </label>
                            <input
                                type="text"
                                value={form10IAAckNo}
                                onChange={(e) => setForm10IAAckNo(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                                placeholder="Enter Form 10IA Ack no."
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                UDID No. (if available)
                            </label>
                            <input
                                type="text"
                                value={udidNo}
                                onChange={(e) => setUdidNo(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                                placeholder="Enter UDID No."
                            />
                        </div>
                    </>
                )}

                {/* 80D - Medical Insurance */}
                <h3 className="text-lg font-bold mb-2">80D - Medical Insurance</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Insurance Deduction limit for Self:
                    </label>
                    <input
                        type="text"
                        value={insuranceSelf}
                        onChange={(e) => setInsuranceSelf(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Enter Insurance Deduction for Self"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Insurance Deduction limit for Parents:
                    </label>
                    <input
                        type="text"
                        value={insuranceParents}
                        onChange={(e) => setInsuranceParents(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Enter Insurance Deduction for Parents"
                    />
                </div>

                {/* Political Party Contribution */}
                <h3 className="text-lg font-bold mb-2">Add Contribution to Political Party (80GGC)</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Donation
                    </label>
                    <input
                        type="text"
                        value={donation}
                        onChange={(e) => setDonation(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Enter Donation Amount"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Contribution amount paid via cash
                    </label>
                    <input
                        type="text"
                        value={cashContribution}
                        onChange={(e) => setCashContribution(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Enter Cash Contribution"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Non-Cash Contribution
                    </label>
                    <input
                        type="text"
                        value={nonCashContribution}
                        onChange={(e) => setNonCashContribution(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Enter Non-Cash Contribution"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Contribution Date
                    </label>
                    <input
                        type="date"
                        value={contributionDate}
                        onChange={(e) => setContributionDate(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Transaction Reference No.
                    </label>
                    <input
                        type="text"
                        value={transactionRefNo}
                        onChange={(e) => setTransactionRefNo(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Enter Transaction Ref No."
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        IFSC Code
                    </label>
                    <input
                        type="text"
                        value={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Enter IFSC Code"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TaxSavings;
