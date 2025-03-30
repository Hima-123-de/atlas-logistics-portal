
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Atlas Global Logistics Inc</title>
        <meta name="description" content="Learn about Atlas Global Logistics Inc and our mission to transform freight brokerage through data and innovation." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-primary text-white py-12">
            <div className="section-container">
              <h1 className="text-4xl font-bold mb-4">About Atlas Global Logistics Inc</h1>
              <p className="text-xl">Transforming freight brokerage through data and innovation</p>
            </div>
          </div>
          
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="article-text mb-4">
                  Atlas Global Logistics Inc was founded in 2015 with a vision to transform the freight brokerage industry through data-driven insights and technology innovation. Operating as Atlas Freight Brokers, our team combines decades of logistics experience with cutting-edge analytics capabilities to deliver exceptional service and value to our clients.
                </p>
                <p className="article-text mb-4">
                  What began as a small regional operation has grown into a nationwide provider of comprehensive logistics solutions, serving clients across various industries including manufacturing, retail, food and beverage, and more.
                </p>
                <p className="article-text">
                  Our commitment to transparency, integrity, and excellence has made us a trusted partner for businesses seeking to optimize their supply chain operations and drive sustainable growth.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/public/lovable-uploads/d78baa13-c958-4a90-afb0-e30e3888179a.png" 
                  alt="Atlas Global Logistics Inc Logo" 
                  className="w-3/4"
                />
              </div>
            </div>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-primary">Innovation</h3>
                  <p className="article-text">
                    We constantly seek new ways to leverage technology and data to improve the freight brokerage experience for our clients and carriers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-primary">Integrity</h3>
                  <p className="article-text">
                    We operate with honesty and transparency in all our dealings, building trust with our clients, carriers, and partners.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-primary">Excellence</h3>
                  <p className="article-text">
                    We strive for excellence in everything we do, from customer service to operational efficiency to analytics insights.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold mb-8">Our Team</h2>
              <p className="article-text mb-6">
                At Atlas Global Logistics Inc, our greatest asset is our team of dedicated professionals who bring diverse expertise in logistics, technology, data analytics, and customer service. Led by industry veterans with decades of experience, our team works collaboratively to deliver innovative solutions and exceptional results for our clients.
              </p>
              <div className="mt-8 text-center">
                <Link to="/contact">
                  <Button className="btn-primary">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
