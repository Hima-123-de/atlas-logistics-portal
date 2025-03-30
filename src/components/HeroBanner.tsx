
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <div className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Breaking Down the Data: What Metrics Should Your Freight Brokerage Be Measuring?
          </h1>
          <p className="text-lg mb-8">
            Leverage data-driven insights to optimize your freight brokerage operations and drive growth
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
