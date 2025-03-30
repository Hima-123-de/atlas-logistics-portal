
import React from 'react';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RecentPosts = () => {
  const recentPosts = [
    {
      image: 'https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
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
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/blog">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
