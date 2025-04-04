
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  slug: string;
}

const BlogCard = ({ image, title, excerpt, slug }: BlogCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
        <Link to={`/blog/${slug}`}>
          <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
