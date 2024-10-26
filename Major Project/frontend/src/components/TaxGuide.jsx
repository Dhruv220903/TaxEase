import React from 'react';

const TaxGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Tax Guide</h1>
      <p className="mb-6">
        Welcome to our comprehensive Tax Guide! Here, we’ll walk you through the basics of taxation, explain key tax-saving opportunities,
        and provide tips for filing your taxes accurately and efficiently.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Understanding Income Tax</h2>
        <p className="mb-4">
          Income tax is a direct tax imposed on the income earned by individuals, businesses, and other entities. This tax is collected by
          the government and is used to fund various public services. Generally, income tax is divided into categories:
        </p>
        <ul className="list-disc pl-5">
          <li>Salaries and wages</li>
          <li>Business and professional income</li>
          <li>Capital gains</li>
          <li>Income from house property</li>
          <li>Other sources, like interest and dividends</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Tax Regimes: Old vs. New</h2>
        <p className="mb-4">
          The government offers two tax regimes: the Old Regime and the New Regime. Each has different rates and available deductions.
          Selecting the right regime can help optimize your tax liability.
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Old Regime</strong>: Offers various deductions and exemptions.</li>
          <li><strong>New Regime</strong>: Lower tax rates but fewer deductions. Ideal if you have minimal deductions.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Key Tax Deductions</h2>
        <p className="mb-4">
          Deductions can help reduce your taxable income. Here are some popular tax-saving sections you should know:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Section 80C</strong>: Investments in ELSS, PPF, etc. (up to ₹1.5 lakh).</li>
          <li><strong>Section 80D</strong>: Deductions on health insurance premiums.</li>
          <li><strong>Section 24</strong>: Home loan interest deduction (up to ₹2 lakh).</li>
          <li><strong>Section 80E</strong>: Deduction on interest for education loans.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Filing Your Tax Return</h2>
        <p className="mb-4">
          Filing a tax return is essential to report your income and tax payments to the government. Here’s a quick guide to filing:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Step 1</strong>: Gather all documents (Form 16, income proof, investment proofs).</li>
          <li><strong>Step 2</strong>: Choose your assessment year (typically the previous fiscal year).</li>
          <li><strong>Step 3</strong>: Choose the correct ITR form (e.g., ITR-1 for salaried individuals).</li>
          <li><strong>Step 4</strong>: Fill in the form details and verify with documents.</li>
          <li><strong>Step 5</strong>: Submit and verify the return online using your Aadhaar, net banking, or other methods.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Common Tax Mistakes to Avoid</h2>
        <p className="mb-4">
          Avoiding these common mistakes can help ensure an accurate tax return:
        </p>
        <ul className="list-disc pl-5">
          <li>Not reporting all sources of income.</li>
          <li>Choosing the wrong tax regime without evaluating your deductions.</li>
          <li>Skipping deductions and exemptions that you’re eligible for.</li>
          <li>Missing the filing deadline, which can result in penalties.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Tax Payment and Refunds</h2>
        <p className="mb-4">
          If you owe additional taxes, you can make payments online. Similarly, if you’re eligible for a refund due to overpayment,
          it will be credited to your registered bank account.
        </p>
        <p className="mb-4">
          Make sure to double-check your bank details to avoid any delay in receiving refunds.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Important Dates</h2>
        <p className="mb-4">
          Keep track of these important dates to ensure timely filing:
        </p>
        <ul className="list-disc pl-5">
          <li>July 31st: Last date for individuals to file returns (unless extended).</li>
          <li>March 31st: Last date to file a belated or revised return for the previous year.</li>
        </ul>
      </section>

      <p className="text-center mt-8 text-sm">
        This Tax Guide provides general information only and is not a substitute for professional tax advice.
      </p>
    </div>
  );
};

export default TaxGuide;
