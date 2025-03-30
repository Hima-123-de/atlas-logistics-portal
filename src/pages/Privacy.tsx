
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Atlas Global Logistics Inc</title>
        <meta name="description" content="Privacy Policy for Atlas Global Logistics Inc." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-primary dark:bg-gray-900 text-white py-12">
            <div className="section-container">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl">Last updated: 2023</p>
            </div>
          </div>
          
          <div className="section-container my-12">
            <div className="prose max-w-none dark:prose-invert">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">1. Information We Collect</h2>
              <p className="mb-4 dark:text-gray-300">
                Atlas Global Logistics Inc collects information that you provide directly to us, information we collect automatically when you use our services, and information from third parties.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 dark:text-white">2. How We Use Your Information</h2>
              <p className="mb-4 dark:text-gray-300">
                We use the information we collect to provide, maintain, and improve our services, to process and complete transactions, to communicate with you, and for other legitimate business purposes.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 dark:text-white">3. Information Sharing</h2>
              <p className="mb-4 dark:text-gray-300">
                We may share your information with service providers who perform services on our behalf, when required by law, in connection with a merger or sale of our company, and with your consent.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 dark:text-white">4. Data Security</h2>
              <p className="mb-4 dark:text-gray-300">
                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 dark:text-white">5. Your Choices</h2>
              <p className="mb-4 dark:text-gray-300">
                You can access and update certain information about your account from your account settings. You can also opt out of promotional communications by following the instructions in those communications.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 dark:text-white">6. Cookies</h2>
              <p className="mb-4 dark:text-gray-300">
                We use cookies and similar technologies to collect information about your interactions with our website and services, and for other legitimate business purposes.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 dark:text-white">7. Children's Privacy</h2>
              <p className="mb-4 dark:text-gray-300">
                Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 dark:text-white">8. Changes to this Policy</h2>
              <p className="mb-4 dark:text-gray-300">
                We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, provide you with additional notice.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 dark:text-white">9. Contact Us</h2>
              <p className="mb-4 dark:text-gray-300">
                If you have any questions about our privacy policy, please contact us at info@atlasgli.com.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
