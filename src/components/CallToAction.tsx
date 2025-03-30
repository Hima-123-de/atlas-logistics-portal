
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="section-container text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to optimize your freight brokerage with data?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Partner with Atlas Global Logistics Inc to leverage advanced analytics and industry expertise for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Button>
          </Link>
          <Link to="/solutions">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Explore Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
