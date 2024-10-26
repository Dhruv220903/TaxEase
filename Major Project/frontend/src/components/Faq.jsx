import React, { useState } from 'react';

const faqs = [
  {
    category: "General Tax Questions",
    questions: [
      {
        question: "What is Income Tax?",
        answer: "Income tax is a direct tax that individuals or entities pay on their earnings or income. It is calculated based on the income tax slabs defined by the government for each assessment year."
      },
      {
        question: "What is the difference between the Old and New Tax Regimes?",
        answer: "The Old Tax Regime offers multiple deductions and exemptions, while the New Tax Regime has lower tax rates but limited deductions. You can select the regime that benefits you the most, although some conditions apply for regime changes."
      },
      {
        question: "What is Form 16, and why is it important?",
        answer: "Form 16 is a certificate issued by employers to employees, showing the tax deducted at source (TDS) on salary income. It serves as proof of tax paid and helps in filing your income tax return (ITR)."
      },
    ]
  },
  {
    category: "Income Sources and Taxable Income",
    questions: [
      {
        question: "What types of income are taxable?",
        answer: "Taxable income includes salary, interest from savings and fixed deposits, capital gains, business or professional income, rental income, and other specified incomes."
      },
      {
        question: "How do I report income from multiple sources?",
        answer: "You should report all sources of income under relevant categories in your income tax return. Our platform helps you report different income sources like salary, interest income, and capital gains."
      }
    ]
  },
];

const TaxFAQ = () => {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
  const toggleExpand = (index) => setExpanded(expanded === index ? null : index);

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter((q) => 
      q.question.toLowerCase().includes(search) || 
      q.answer.toLowerCase().includes(search)
    )
  })).filter((category) => category.questions.length > 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Tax FAQ</h1>
      
      <input 
        type="text" 
        placeholder="Search FAQs..." 
        value={search} 
        onChange={handleSearch} 
        className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {filteredFaqs.map((category, catIdx) => (
        <div key={catIdx} className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">{category.category}</h2>
          
          {category.questions.map((q, qIdx) => (
            <div 
              key={qIdx} 
              className={`border p-4 rounded mb-4 cursor-pointer transition-all duration-200 ${
                expanded === `${catIdx}-${qIdx}` ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <div 
                className="font-bold text-gray-800" 
                onClick={() => toggleExpand(`${catIdx}-${qIdx}`)}
              >
                {q.question}
              </div>
              
              {expanded === `${catIdx}-${qIdx}` && (
                <div className="mt-2 text-gray-600 text-sm">{q.answer}</div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TaxFAQ;
