
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Atlas Global Logistics Inc</title>
        <meta name="description" content="Get in touch with Atlas Global Logistics Inc for all your freight brokerage and logistics needs." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-primary dark:bg-gray-900 text-white py-12">
            <div className="section-container">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl">Get in touch with our team</p>
            </div>
          </div>
          
          <div className="section-container my-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Reach Out to Us</h2>
                <p className="article-text mb-8">
                  Have questions about our services or want to discuss how we can help with your logistics needs? Fill out the form below, and one of our experts will get back to you as soon as possible.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-primary dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 dark:text-white">Address</h3>
                      <p className="article-text">
                        456 Freight Boulevard<br />
                        Atlanta, GA 30308
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-primary dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 dark:text-white">Phone</h3>
                      <p className="article-text">(888) 555-ATLAS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-primary dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 dark:text-white">Email</h3>
                      <p className="article-text">info@atlasgli.com</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 dark:text-white">Office Hours</h3>
                  <p className="article-text">
                    Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                    Saturday: 9:00 AM - 1:00 PM EST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6 dark:text-white">Send Us a Message</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="dark:text-white">First Name</Label>
                      <Input id="firstName" placeholder="John" required className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="dark:text-white">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="email" className="dark:text-white">Email</Label>
                    <Input id="email" type="email" placeholder="johndoe@example.com" required className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="phone" className="dark:text-white">Phone</Label>
                    <Input id="phone" placeholder="(123) 456-7890" className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="company" className="dark:text-white">Company</Label>
                    <Input id="company" placeholder="Your Company" className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="subject" className="dark:text-white">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" required className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message" className="dark:text-white">Message</Label>
                    <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={5} required className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
