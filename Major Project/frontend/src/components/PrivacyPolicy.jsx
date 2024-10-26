import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information Collection</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We collect various types of information to improve our services. This may include information such as your name, contact details, and usage data.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Personal Information:</strong> This includes information that you provide directly to us when you register or fill out forms on our site.</li>
          <li><strong>Usage Data:</strong> We collect information about how you access and interact with our site to improve user experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Information Use</h2>
        <p className="text-gray-700 leading-relaxed">
          The information we collect is used to provide and improve our services, communicate with you, and personalize your experience. We do not share your information with third parties, except as necessary for our service delivery or as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We implement appropriate security measures to protect your data from unauthorized access or disclosure. However, no internet transmission or electronic storage method is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Changes to this Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date. Please review this page regularly to stay informed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
