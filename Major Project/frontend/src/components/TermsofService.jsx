import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you agree to comply with and be bound by these Terms of Service.
          If you do not agree with these terms, you are prohibited from using or accessing this site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials on this website for personal,
          non-commercial transitory viewing only. This is a license grant, not a transfer of title, and under this
          license you may not:
        </p>
        <ul className="list-disc pl-5">
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose, or for any public display;</li>
          <li>Attempt to decompile or reverse engineer any software contained on this website;</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>
          This license shall automatically terminate if you violate any of these restrictions and may be terminated
          by us at any time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Disclaimer</h2>
        <p>
          The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied,
          and hereby disclaim all other warranties including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other
          violation of rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Limitations</h2>
        <p>
          In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for
          loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials
          on this website, even if we have been notified orally or in writing of the possibility of such damage.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Accuracy of Materials</h2>
        <p>
          The materials appearing on this website could include technical, typographical, or photographic errors.
          We do not warrant that any of the materials on this website are accurate, complete, or current.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Links</h2>
        <p>
          We have not reviewed all of the sites linked to this website and are not responsible for the contents of
          any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any
          such linked website is at the user's own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Modifications</h2>
        <p>
          We may revise these Terms of Service for this website at any time without notice. By using this website
          you are agreeing to be bound by the then current version of these Terms of Service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of [Your Location]
          and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </section>

      <p className="text-center mt-8">Last updated: [Date]</p>
    </div>
  );
};

export default TermsOfService;
