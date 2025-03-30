
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Atlas Global Logistics Inc</title>
        <meta name="description" content="Explore our comprehensive freight brokerage and logistics services at Atlas Global Logistics Inc." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-primary text-white py-12">
            <div className="section-container">
              <h1 className="text-4xl font-bold mb-4">Our Services</h1>
              <p className="text-xl">Comprehensive freight brokerage and logistics solutions</p>
            </div>
          </div>
          
          <div className="section-container">
            <div className="my-12">
              <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Freight Brokerage</h3>
                  <p className="article-text mb-4">
                    Our core service connects shippers with reliable carriers across all modes of transportation, ensuring timely and cost-effective delivery of your goods. With our vast network of vetted carriers, we provide capacity solutions even in the most challenging markets.
                  </p>
                  <ul className="list-disc pl-6 article-text mb-6">
                    <li>Truckload (FTL) services</li>
                    <li>Less-than-truckload (LTL) solutions</li>
                    <li>Specialized freight handling</li>
                    <li>Temperature-controlled shipping</li>
                    <li>Expedited services</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Freight Brokerage" 
                    className="rounded-lg shadow-lg h-64 w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Data Analytics" 
                    className="rounded-lg shadow-lg h-64 w-full object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Data Analytics & Insights</h3>
                  <p className="article-text mb-4">
                    Transform your logistics operations with our advanced analytics solutions. We help you leverage your shipping data to identify trends, optimize routes, reduce costs, and improve service levels.
                  </p>
                  <ul className="list-disc pl-6 article-text mb-6">
                    <li>Performance benchmarking</li>
                    <li>Rate analysis and optimization</li>
                    <li>Carrier performance metrics</li>
                    <li>Custom KPI dashboards</li>
                    <li>Predictive analytics</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Supply Chain Consulting</h3>
                  <p className="article-text mb-4">
                    Our experienced consultants work with you to assess your current logistics operations and develop strategies for improvement. Whether you're looking to reduce costs, enhance efficiency, or expand into new markets, we provide the expertise you need.
                  </p>
                  <ul className="list-disc pl-6 article-text mb-6">
                    <li>Supply chain network design</li>
                    <li>Process optimization</li>
                    <li>Technology assessment and implementation</li>
                    <li>Carrier strategy development</li>
                    <li>Risk mitigation planning</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Supply Chain Consulting" 
                    className="rounded-lg shadow-lg h-64 w-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg my-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Atlas Global Logistics Inc?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Experience</h3>
                  <p className="article-text">
                    Over 8 years of industry experience with a proven track record of success.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Data-Driven</h3>
                  <p className="article-text">
                    We leverage analytics to make informed decisions and drive continuous improvement.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Innovation</h3>
                  <p className="article-text">
                    We continuously explore new technologies and approaches to enhance our services.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center my-12">
              <h2 className="text-3xl font-bold mb-6">Ready to optimize your logistics operations?</h2>
              <p className="article-text max-w-2xl mx-auto mb-8">
                Contact us today to learn how Atlas Global Logistics Inc can help you streamline your supply chain, reduce costs, and improve service levels.
              </p>
              <Link to="/contact">
                <Button className="btn-primary">Get Started</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
