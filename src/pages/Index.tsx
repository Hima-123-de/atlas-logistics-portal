
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import DataMetricsSection from '@/components/DataMetricsSection';
import RecentPosts from '@/components/RecentPosts';
import CallToAction from '@/components/CallToAction';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Atlas Global Logistics Inc | Freight Brokerage Data Analytics</title>
        <meta name="description" content="Learn which metrics your freight brokerage should be measuring to optimize operations and drive growth with Atlas Global Logistics Inc." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <HeroBanner />
          <DataMetricsSection />
          <RecentPosts />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
