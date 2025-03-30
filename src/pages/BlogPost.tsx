import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();
  
  // This would typically come from an API or CMS
  const getBlogPost = (postSlug: string | undefined) => {
    const posts = {
      'improve-carrier-relationships': {
        title: '5 Ways to Improve Your Carrier Relationships',
        image: 'https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        date: 'March 15, 2023',
        author: 'Jessica Martinez',
        content: `
          <p>Strong carrier relationships are the backbone of any successful freight brokerage. When you build solid partnerships with carriers, you secure reliable capacity, competitive rates, and preferential service for your shippers. Here are five proven strategies to strengthen your carrier relationships:</p>
          
          <h2>1. Communicate Clearly and Consistently</h2>
          <p>Regular, transparent communication is essential for building trust with carriers. Be upfront about load details, any potential challenges, and your expectations. Avoid overpromising and underdelivering at all costs.</p>
          <p>Establish consistent touchpoints with your key carriers, not just when you need something. Regular check-ins show that you value the relationship beyond transactions.</p>
          
          <h2>2. Pay Promptly and Fairly</h2>
          <p>Nothing damages carrier relationships faster than delayed payments or payment disputes. Implement quick-pay options and stick to your payment terms. Consider offering preferred payment terms to your most reliable carriers.</p>
          <p>Be transparent about your rates and how they're calculated. When market conditions change, be willing to adjust rates accordingly to maintain fairness.</p>
          
          <h2>3. Provide Quality Loads and Accurate Information</h2>
          <p>Carriers value brokers who provide complete, accurate load information. This includes precise pickup and delivery details, any special requirements, and realistic time expectations.</p>
          <p>When possible, offer consistent lanes and volume to your best carriers. Predictable freight helps carriers optimize their operations and reduces deadhead miles.</p>
          
          <h2>4. Recognize and Reward Loyalty</h2>
          <p>Implement a carrier recognition program that acknowledges and rewards consistent performance. This could include preferential load access, rate premiums, or formal recognition.</p>
          <p>Remember that carriers have options in who they work with. Going the extra mile to show appreciation can distinguish your brokerage from competitors.</p>
          
          <h2>5. Embrace Technology for Better Collaboration</h2>
          <p>Utilize digital platforms that make it easier for carriers to work with you. This might include easy-to-use load boards, simplified documentation processes, or real-time tracking systems that don't create additional burdens.</p>
          <p>Ask for and implement carrier feedback on your technology solutions. The goal should be making their jobs easier, not adding complexity.</p>
          
          <h2>The Long-term Benefits</h2>
          <p>Investing in carrier relationships yields significant dividends over time. Brokers with strong carrier networks typically experience:</p>
          <ul>
            <li>Higher load acceptance rates</li>
            <li>Better service levels for shippers</li>
            <li>More competitive pricing</li>
            <li>Capacity during tight markets</li>
            <li>Lower turnover in their carrier base</li>
          </ul>
          
          <p>At Atlas Global Logistics Inc, we've found that our strongest shipper relationships are built on the foundation of our carrier partnerships. By treating carriers as valued business partners rather than interchangeable vendors, we've created a resilient network that benefits everyone in the supply chain.</p>
        `
      },
      'technology-in-freight-brokerage': {
        title: 'The Role of Technology in Modern Freight Brokerage',
        image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        date: 'February 28, 2023',
        author: 'Michael Thompson',
        content: `
          <p>Technology is revolutionizing the freight brokerage industry at an unprecedented pace. Brokers who embrace these innovations gain significant competitive advantages, while those who resist change risk being left behind. Here's how technology is transforming freight brokerage and why it matters for your business.</p>
          
          <h2>Digital Platforms and Marketplaces</h2>
          <p>Digital freight matching platforms are creating more efficient marketplaces where shippers and carriers can connect with less friction. These platforms utilize algorithms to match freight with available capacity based on location, equipment type, price, and other parameters.</p>
          <p>For brokers, these platforms represent both a challenge and an opportunity. While they may disintermediate traditional brokerage functions, they also provide tools that can dramatically increase efficiency and scale operations without proportional headcount increases.</p>
          
          <h2>Data Analytics and Predictive Insights</h2>
          <p>Today's freight brokers have access to unprecedented amounts of data. When properly analyzed, this data offers valuable insights into market trends, pricing patterns, and operational efficiency.</p>
          <p>Advanced analytics tools allow brokers to:</p>
          <ul>
            <li>Predict capacity crunches before they occur</li>
            <li>Optimize pricing strategies based on real-time market conditions</li>
            <li>Identify the most profitable lanes and customers</li>
            <li>Detect and address operational inefficiencies</li>
          </ul>
          
          <h2>Automation of Routine Tasks</h2>
          <p>Automation technology is eliminating much of the manual work traditionally performed by brokers. Tasks like carrier matching, rate confirmation, tracking updates, and invoice processing can now be handled with minimal human intervention.</p>
          <p>This automation frees brokers to focus on activities that truly add value: building relationships, solving complex logistics challenges, and providing strategic guidance to customers.</p>
          
          <h2>Enhanced Visibility and Tracking</h2>
          <p>Real-time visibility platforms have transformed expectations around shipment tracking. Shippers now expect complete transparency into where their freight is at all times, with accurate ETAs and immediate notification of delays.</p>
          <p>Brokers who provide this level of visibility strengthen their value proposition and improve customer satisfaction. The data generated also helps identify service issues before they become problematic.</p>
          
          <h2>Integration and APIs</h2>
          <p>Application Programming Interfaces (APIs) are enabling seamless integration between different systems in the logistics ecosystem. This connectivity creates more efficient workflows and reduces the need for redundant data entry.</p>
          <p>Brokers who develop robust integration capabilities can connect more easily with both shipper and carrier systems, reducing friction and making themselves easier to do business with.</p>
          
          <h2>The Human Element in a Digital World</h2>
          <p>Despite these technological advances, freight brokerage remains a relationship business at its core. The most successful brokers are those who use technology to enhance, rather than replace, the human elements of their service.</p>
          <p>By automating routine tasks, technology allows brokers to devote more time to understanding customer needs, solving complex problems, and building the relationships that ultimately differentiate their services in a competitive market.</p>
          
          <h2>Looking Ahead</h2>
          <p>At Atlas Global Logistics Inc, we believe that the future belongs to "tech-enabled" brokers who combine technological sophistication with deep industry expertise and strong relationships. By embracing innovation while maintaining our commitment to personalized service, we're positioning ourselves to deliver exceptional value in an increasingly digital freight marketplace.</p>
        `
      },
      'navigating-supply-chain-disruptions': {
        title: 'Navigating Supply Chain Disruptions',
        image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        date: 'January 10, 2023',
        author: 'Sarah Johnson',
        content: `
          <p>Supply chain disruptions have become the new normal in global logistics. From pandemic-related challenges to geopolitical tensions, weather events, and labor shortages, freight brokers must be prepared to help their clients navigate an increasingly unpredictable landscape. Here are strategies for maintaining resilience in the face of supply chain challenges.</p>
          
          <h2>Building a Diversified Carrier Network</h2>
          <p>Relying on a small pool of carriers creates significant risk during disruptions. Forward-thinking brokers cultivate relationships with a diverse array of transportation providers across different regions, equipment types, and specializations.</p>
          <p>This diversification ensures that when disruptions affect certain carriers or regions, you have alternatives ready to deploy. The time to build these relationships is before disruptions occur, not during them.</p>
          
          <h2>Implementing Contingency Planning</h2>
          <p>Every freight movement should have a Plan B (and ideally Plans C and D). Effective brokers work with their clients to develop contingency plans for critical shipments, identifying alternative routes, modes, and timelines that can be activated when problems arise.</p>
          <p>These plans should be documented, communicated to all stakeholders, and regularly reviewed to ensure they remain viable as conditions change.</p>
          
          <h2>Leveraging Data for Visibility and Prediction</h2>
          <p>Data is perhaps the most powerful tool for managing disruptions. By analyzing historical patterns and monitoring real-time conditions, brokers can often anticipate problems before they impact shipments.</p>
          <p>Key data points to monitor include:</p>
          <ul>
            <li>Weather forecasts along shipping routes</li>
            <li>Port congestion and waiting times</li>
            <li>Border crossing delays</li>
            <li>Regional capacity constraints</li>
            <li>Regulatory changes</li>
          </ul>
          
          <h2>Embracing Flexibility in Routing and Scheduling</h2>
          <p>Rigid routing and scheduling make supply chains particularly vulnerable to disruption. Brokers should work with shippers to build flexibility into their transportation plans, even if it means slight adjustments to traditional timelines or routing preferences.</p>
          <p>This might include utilizing alternative ports, considering intermodal options, or adjusting shipping schedules to avoid known congestion periods.</p>
          
          <h2>Maintaining Strategic Inventory Positioning</h2>
          <p>While inventory management is primarily the shipper's responsibility, knowledgeable brokers can advise on strategic inventory positioning that creates buffers against transportation disruptions.</p>
          <p>This might include recommendations for distributed warehousing, safety stock levels, or forward-staging inventory in anticipation of seasonal constraints.</p>
          
          <h2>Enhancing Communication During Disruptions</h2>
          <p>When disruptions occur, proactive communication becomes essential. The best brokers don't wait for clients to ask for updates—they provide regular, transparent information about the situation, including:</p>
          <ul>
            <li>The nature and expected duration of the disruption</li>
            <li>Impact on specific shipments</li>
            <li>Actions being taken to mitigate problems</li>
            <li>Alternative options available</li>
            <li>Updated timeline expectations</li>
          </ul>
          
          <h2>The Atlas Global Logistics Inc Approach</h2>
          <p>At Atlas Global Logistics Inc, we've developed a systematic approach to disruption management that combines proactive planning, real-time monitoring, and rapid response capabilities. Our clients benefit from our extensive carrier network, technological capabilities, and experienced team that has successfully navigated countless supply chain challenges.</p>
          <p>By treating disruptions as an expected part of logistics rather than exceptional events, we help our clients maintain service levels and manage expectations even when conditions are far from ideal.</p>
        `
      },
      'freight-brokerage-metrics': {
        title: 'Breaking Down the Data: What Metrics Should Your Freight Brokerage Be Measuring?',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        date: 'April 5, 2023',
        author: 'Robert Chen',
        content: `
          <p>In today's data-driven world, freight brokers have access to more information than ever before. But with so much data at your fingertips, it's crucial to identify which metrics actually matter for your brokerage's success. At Atlas Global Logistics Inc, we've found that focusing on the right KPIs can dramatically improve operational efficiency and profitability.</p>
          
          <h2>Why business analytics matter for freight brokers</h2>
          <p>Business analytics provide freight brokers with the insights needed to make informed decisions, optimize operations, and stay competitive in a rapidly evolving industry. By tracking the right metrics, brokers can identify trends, anticipate market shifts, and adapt their strategies accordingly.</p>
          
          <h2>What metrics should you measure as a freight broker?</h2>
          <p>Selecting the right metrics to track is essential for meaningful analytics. Here are some key performance indicators (KPIs) that successful freight brokers should monitor:</p>
          
          <h3>Load metrics</h3>
          <ul>
            <li>Load volume by customer, lane, and mode</li>
            <li>Load acceptance and rejection rates</li>
            <li>Average time to cover loads</li>
            <li>Tender lead time</li>
          </ul>
          
          <h3>Carrier metrics</h3>
          <ul>
            <li>Carrier compliance rates</li>
            <li>On-time pickup and delivery performance</li>
            <li>Carrier safety scores</li>
            <li>Carrier diversification</li>
          </ul>
          
          <h3>Financial metrics</h3>
          <ul>
            <li>Gross margin by customer, lane, and mode</li>
            <li>Revenue per employee</li>
            <li>Cost per load</li>
            <li>Days sales outstanding (DSO)</li>
            <li>Working capital requirements</li>
          </ul>
          
          <h3>Operational metrics</h3>
          <ul>
            <li>Quote-to-book ratio</li>
            <li>Average response time</li>
            <li>Customer satisfaction scores</li>
            <li>Claims frequency and resolution time</li>
          </ul>
          
          <h3>Market metrics</h3>
          <ul>
            <li>Lane rate trends</li>
            <li>Seasonal demand patterns</li>
            <li>Competitor pricing</li>
            <li>Market share by region</li>
          </ul>
          
          <h2>How to put your freight broker business analytics into action</h2>
          <p>Collecting data is only the first step. To truly benefit from business analytics, freight brokers must:</p>
          
          <ol>
            <li><strong>Establish a data governance framework</strong> to ensure data quality and consistency</li>
            <li><strong>Implement user-friendly dashboards</strong> that provide real-time visibility into key metrics</li>
            <li><strong>Set performance benchmarks</strong> and regularly compare actual results against targets</li>
            <li><strong>Foster a data-driven culture</strong> where decisions are based on analytics rather than intuition</li>
            <li><strong>Continuously refine</strong> your analytics approach based on changing business needs</li>
          </ol>
          
          <h2>Partner With Atlas Global Logistics Inc</h2>
          <p>At Atlas Global Logistics Inc, we combine cutting-edge analytics with industry expertise to help freight brokers optimize their operations and drive sustainable growth. Our team of specialists can help you identify the metrics that matter most for your business and develop strategies to improve performance across all areas of your operation.</p>
        `
      },
      'freight-trends-2023': {
        title: 'The Future of Freight: Trends to Watch in 2023',
        image: 'https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        date: 'December 15, 2022',
        author: 'David Wilson',
        content: `
          <p>The freight industry continues to evolve at a rapid pace, driven by technological innovation, changing consumer expectations, and economic pressures. As we look ahead to 2023, several key trends are poised to reshape the logistics landscape. Freight brokers who understand and adapt to these trends will be well-positioned for success in the coming year.</p>
          
          <h2>1. Digitalization Accelerates</h2>
          <p>The digital transformation of freight brokerage will continue to accelerate in 2023. Digital freight platforms are becoming more sophisticated, offering increased functionality and improved user experiences. Traditional brokers are investing heavily in technology to remain competitive, while tech-enabled brokers are capturing market share.</p>
          <p>Key developments to watch include:</p>
          <ul>
            <li>Greater adoption of APIs for seamless integration between systems</li>
            <li>More sophisticated pricing algorithms that account for multiple variables</li>
            <li>Enhanced digital collaboration tools connecting shippers, brokers, and carriers</li>
          </ul>
          
          <h2>2. Sustainability Takes Center Stage</h2>
          <p>Environmental concerns are becoming increasingly important in transportation decisions. In 2023, we expect to see:</p>
          <ul>
            <li>More shippers including carbon footprint in their carrier selection criteria</li>
            <li>Growing demand for accurate emissions reporting across supply chains</li>
            <li>Increased investment in alternative fuel vehicles and green logistics solutions</li>
            <li>Development of carbon offset programs specific to freight transportation</li>
          </ul>
          <p>Brokers who can help shippers meet their sustainability goals will have a competitive advantage in this changing landscape.</p>
          
          <h2>3. Supply Chain Resilience Over Pure Efficiency</h2>
          <p>After years of disruption, many companies are prioritizing supply chain resilience over maximum efficiency. This shift has several implications for freight brokers:</p>
          <ul>
            <li>Increased demand for diversified carrier networks that can withstand regional disruptions</li>
            <li>Growing interest in nearshoring and reshoring, changing traditional freight patterns</li>
            <li>More emphasis on contingency planning and alternative routing options</li>
            <li>Willingness to accept higher costs in exchange for greater reliability</li>
          </ul>
          
          <h2>4. Last-Mile Innovation Continues</h2>
          <p>As e-commerce continues to grow, last-mile delivery remains a focus of innovation. Developments to watch include:</p>
          <ul>
            <li>Expansion of urban fulfillment centers to enable faster deliveries</li>
            <li>Growing adoption of alternative delivery methods, including autonomous vehicles and drones</li>
            <li>Increased use of technology to optimize route planning and delivery efficiency</li>
            <li>New models for managing returns logistics, a growing challenge for retailers</li>
          </ul>
          
          <h2>5. Data Security and Compliance Requirements Intensify</h2>
          <p>As brokers collect and utilize more data, they face growing responsibilities around data security and regulatory compliance. In 2023, we expect:</p>
          <ul>
            <li>Stricter regulations governing the collection and use of transportation data</li>
            <li>Increased focus on cybersecurity as logistics becomes more digitized</li>
            <li>Growing liability concerns related to data breaches and privacy violations</li>
            <li>More sophisticated compliance requirements for international shipments</li>
          </ul>
          
          <h2>6. Talent Strategies Evolve</h2>
          <p>The ongoing shortage of logistics talent is driving innovation in recruitment, training, and retention. Successful brokers in 2023 will:</p>
          <ul>
            <li>Embrace remote and hybrid work models to access wider talent pools</li>
            <li>Invest in technology that augments human capabilities rather than just replacing staff</li>
            <li>Develop more structured training programs to bring new workers into the industry</li>
            <li>Create compelling career paths that attract younger workers to logistics roles</li>
          </ul>
          
          <h2>Preparing for the Road Ahead</h2>
          <p>At Atlas Global Logistics Inc, we're actively preparing for these trends by investing in technology, expanding our carrier relationships, and developing the expertise our clients will need in the changing freight landscape. By staying ahead of industry developments, we help our clients navigate the challenges and opportunities that lie ahead in 2023 and beyond.</p>
        `
      },
      'resilient-freight-brokerage': {
        title: 'Building a Resilient Freight Brokerage in Uncertain Times',
        image: 'https://images.unsplash.com/photo-1521791055366-0d553381c4f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        date: 'May 22, 2023',
        author: 'Jennifer Lewis',
        content: `
          <p>Economic uncertainty, market volatility, and persistent supply chain challenges have created a complex operating environment for freight brokers. While these conditions pose significant challenges, they also create opportunities for brokerages that can adapt and demonstrate resilience. Here's how to build a freight brokerage that can withstand turbulent times while continuing to grow and provide value.</p>
          
          <h2>Diversify Your Customer Base</h2>
          <p>Over-reliance on a small number of clients creates dangerous vulnerability. If your top customer represents more than 20% of your revenue, you're at significant risk should they reduce their shipping volume or change providers.</p>
          <p>Strategies for diversification include:</p>
          <ul>
            <li>Expanding into additional industry verticals</li>
            <li>Developing expertise in specialized freight that may be less cyclical</li>
            <li>Targeting companies of different sizes to create a balanced portfolio</li>
            <li>Geographical expansion to reduce exposure to regional economic fluctuations</li>
          </ul>
          
          <h2>Maintain Financial Discipline</h2>
          <p>In volatile markets, financial discipline becomes even more critical. Resilient brokerages:</p>
          <ul>
            <li>Maintain healthy cash reserves to weather downturns</li>
            <li>Implement rigorous credit management to minimize bad debt exposure</li>
            <li>Create variable cost structures that can flex with volume changes</li>
            <li>Develop clear visibility into profitability by customer, lane, and service type</li>
            <li>Invest in technology that improves efficiency and reduces overhead costs</li>
          </ul>
          
          <h2>Develop Pricing Strategies for Volatility</h2>
          <p>Traditional pricing approaches can break down in volatile markets. Resilient brokers adapt by:</p>
          <ul>
            <li>Shortening contract periods to reduce market exposure</li>
            <li>Implementing indexed pricing that adjusts based on market conditions</li>
            <li>Developing sophisticated forecasting capabilities to anticipate rate changes</li>
            <li>Creating transparency around pricing mechanisms to build customer trust</li>
            <li>Balancing spot and contract freight to manage risk exposure</li>
          </ul>
          
          <h2>Invest in Technology Selectively</h2>
          <p>Technology investments should focus on capabilities that enhance resilience, including:</p>
          <ul>
            <li>Analytics platforms that provide early warning of market changes</li>
            <li>Automation tools that reduce dependence on labor availability</li>
            <li>Integration capabilities that strengthen client and carrier relationships</li>
            <li>Cloud-based systems that support remote work capabilities</li>
            <li>Scalable platforms that can grow or contract with business volume</li>
          </ul>
          
          <h2>Build a Resilient Culture</h2>
          <p>Organizational culture plays a crucial role in resilience. Key cultural elements include:</p>
          <ul>
            <li>Agility – the ability to pivot quickly when conditions change</li>
            <li>Information sharing – ensuring that market intelligence flows freely</li>
            <li>Continuous learning – constantly developing new skills and knowledge</li>
            <li>Problem-solving focus – viewing challenges as opportunities to create value</li>
            <li>Collaboration – working across departments to achieve company goals</li>
          </ul>
          
          <h2>Maintain Strong Carrier Relationships</h2>
          <p>During capacity crunches, strong carrier relationships become invaluable. Resilient brokers:</p>
          <ul>
            <li>Treat carriers as strategic partners, not interchangeable vendors</li>
            <li>Provide consistent freight even when their own volumes fluctuate</li>
            <li>Pay promptly and address issues fairly</li>
            <li>Invest in technologies that make it easier for carriers to work with them</li>
            <li>Recognize and reward carrier performance</li>
          </ul>
          
          <h2>Develop Scenario-Based Planning</h2>
          <p>Rather than creating a single business plan, resilient brokers develop multiple scenarios with corresponding action plans. This might include:</p>
          <ul>
            <li>Best case, expected case, and worst case volume projections</li>
            <li>Staffing plans that can scale up or down based on market conditions</li>
            <li>Pre-defined trigger points for implementing cost-reduction measures</li>
            <li>Opportunity planning for market downturns (e.g., talent acquisition, competitor acquisition)</li>
            <li>Regular stress-testing of financial models under various scenarios</li>
          </ul>
          
          <h2>The Resilience Advantage</h2>
          <p>At Atlas Global Logistics Inc, we've built our business model around resilience. By maintaining financial strength, investing in the right technologies, and fostering a culture of adaptation, we've been able to thrive despite market challenges. More importantly, our resilience allows us to provide consistent, reliable service to our clients even when market conditions become difficult—exactly when they need us most.</p>
        `
      }
    };
    
    return posts[postSlug as keyof typeof posts] || {
      title: 'Blog Post Not Found',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      date: '',
      author: '',
      content: '<p>The requested blog post could not be found. Please return to the blog page to browse available posts.</p>'
    };
  };
  
  const post = getBlogPost(slug);

  return (
    <>
      <Helmet>
        <title>{post.title} | Atlas Global Logistics Inc</title>
        <meta name="description" content={post.title} />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-primary text-white py-12">
            <div className="section-container">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              {post.date && post.author && (
                <p className="text-xl">Published on {post.date} by {post.author}</p>
              )}
            </div>
          </div>
          
          <div className="section-container my-12">
            <div className="max-w-4xl mx-auto">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto rounded-lg shadow-lg mb-8" 
              />
              
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <Link to="/blog">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Back to Blog
                    </Button>
                  </Link>
                  
                  <div className="flex space-x-4">
                    <Button variant="ghost" className="text-gray-600">
                      Share
                    </Button>
                    <Button variant="ghost" className="text-gray-600">
                      Print
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
