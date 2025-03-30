
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DataMetricsSection = () => {
  return (
    <section className="section-container">
      <div className="max-w-3xl mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
          alt="Data Dashboard" 
          className="rounded-lg shadow-lg mb-8 w-full"
        />
        
        <div className="prose max-w-none">
          <p className="article-text mb-6">
            In today's data-driven world, freight brokers have access to more information than ever before. But with so much data at your fingertips, it's crucial to identify which metrics actually matter for your brokerage's success. At Atlas Global Logistics Inc, we've found that focusing on the right KPIs can dramatically improve operational efficiency and profitability.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Why business analytics matter for freight brokers</h2>
          <p className="article-text mb-6">
            Business analytics provide freight brokers with the insights needed to make informed decisions, optimize operations, and stay competitive in a rapidly evolving industry. By tracking the right metrics, brokers can identify trends, anticipate market shifts, and adapt their strategies accordingly.
          </p>
          
          <div className="my-8">
            <Link to="/blog/data-analytics">
              <Button className="btn-primary">Learn More</Button>
            </Link>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">What metrics should you measure as a freight broker?</h2>
          <p className="article-text mb-6">
            Selecting the right metrics to track is essential for meaningful analytics. Here are some key performance indicators (KPIs) that successful freight brokers should monitor:
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80" 
            alt="Truck on highway" 
            className="rounded-lg shadow-lg mb-8 w-full"
          />
          
          <h3 className="text-xl font-semibold mb-3">Load metrics</h3>
          <ul className="list-disc pl-6 mb-6 article-text">
            <li>Load volume by customer, lane, and mode</li>
            <li>Load acceptance and rejection rates</li>
            <li>Average time to cover loads</li>
            <li>Tender lead time</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Carrier metrics</h3>
          <ul className="list-disc pl-6 mb-6 article-text">
            <li>Carrier compliance rates</li>
            <li>On-time pickup and delivery performance</li>
            <li>Carrier safety scores</li>
            <li>Carrier diversification</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Financial metrics</h3>
          <ul className="list-disc pl-6 mb-6 article-text">
            <li>Gross margin by customer, lane, and mode</li>
            <li>Revenue per employee</li>
            <li>Cost per load</li>
            <li>Days sales outstanding (DSO)</li>
            <li>Working capital requirements</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Operational metrics</h3>
          <ul className="list-disc pl-6 mb-6 article-text">
            <li>Quote-to-book ratio</li>
            <li>Average response time</li>
            <li>Customer satisfaction scores</li>
            <li>Claims frequency and resolution time</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Market metrics</h3>
          <ul className="list-disc pl-6 mb-6 article-text">
            <li>Lane rate trends</li>
            <li>Seasonal demand patterns</li>
            <li>Competitor pricing</li>
            <li>Market share by region</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4">How to put your freight broker business analytics into action</h2>
          <p className="article-text mb-6">
            Collecting data is only the first step. To truly benefit from business analytics, freight brokers must:
          </p>
          
          <ol className="list-decimal pl-6 mb-6 article-text">
            <li><strong>Establish a data governance framework</strong> to ensure data quality and consistency</li>
            <li><strong>Implement user-friendly dashboards</strong> that provide real-time visibility into key metrics</li>
            <li><strong>Set performance benchmarks</strong> and regularly compare actual results against targets</li>
            <li><strong>Foster a data-driven culture</strong> where decisions are based on analytics rather than intuition</li>
            <li><strong>Continuously refine</strong> your analytics approach based on changing business needs</li>
          </ol>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-3">Partner With Atlas Global Logistics Inc</h3>
            <p className="article-text mb-4">
              At Atlas Global Logistics Inc, we combine cutting-edge analytics with industry expertise to help freight brokers optimize their operations and drive sustainable growth. Our team of specialists can help you identify the metrics that matter most for your business and develop strategies to improve performance across all areas of your operation.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">Contact Us Today</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataMetricsSection;
