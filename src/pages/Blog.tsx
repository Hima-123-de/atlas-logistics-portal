
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import BlogCard from '@/components/BlogCard';

const Blog = () => {
  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1586528116493-a029161edd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: '5 Ways to Improve Your Carrier Relationships',
      excerpt: 'Build stronger partnerships with carriers to ensure capacity and competitive rates.',
      slug: 'improve-carrier-relationships'
    },
    {
      image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'The Role of Technology in Modern Freight Brokerage',
      excerpt: 'How digital tools are transforming the freight brokerage landscape.',
      slug: 'technology-in-freight-brokerage'
    },
    {
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Navigating Supply Chain Disruptions',
      excerpt: 'Strategies for freight brokers to help clients during supply chain challenges.',
      slug: 'navigating-supply-chain-disruptions'
    },
    {
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Breaking Down the Data: What Metrics Should Your Freight Brokerage Be Measuring?',
      excerpt: 'Leverage data-driven insights to optimize your freight brokerage operations and drive growth.',
      slug: 'freight-brokerage-metrics'
    },
    {
      image: 'https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'The Future of Freight: Trends to Watch in 2023',
      excerpt: 'Stay ahead of the curve with insights into emerging trends in the freight industry.',
      slug: 'freight-trends-2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1521791055366-0d553381c4f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Building a Resilient Freight Brokerage in Uncertain Times',
      excerpt: 'Strategies for maintaining stability and growth despite market volatility.',
      slug: 'resilient-freight-brokerage'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Atlas Global Logistics Inc</title>
        <meta name="description" content="Insights and resources for freight brokers from Atlas Global Logistics Inc." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-primary text-white py-12">
            <div className="section-container">
              <h1 className="text-4xl font-bold mb-4">Blog</h1>
              <p className="text-xl">Industry insights and resources for freight brokers</p>
            </div>
          </div>
          
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
