import React from 'react';
import Chatbot from './Chatbot'
const about = {
    
  Team: {
    FileTax: {
      name: 'File Taxes',
      info: 'Very Easy To File Taxes',
      
    },
    CTO: {
      name: 'Calculate Taxes',
      info: 'Highly advanced tax calculator to calculate taxes',
     
    },
    ChatBot: {
      name: 'Chatbot',
      info: 'Our Very Advance chatbot makes it very easy to gain knowledge about taxes',
      
    },
    TaxAlerts: {
      name: 'Tax Alerts',
      info: 'Receive information about changes in the taxation system',
    
    },
  },
};
const Home = () => {
  return (
    <div>
      <div className="w-full overflow-hidden" style={{marginTop:'0'}}>
        <img 
          src="/assets/taxes.jpg" 
          alt="Tax Services" 
          className="object-contain block  m-0 p-0" // Added m-0 and p-0
        />
      </div>
    
      <div className="bg-gray-50 text-center text-3xl font-semibold text-gray-800 p-12 shadow-">
        <h1 className="mb-4">
          India’s Largest Tax and Financial Services Platform
        </h1>
        <h2 className="text-xl text-gray-600 mb-6">
          Explore our wide range of software solutions
        </h2>
        <h3 className="text-lg text-gray-500">
          Discover how we can simplify your tax filing and financial management.
        </h3>
      </div>
      
      <div className="mt-16 flex-col items-center mb-10" >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-10" >
          {Object.values(about.Team).map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center shadow-md rounded-lg p-4 hover:shadow-lg bg-gray-100"
            >
              <img
                src="./assets/logo.jpg" // Replace with team member profile photo path (optional)
                alt={`${member.name} Profile`}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                {member.name}
              </h3>
             
              <p className="text-gray-600 text-sm">{member.info}</p>
            </div>
          ))}
        </div>
      </div>
      
      
      <Chatbot/>
    </div>
  );
}

export default Home;
