import React from 'react';

const about = {
  Topic1: {
    Heading: 'About Us',
    Text: 'Welcome to Virtual Ca, your trusted partner in navigating the complexities of the tax world. We are dedicated to providing reliable, accurate, and efficient tax services to individuals, businesses, and organizations. Our mission is to simplify the tax process, maximize your financial benefits, and ensure full compliance with the latest tax laws and regulations.',
  },
  Topic2: {
    Heading: 'Our Story',
    Text: 'Founded by a team of experienced tax professionals, [Your Tax Website Name] was born out of a passion for helping people understand and manage their taxes more effectively. We understand that tax-related matters can be overwhelming, which is why we are here to provide personalized guidance and support at every step of the way.',
  },
  Team: {
    CEO: {
      name: 'Dhruv Akte',
      info: 'Extremely smart and talented individual',
      pos: 'CEO',
    },
    CTO: {
      name: 'Prakhar Panchal',
      info: 'Extremely smart and talented individual',
      pos: 'CTO',
    },
    CFO: {
      name: 'Mohit Parihar',
      info: 'Extremely smart and talented individual',
      pos: 'CFO',
    },
    CMO: {
      name: 'Sourabh Patil',
      info: 'Extremely smart and talented individual',
      pos: 'CMO',
    },
  },
};

const Aboutus = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between bg-gray-100 rounded-lg shadow-md p-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {about.Topic1.Heading}
          </h1>
          <p className="text-lg leading-loose text-gray-600">
            {about.Topic1.Text}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap justify-center items-center mt-8 md:mt-0">
          <img
            src="./assets/logo.webp" // Replace with your logo path
            alt="TaxEase"
            className="w-48 h-48 rounded-full object-cover mx-auto"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 ">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.values(about.Team).map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center shadow-md rounded-lg p-4 hover:shadow-lg bg-slate-100"
            >
              <img
                src="./assets/logo.jpg" // Replace with team member profile photo path (optional)
                alt={`${member.name} Profile`}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                {member.name}
              </h3>
              <p className="text-gray-600 text-base">{member.pos}</p>
              <p className="text-gray-600 text-sm">{member.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus