
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Atlas Global Logistics Inc</title>
        <meta name="description" content="Terms of Service for Atlas Global Logistics Inc." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-primary text-white py-12">
            <div className="section-container">
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-xl">Last updated: 2023</p>
            </div>
          </div>
          
          <div className="section-container my-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using the services provided by Atlas Global Logistics Inc, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily use the materials on Atlas Global Logistics Inc's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="mb-4">
                The materials on Atlas Global Logistics Inc's website are provided on an 'as is' basis. Atlas Global Logistics Inc makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="mb-4">
                In no event shall Atlas Global Logistics Inc or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Atlas Global Logistics Inc's website.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">5. Revisions and Errata</h2>
              <p className="mb-4">
                The materials appearing on Atlas Global Logistics Inc's website could include technical, typographical, or photographic errors. Atlas Global Logistics Inc does not warrant that any of the materials on its website are accurate, complete or current.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">6. Links</h2>
              <p className="mb-4">
                Atlas Global Logistics Inc has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Atlas Global Logistics Inc of the site.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">7. Site Terms of Use Modifications</h2>
              <p className="mb-4">
                Atlas Global Logistics Inc may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
              <p className="mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at info@atlasgli.com.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms;
