// import { db } from '../firebase';
// import { setDoc, doc } from 'firebase/firestore';

// export const initializeCourseData = async () => {
//   try {
//     // Add courses
//     const courses = [
//       {
//         id: 'digital-marketing-101',
//         title: "Advanced Digital Marketing",
//         description: "Master the digital marketing strategies and tools",
//         price: "2000",
//         thumbnail: "https://yourcdn.com/images/digital-marketing-101.jpg",
//         modules: [
//           {
//             moduleId: "module1",
//             title: "Advanced Digital Marketing",
//             lessonTitles:[
//               "Introduction to Digital Marketing",
//               "Digital Marketing Positioning",
//               "Digital Branding",
//               "Lead Generation, Conversion and Retention"
//             ],
//             lessons: ["module1_lesson1", "module1_lesson2", "module1_lesson3", "module1_lesson4" ],
//           },
//           {
//             moduleId: "module2",
//             title: "Advanced Social Media Marketing",
//             lessonTitles:[
//               "Social Media Marketing",
//               "Choosing the right social media channel",
//               "Creating Marketing Content",
//               "Social Media Marketing Tools"
//             ],
//             lessons: ["module2_lesson1", "module2_lesson2", "module2_lesson3" , "module2_lesson4"],
//           }
//         ],
//         level: "Beginner",
//         prerequisites: [],
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//     ];

//     // Add each course
//     for (const course of courses) {
//       const { id, ...courseData } = course;
//       await setDoc(doc(db, 'courses', id), courseData);
//       console.log(`Course ${id} added successfully`);
//     }

//     // Add lessons
//     const lessons = [
//       {
//         id: 'module1_lesson1',
//         title: "Introduction to Digital Marketing",
//         duration: "45 minutes",
//         order: 1,
//         moduleId: "module1",
//         courseId: "digital-marketing-101",
//         sections: [
//           {
//             type: "text",
//             content: `<h2>Introduction to Marketing</h2>
//             <p>Marketing is the ability to identify the needs of potential customers and to satisfy those needs better than your competitors, in order to make a profit. Marketing is an important part of starting and running a business. It helps you to sell your goods or services in the right way and to the right people.</p>`
//           },
//           {
//             type: "text",
//             content: `<h2>The Marketing Mix</h2>
//             <p>The marketing mix is a strategic framework that businesses use to create and implement effective marketing strategies. It encompasses seven essential elements that collectively contribute to a comprehensive marketing plan.</p>
            
//             <h3>The 7 P's of Marketing:</h3>
//             <div class="marketing-mix">
//               <div class="mix-element">
//                 <h4>1. Product</h4>
//                 <p>The items or services offered to customers, including quality, features, benefits, and packaging.</p>
//               </div>
              
//               <div class="mix-element">
//                 <h4>2. Price</h4>
//                 <p>The cost strategy that allows for profit while remaining competitive and attractive to customers.</p>
//               </div>
              
//               <div class="mix-element">
//                 <h4>3. Place</h4>
//                 <p>Distribution channels and locations where products or services are available to customers.</p>
//               </div>
              
//               <div class="mix-element">
//                 <h4>4. Promotion</h4>
//                 <p>Communication strategies to inform and attract customers, including advertising and marketing campaigns.</p>
//               </div>
              
//               <div class="mix-element">
//                 <h4>5. People</h4>
//                 <p>The staff and team members who deliver the product or service and interact with customers.</p>
//               </div>
              
//               <div class="mix-element">
//                 <h4>6. Process</h4>
//                 <p>The methods and procedures for delivering products or services to customers.</p>
//               </div>
              
//               <div class="mix-element">
//                 <h4>7. Physical Evidence</h4>
//                 <p>Tangible elements that demonstrate the business's quality and professionalism.</p>
//               </div>
//             </div>
            
//             <p class="note">All seven "P"s are inter-related, so it is important that they are unified to create a positive image for your business.</p>`
//           },
//           {
//             type: "text",
//             content: `<h2>Digital Transformation in Business</h2>
//             <p>Deciding whether to use digital tools in your business depends on the type of business you have and where you want it to go in the future. It's important to think about how going digital can help you achieve your long-term goals.</p>
//             <p>The decision to go digital or maintain the current approach is a strategic choice that hinges on the owner's aspirations, goals, and comfort level with potential changes.</p>`
//           },
//           {
//             type: "text",
//             content: `<h2>Introduction to Digital Marketing</h2>
//             <p>Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, or brands and engage with target audiences. It encompasses a wide range of online marketing strategies and tactics, including:</p>
//             <ul>
//               <li>Social media marketing</li>
//               <li>Search engine optimization (SEO)</li>
//               <li>Content marketing</li>
//               <li>Paid advertising</li>
//             </ul>
//             <p>The primary goal of digital marketing is to reach and connect with potential customers in the digital space.</p>`
//           },
//           {
//             type: "image",
//             imageUrl: "https://cdn.seerinteractive.com/hubfs/Marketing%20Sizing%20TAM%2C%20SAM%2C%20SOM.png",
//             alt: "Market Potential Diagram",
//             caption: "Understanding Market Potential in Digital Marketing"
//           },
//           {
//             type: "text",
//             content: `<h2>Understanding Market Potential</h2>
//             <p>To effectively reach and connect with potential customers, the initial step should involve:</p>
//             <ul>
//               <li>Thorough understanding of products/services offered</li>
//               <li>Clear identification of target customer base</li>
//               <li>Analysis of market size and opportunities</li>
//               <li>Assessment of digital channels and platforms</li>
//             </ul>`
//           },
//           {
//             type: "quiz",
//             title: "Introduction to Digital Marketing Quiz",
//             questions: [
//               {
//                 id: 1,
//                 question: "What are the 7 P's of Marketing Mix?",
//                 options: [
//                   "Product, Price, Place, Promotion, People, Process, Physical Evidence",
//                   "Planning, Production, Pricing, Placement, Promotion, People, Process",
//                   "Product, Planning, Place, Promotion, People, Process, Performance",
//                   "Production, Price, Place, Promotion, People, Process, Packaging"
//                 ],
//                 correctAnswer: 0,
//                 explanation: "The 7 P's are Product, Price, Place, Promotion, People, Process, and Physical Evidence. These elements form the foundation of a comprehensive marketing strategy."
//               },
//               {
//                 id: 2,
//                 question: "What is the primary goal of digital marketing?",
//                 options: [
//                   "To sell products online only",
//                   "To reach and connect with potential customers in the digital space",
//                   "To replace traditional marketing completely",
//                   "To reduce marketing costs"
//                 ],
//                 correctAnswer: 1,
//                 explanation: "Digital marketing primarily aims to reach and connect with potential customers through digital channels, platforms, and technologies."
//               }
//             ],
//             feedback: {
//               perfect: "Excellent understanding of marketing fundamentals!",
//               good: "Good grasp of the basics, keep learning!",
//               poor: "Review the marketing mix and digital marketing concepts again."
//             }
//           }
//         ]
//       },
//       {
//         id: 'module1_lesson2',
//         title: "Digital Marketing Positioning",
//         duration: "50 minutes",
//         order: 2,
//         moduleId: "module1",
//         courseId: "digital-marketing-101",
//         sections: [
//           {
//             type: "text",
//             content: `<h2>Market Positioning</h2>
//             <p>Positioning refers to the image you would like customers to have about your product. For example, even if there are many coffee shops in town, you want yours to stand out by offering something special, like unique coffee blends, a cosy atmosphere, or great service. This makes your coffee shop different and attracts the customers you want.</p>
            
//             <h3>Elements of a Good Position</h3>
//             <div class="position-elements">
//               <ul>
//                 <li>Respond to a need that customers value highly</li>
//                 <li>Differentiate your product from your competitors</li>
//                 <li>Make sure that you can deliver what you promise</li>
//               </ul>
//             </div>`
//           },
//           {
//             type: "cards",
//             title: "Three Steps to Position Your Product",
//             cards: [
//               {
//                 title: "Market Research",
//                 content: "Study potential customers and competitors to make informed business decisions for improvement"
//               },
//               {
//                 title: "Market Segmentation",
//                 content: "Group customers into categories to tailor marketing messages and strategies effectively"
//               },
//               {
//                 title: "Product Positioning",
//                 content: "Define how you want your offerings to be perceived by your target audience"
//               }
//             ]
//           },
//           {
//             type: "text",
//             content: `<h2>Market Research</h2>
//             <p class="quote">"The purpose of this step is to find out which need has been fulfilled by products similar to yours and which has not; plus how well or how poorly the competition has been taking care of the customers. By doing the research, you can possibly find an unmet need that you can fulfil and thereby differentiate yourself from your competitors".</p>
            
//             <div class="research-sections">
//               <div class="section">
//                 <h3>Customer Research</h3>
//                 <ul>
//                   <li>Target customer identification</li>
//                   <li>Customer preferences and needs</li>
//                   <li>Price sensitivity analysis</li>
//                   <li>Purchase behavior patterns</li>
//                   <li>Location and timing preferences</li>
//                 </ul>
//               </div>
              
//               <div class="section">
//                 <h3>Competitor Analysis</h3>
//                 <ul>
//                   <li>Competitor identification and assessment</li>
//                   <li>Product perception analysis</li>
//                   <li>Delivery methods evaluation</li>
//                   <li>Marketing strategy analysis</li>
//                 </ul>
//               </div>
//             </div>`
//           },
//           {
//             type: "text",
//             content: `<h2>Market Research Tools</h2>
//             <div class="tools">
//               <div class="tool">
//                 <h3>Buyer Persona</h3>
//                 <p>A representation of your ideal customer that helps guide marketing strategies by understanding their motivations and purchasing decisions.</p>
//               </div>
              
//               <div class="tool">
//                 <h3>Customer Journey Map</h3>
//                 <p>A visualization tool for understanding customer interactions with your brand, identifying touchpoints, pain points, and improvement opportunities.</p>
//               </div>
//             </div>`
//           },
//           {
//             type: "text",
//             content: `<h2>Market Segmentation</h2>
//             <p>Different customers value different aspects of your product. Some prioritize price, others design, and some value accessibility. Effective segmentation groups customers with similar values.</p>
            
//             <p>In Digital Marketing, segmentation enables tailored strategies, content, and campaigns for each segment.</p>`
//           },
//           {
//             type: "image",
//             imageUrl: "/assets/images/market-segmentation-types.jpg",
//             alt: "Types of Market Segmentation",
//             caption: "Different approaches to market segmentation in digital marketing"
//           },
//           {
//             type: "text",
//             content: `<h2>Value Proposition Development</h2>
//             <div class="value-prop">
//               <h3>Formula Structure:</h3>
//               <pre>
//       WE [company]
//       help [preferred target customers]
//       to solve [the pressing problem you address]
//       and get value [outcomes/results you deliver]
//               </pre>
              
//               <div class="example">
//                 <h4>Example:</h4>
//                 <p>We, XYZ Tech Solutions, help small businesses in need of IT support to solve unsecured IT operations and provide affordable, 24/7 tech support, minimizing downtime, and safeguarding data.</p>
//               </div>
//             </div>`
//           },
//           {
//             type: "quiz",
//             title: "Market Positioning Understanding Check",
//             questions: [
//               {
//                 id: 1,
//                 question: "To segment the market effectively, you should identify:",
//                 options: [
//                   "Groups of customers who share similar values",
//                   "Groups of customers who are the same age",
//                   "Groups of customers who like your business"
//                 ],
//                 correctAnswer: 0,
//                 explanation: "Market segmentation is most effective when based on shared customer values and preferences, as this allows for more targeted and relevant marketing strategies."
//               },
//               {
//                 id: 2,
//                 question: "What is the primary purpose of a value proposition?",
//                 options: [
//                   "To list all product features",
//                   "To state the company's mission",
//                   "To communicate unique value to customers",
//                   "To describe the company history"
//                 ],
//                 correctAnswer: 2,
//                 explanation: "A value proposition communicates why customers should choose your product/service by clearly stating the unique value and benefits they'll receive."
//               }
//             ],
//             feedback: {
//               perfect: "Excellent understanding of market positioning concepts!",
//               good: "Good grasp of the basics, review value proposition creation.",
//               poor: "Please review the market positioning fundamentals again."
//             }
//           }
//         ]
//       },
//       {
//         id: 'module1_lesson3',
//         title: "Digital Branding",
//         content: "Learn how to create effective digital marketing strategies...",
//         duration: "50 minutes",
//         order: 3,
//         moduleId: "module1",
//         courseId: "digital-marketing-101",
//         totalLessons: 10,
//         type: "text",
//         resources: [
//           {
//             title: "Digital Marketing Guide",
//             url: "https://example.com/guide.pdf"
//           }
//         ],
//         sections: [
//           {
//             type: "image",
//             imageUrl: "/assets/images/digital-branding-elements.jpg",
//             alt: "Digital Branding Elements Diagram",
//             caption: "While positioning defines your place in the market and how you want to be perceived, Branding adds the emotional, human, and enduring elements that create a lasting relationship between your brand and your customers."
//           },
//     {
//       type: "text",
//       content: "<h2>Digital branding</h2><p>Digital branding refers to the process of creating and managing a brand's identity, reputation, and presence in the digital realm. It includes all the online channels, platforms, and interactions through which a brand communicates and engages with its target audience. </p>"
//     },
//     {
//       type: "text",
//       content: "<h2>Creating a visual identity</h2><p>Creating a visual identity involves a creation of a combination of <strong>visual design, messaging, consistency, storytelling, emotional connection, and audience engagement. </strong> </p> <p>Your <strong>brand's visual identity</strong> is the first thing that people notice and remember. It includes elements such as logos, colour schemes, typography, and imagery.</p>"
//     },
//     {
//       type: "text",
//       content: "<h2>Visual identity - brand book (brand style guide or brand guidelines)</h2><p>1. <strong>Logo Usage:</strong> how the logo should be used, including clear guidelines on size, spacing, colour variations, and what not to do with the logo. </p><p>2. <strong>Colour Palette:</strong> It defines the brand's official colour palette, including primary and secondary colours, with precise colour codes (e.g., RGB, CMYK, HEX) for various applications.</p> <p>3. <strong>Font book:</strong> the brand book includes guidelines on font selection for headlines, subheadings, and body text. It specifies font families, sizes, and styles.</p> <p>4.<strong>Look book:</strong> Guidelines for the use of photography, illustrations, or graphics within the brand, including preferred styles, themes, and any restrictions</p>"
//     },
//     {
//        type: "text",
//           content: `<h2>Brand Messaging</h2>
//           <p>Brand messaging forms the foundation of how your brand communicates with its audience. It encompasses several key elements that work together to create a consistent and compelling brand narrative:</p>
          
//           <h3>Voice and Tone</h3>
//           <p>Your brand's voice and tone define how you communicate with your audience. This includes:</p>
//           <ul>
//             <li>Communication style (formal, casual, professional, friendly)</li>
//             <li>Language preferences and word choice</li>
//             <li>Writing style guidelines</li>
//             <li>Personality traits that reflect in communication</li>
//           </ul>
    
//           <h3>Taglines and Slogans</h3>
//           <p>These are memorable phrases that capture your brand's essence:</p>
//           <ul>
//             <li>Primary tagline usage guidelines</li>
//             <li>Secondary slogans for different campaigns</li>
//             <li>Proper placement and formatting rules</li>
//             <li>Language variations for different markets</li>
//           </ul>
    
//           <h3>Mission, Vision, and Values</h3>
//           <p>The core elements that drive your brand:</p>
//           <ul>
//             <li>Mission statement - what you do and why</li>
//             <li>Vision statement - where you're heading</li>
//             <li>Core values - principles that guide your actions</li>
//             <li>Brand promises - commitments to your customers</li>
//           </ul>`
     
//     },
//     {
//       type: "text",
//       content: `<h2>Social Media Branding</h2>
//       <p>Social media branding refers to the process of establishing and maintaining a consistent brand identity and presence across various social media platforms. It involves using these platforms strategically to communicate your brand's values, personality, and messaging to your target audience.</p>`
//     },
//     {
//       type: "text",
//       content: `<h3>Essential Social Media Setup Checklist</h3>
//       <ul>
//         <li><strong>Platform Selection:</strong> Consider where your target audience is most active and tailor your presence accordingly. Common platforms include Facebook, Instagram, Twitter, LinkedIn, Pinterest, and YouTube.</li>
//         <li><strong>Profile Setup:</strong> Ensure that your profile picture, cover photo, and bio accurately represent your brand. Use your logo or a recognizable image as your profile picture.</li>
//         <li><strong>Consistent Visual Identity:</strong> Maintain a consistent visual identity across all social media platforms. Use the same colour palette, fonts, and logo variations to reinforce your brand's recognition.</li>
//         <li><strong>Content Strategy:</strong> Create a content calendar to plan and schedule posts. Your content should be relevant, valuable, and engaging to your audience.</li>
//         <li><strong>Engagement and Interaction:</strong> Engage with your audience by responding to comments, messages, and mentions promptly and professionally. Foster conversations and build relationships with your followers.</li>
//       </ul>`
//     },
//     {
//       type: "text",
//       content: `<h2>Content Marketing</h2>
//       <p>Content marketing involves creating valuable and relevant content that aligns with your brand's identity and resonates with your target audience. Consistently deliver content that showcases your expertise, solves customer problems, and reinforces your brand message.</p>`
//     },
//     {
//       type: "text",
//       content: `<h3>Real-World Examples</h3>
//       <h4>Google Web Stories</h4>
//       <p>A web-based format for creating and sharing visual stories on the internet. These stories are designed to be fast-loading, engaging, and visually appealing, making them particularly suitable for mobile devices. Articles that incorporate one video generate 83% more traffic than articles without a video.</p>
      
//       <h4>Patagonia Case Study</h4>
//       <p>Patagonia, a renowned outdoor clothing and equipment supplier, has established itself as a leading eco-friendly brand worldwide. In 2023, they produced a series of high-quality films featuring distance runners racing to protect threatened forests from logging, demonstrating their commitment to environmental causes while engaging their target audience.</p>`
//     },
//     {
//       type: "text",
//       content: `<h3>Key Takeaway</h3>
//       <p>Content marketing is a cost-effective, long-term strategy that can help small and medium-sized businesses increase their online visibility, engage with their audience, and build trust and credibility. Good positioning and branding help raise awareness about your business among potential customers and lead to your products or services.</p>
//       <p><em>Remember: lead generation is the first step in the customer acquisition process. It provides a pool of potential customers to nurture and convert into paying customers.</em></p>`
//     },
//     {
//       type: "quiz",
//       title: "Knowledge Check",
//       questions: [
//         {
//           id: 1,
//           question: "What is the primary goal of creating a brand book in digital branding?",
//           options: [
//             "To showcase customer testimonials",
//             "To promote affiliate marketing partnerships",
//             "To define and maintain a consistent brand identity"
//           ],
//           correctAnswer: 2,
//           explanation: "A brand book's primary purpose is to define and maintain consistent brand identity across all digital platforms, ensuring coherent visual and messaging elements."
//         }
//       ],
//       feedback: {
//         perfect: "Excellent! You understand the importance of brand consistency in digital marketing!",
//         good: "Good understanding, but review the branding concepts again.",
//         poor: "Please review the section on brand identity and consistency."
//       }
//     }
   
//   ],
//       },
//       {
//         id: 'module1_lesson4',
//         title: "Lead generation, conversion and retention",
//         order: 4,
//         moduleId: "module1",
//         courseId: "digital-marketing-101",
//         totalLessons: 10,
//         type: "text",
//         sections: [
//           // Introduction
//           {
//             type: "text",
//             content: `<h2>Lead Generation, Conversion, and Retention</h2>
//             <p>Identifying, capturing potential customers, and retaining them are three essential aspects of digital marketing. They all encompass a wide range of strategies and techniques to build long-term relationships.</p>`
//           },
          
//           // Key Concepts Cards
//           {
//             type: "text",
//             content: `
//             <div class="concept-cards">
//               <div class="card">
//                 <h4>Lead Generation</h4>
//                 <p>Identifying and attracting potential customers (leads)</p>
//               </div>
//               <div class="card">
//                 <h4>Conversion</h4>
//                 <p>Turning leads or potential customers into actual paying customers</p>
//               </div>
//               <div class="card">
//                 <h4>Retention</h4>
//                 <p>Keeping existing customers engaged, satisfied, and loyal to your brand</p>
//               </div>
//             </div>`
//           },
          
//           // Lead Generation Section
//           {
//             type: "text",
//             content: `<h2>Lead Generation</h2>
//             <p>Lead generation is the process of identifying and attracting potential customers (leads) who have shown interest in your products or services. The goal is to capture the contact information or interest of potential customers.</p>
            
//             <h3>Lead Generation Strategies</h3>
//             <ul>
//               <li><strong>Content Marketing:</strong> Creating valuable and relevant content, such as blog posts, videos, infographics, and social media posts. Regular publication of high-quality content addresses target audience's pain points and interests, attracting organic traffic.</li>
//               <li><strong>Search Engine Optimization (SEO):</strong> Optimizing website content to rank higher in search engine results, improving brand discovery.</li>
//               <li><strong>Social Media Marketing (SMM):</strong> Leveraging various social media platforms to reach and engage with potential customers, share content, and build brand awareness.</li>
//               <li><strong>Paid Advertising:</strong> Running targeted online advertising campaigns to reach specific audiences and drive website traffic.</li>
//             </ul>`
//           },
          
//           // Conversion Section
//           {
//             type: "text",
//             content: `<h2>Conversion</h2>
//             <p>Conversion refers to the process of turning leads into actual paying customers. It's essential for revenue generation and business growth.</p>
            
//             <h3>Conversion Metrics</h3>
//             <p>Conversion Rate (%) = (Number of Conversions / Total Visitors) x 100</p>
            
//             <div class="tip-box">
//               <h4>Pro Tip</h4>
//               <p>To track customer lead sources effectively, use distinct promo codes for each source and track their usage. This method enables thorough analysis and helps identify the most efficient lead sources.</p>
//             </div>`
//           },
          
//           // Retention Section
//           {
//             type: "text",
//             content: `<h2>Retention</h2>
//             <p>Customer retention is the ongoing process of keeping existing customers engaged, satisfied, and loyal to your brand. Retaining customers is often more cost-effective than acquiring new ones.</p>
            
//             <h3>Retention Strategies</h3>
//             <ul>
//               <li><strong>Customer Loyalty Programs:</strong> Implementing programs that offer rewards, discounts, or exclusive offers to repeat customers.</li>
//               <li><strong>Remarketing and Retargeting:</strong> Targeting ads to previous customers to encourage repeat engagement.</li>
//               <li><strong>Personalization:</strong> Using customer data to create personalized marketing messages and offers.</li>
//               <li><strong>Customer Support and Engagement:</strong> Providing excellent support through various digital channels.</li>
//             </ul>`
//           },
          
//           // Knowledge Check Quiz
//           {
//             type: "quiz",
//             title: "Understanding Lead Generation and Customer Retention",
//             questions: [
//               {
//                 id: 1,
//                 question: "What is the primary purpose of lead generation in digital marketing?",
//                 options: [
//                   "To increase social media followers",
//                   "To identify and attract potential customers",
//                   "To reduce marketing costs",
//                   "To improve website design"
//                 ],
//                 correctAnswer: 1,
//                 explanation: "Lead generation is fundamentally about identifying and attracting potential customers who have shown interest in your products or services."
//               }
//             ],
//             feedback: {
//               perfect: "Excellent understanding of lead generation concepts!",
//               good: "Good grasp of the basics, but review some key points.",
//               poor: "Please review the lead generation section again."
//             }
//           }
//         ]
//       },
//       {
//         id:'module2_lesson1',
//         title: "Social Media Marketing",
//         order: 1,
//         moduleId: "module2",
//         courseId: "digital-marketing-101",
//         totalLessons: 10,
//        sections: [
//         {
//           type: "text",
//           content: `<h2>Social Media Marketing (SMM)</h2>
//           <p>Social Media Marketing (SMM) is the use of social media platforms to promote products, services, or brands. It's a powerful tool for businesses to connect with their audience, build brand awareness, and drive engagement.</p>
          
//           <h3>Key Activities</h3>
//           <ul>
//             <li>Social media posting</li>
//             <li>Community engagement</li>
//             <li>Social media advertising</li>
//             <li>Influencer collaboration</li>
//           </ul>`
//         },
//         {
//           type: "text",
//           content: `<h2>Significance of Social Media Marketing</h2>
//           <ul>
//             <li><strong>Global Reach and Accessibility:</strong> Connect with potential customers regardless of geographical boundaries.</li>
//             <li><strong>Brand Awareness and Recognition:</strong> Enhance visibility and establish brand personality through consistent content.</li>
//             <li><strong>Engagement and Relationship Building:</strong> Enable direct communication and foster community around the brand.</li>
//             <li><strong>Data and Analytics:</strong> Measure campaign performance through various metrics.</li>
//           </ul>
          
//           <p class="case-study">When done right, social media marketing goes beyond revenue generation. For example, Dove's success demonstrates how a good social media strategy can build trust and positively impact lives.</p>`
//         },
//         {
//           type: "text",
//           content: `<h2>Setting Objectives and Goals</h2>
//           <p>Clear objectives and goals that align with overall business strategy are crucial. Common social media marketing goals include:</p>
          
//           <div class="goal-cards">
//             <div class="card">
//               <h4>Engagement</h4>
//               <p>Target: 20% increase in Facebook engagement rate through prompt responses and interactive polls.</p>
//             </div>
//             <div class="card">
//               <h4>Lead Generation</h4>
//               <p>Target: 500 new monthly leads through Twitter e-book promotion and landing page sign-ups.</p>
//             </div>
//             <div class="card">
//               <h4>Sales</h4>
//               <p>Target: 25% increase in social media-driven sales through targeted advertising and exclusive discounts.</p>
//             </div>
//           </div>`
//         },
//         {
//           type: "text",
//           content: `<h2>Content Strategy</h2>
//           <p>A solid content strategy is essential for successful social media marketing. It should be concise and actionable.</p>
          
//           <h3>Key Elements</h3>
//           <ul>
//             <li><strong>Consistency:</strong> Create and maintain a regular posting schedule aligned with audience engagement peaks.</li>
//             <li><strong>Variety:</strong> Diversify content with educational posts, behind-the-scenes content, promotions, and user-generated content.</li>
//             <li><strong>Relevance:</strong> Address audience pain points and aspirations with targeted content.</li>
//             <li><strong>Visual Appeal:</strong> Create eye-catching graphics and videos for increased engagement.</li>
//           </ul>
          
//           <h3>Building Your Strategy</h3>
//           <ol>
//             <li><strong>Define Target Audience:</strong> Develop audience personas to guide content creation.</li>
//             <li><strong>Set Content Goals:</strong> Align SMART goals with social media objectives.</li>
//             <li><strong>Choose Content Types and Channels:</strong> Diversify content formats based on audience preferences.</li>
//             <li><strong>Develop Content Calendar:</strong> Plan content ahead for consistent posting.</li>
//             <li><strong>Incorporate Brand Personality:</strong> Maintain consistent brand presentation.</li>
//             <li><strong>Encourage Engagement:</strong> Foster community through interactive content.</li>
//           </ol>`
//         },
//         {
//           type: "text",
//           content: `<h2>Measuring Performance</h2>
//           <h3>Key Metrics to Monitor</h3>
//           <ul>
//             <li><strong>Engagement Rate:</strong> Measures audience interaction with posts</li>
//             <li><strong>Reach and Impressions:</strong> Tracks content visibility and views</li>
//             <li><strong>Click-Through Rate (CTR):</strong> Measures call-to-action effectiveness</li>
//             <li><strong>Conversion Rate:</strong> Tracks completion of desired actions</li>
//           </ul>
          
//           <p class="tip">Analytics provide insights to refine your strategy. Regular assessment and data-driven adjustments are crucial for success.</p>`
//         },
//         {
//           type: "quiz",
//           title: "Social Media Marketing Understanding Check",
//           questions: [
//             {
//               id: 1,
//               question: "What is the first step in developing a social media marketing strategy?",
//               options: [
//                 "Content Creation",
//                 "Setting Objectives",
//                 "Engaging with the Audience"
//               ],
//               correctAnswer: 1,
//               explanation: "Setting clear objectives is the crucial first step as it guides all subsequent strategic decisions and ensures alignment with business goals."
//             }
//           ],
//           feedback: {
//             perfect: "Excellent understanding of social media marketing fundamentals!",
//             good: "Good grasp of the basics, but review the strategic planning section.",
//             poor: "Please review the section on strategy development."
//           }
//         }
//        ]
//       },
//      {
//        id:'module2_lesson2',
//       title: "Choosing the right social media channel",
//       order: 1,
//       moduleId: "module2",
//       courseId: "digital-marketing-101",
//       totalLessons: 10,
//       sections: [
//         // Introduction
//         {
//           type: "text",
//           content: `<h2>Choosing the Right Social Media Channel</h2>
//           <p>Not all social platforms fit every business, so you don't need to be active on every network. The key is to prioritize wisely and make informed choices based on your business goals, target audience, and content strategy.</p>`
//         },
        
//         // Platform Selection Criteria
//         {
//           type: "text",
//           content: `<h3>Key Selection Criteria</h3>
//           <ul>
//             <li><strong>Audience Demographics:</strong> Analyze each platform's user base by age, gender, location, and interests. Choose platforms where your target audience is most active.</li>
//             <li><strong>Content Type and Format:</strong> Different platforms favor different content types - Instagram for visuals, Twitter for concise text. Align your strategy accordingly.</li>
//           </ul>`
//         },
        
//         // Platform Categories
//         {
//           type: "text",
//           content: `<h2>Types of Social Media Platforms</h2>
          
//           <h3>1. Community-based Social Platforms</h3>
//           <p>Online spaces where individuals with shared interests connect and engage in discussions.</p>
          
//           <div class="platform-details">
//             <div class="platform">
//               <h4>Instagram</h4>
//               <p><strong>Strengths:</strong></p>
//               <ul>
//                 <li>Ideal for visual content (fashion, travel, food)</li>
//                 <li>Excellent for brand storytelling</li>
//                 <li>Strong influencer partnerships</li>
//               </ul>
//               <p><strong>Weaknesses:</strong></p>
//               <ul>
//                 <li>Limited link sharing</li>
//                 <li>High competition in certain niches</li>
//               </ul>
//             </div>
    
//             <div class="platform">
//               <h4>Facebook</h4>
//               <p><strong>Strengths:</strong></p>
//               <ul>
//                 <li>Massive user base</li>
//                 <li>Versatile features (Pages, Groups)</li>
//                 <li>Sophisticated targeting options</li>
//               </ul>
//               <p><strong>Weaknesses:</strong></p>
//               <ul>
//                 <li>Declining organic reach</li>
//                 <li>Less active younger demographics</li>
//               </ul>
//             </div>
    
//             <div class="platform">
//               <h4>LinkedIn</h4>
//               <p><strong>Strengths:</strong></p>
//               <ul>
//                 <li>Professional networking</li>
//                 <li>B2B marketing opportunities</li>
//                 <li>Thought leadership platform</li>
//               </ul>
//               <p><strong>Weaknesses:</strong></p>
//               <ul>
//                 <li>Limited consumer business appeal</li>
//                 <li>Less effective for younger demographics</li>
//               </ul>
//             </div>
//           </div>
    
//           <h3>2. Discovery-focused Platforms</h3>
//           <p>Platforms designed for content exploration and inspiration.</p>
          
//           <div class="platform-details">
//             <div class="platform">
//               <h4>Pinterest</h4>
//               <p><strong>Strengths:</strong></p>
//               <ul>
//                 <li>Visual content discovery</li>
//                 <li>Diverse niche categories</li>
//                 <li>High purchase intent</li>
//               </ul>
//               <p><strong>Weaknesses:</strong></p>
//               <ul>
//                 <li>Female-skewed demographics</li>
//                 <li>Complex algorithm optimization</li>
//               </ul>
//             </div>
    
//             <div class="platform">
//               <h4>TikTok</h4>
//               <p><strong>Strengths:</strong></p>
//               <ul>
//                 <li>Highly engaging format</li>
//                 <li>Strong younger demographic</li>
//                 <li>Viral potential</li>
//               </ul>
//               <p><strong>Weaknesses:</strong></p>
//               <ul>
//                 <li>Short content lifespan</li>
//                 <li>Complex algorithm</li>
//               </ul>
//             </div>
//           </div>
    
//           <h3>3. Messaging Apps</h3>
//           <p>Platforms for direct communication and customer service.</p>
          
//           <div class="platform-details">
//             <div class="platform">
//               <h4>WhatsApp</h4>
//               <p><strong>Strengths:</strong></p>
//               <ul>
//                 <li>Global user base</li>
//                 <li>Direct customer communication</li>
//                 <li>Multimedia sharing capabilities</li>
//               </ul>
//               <p><strong>Weaknesses:</strong></p>
//               <ul>
//                 <li>Network-dependent growth</li>
//                 <li>Credibility building challenges</li>
//               </ul>
//             </div>
    
//             <div class="platform">
//               <h4>Telegram</h4>
//               <p><strong>Strengths:</strong></p>
//               <ul>
//                 <li>Privacy and security focus</li>
//                 <li>Broadcasting capabilities</li>
//                 <li>Personalized experience</li>
//               </ul>
//               <p><strong>Weaknesses:</strong></p>
//               <ul>
//                 <li>Smaller user base</li>
//                 <li>Limited monetization options</li>
//               </ul>
//             </div>
//           </div>`
//         },
        
//         // Profile Creation Guide
//         {
//           type: "text",
//           content: `<h2>Creating an Effective Social Media Profile</h2>
//           <p>A strong profile is crucial for business success on social media. Follow these key steps:</p>
          
//           <div class="profile-setup-guide">
//             <div class="step">
//               <h4>1. Profile Picture</h4>
//               <ul>
//                 <li>Use high-quality images</li>
//                 <li>Ensure brand consistency</li>
//                 <li>Consider thumbnail visibility</li>
//                 <li>Choose between logo or professional photo</li>
//               </ul>
//             </div>
            
//             <div class="step">
//               <h4>2. Bio and Business Information</h4>
//               <ul>
//                 <li>Write concise, compelling bio</li>
//                 <li>Include essential contact details</li>
//                 <li>Clarify value proposition</li>
//                 <li>Add location information</li>
//               </ul>
//             </div>
            
//             <div class="step">
//               <h4>3. Cover Photo</h4>
//               <ul>
//                 <li>Complement brand identity</li>
//                 <li>Showcase products/services</li>
//                 <li>Maintain visual consistency</li>
//                 <li>Update regularly</li>
//               </ul>
//             </div>
            
//             <div class="step">
//               <h4>4. Verification</h4>
//               <ul>
//                 <li>Apply for business verification</li>
//                 <li>Follow platform guidelines</li>
//                 <li>Build trust through official status</li>
//               </ul>
//             </div>
            
//             <div class="step">
//               <h4>5. Website Integration</h4>
//               <ul>
//                 <li>Add functional website links</li>
//                 <li>Create targeted landing pages</li>
//                 <li>Keep links updated</li>
//                 <li>Track click-through rates</li>
//               </ul>
//             </div>
//           </div>`
//         }
//       ]
//      },
//      {
//       id: 'module2_lesson3',
//       title: "Creating Marketing Content",
//       order: 1,
//       moduleId: "module2",
//       courseId: "digital-marketing-101",
//       totalLessons: 10,
//       sections: [
//         // Introduction
//         {
//           type: "text",
//           content: `<h2>Creating Engaging Content</h2>
//           <p>Creating engaging content is important as it captivates your audience, fosters meaningful connections, and establishes a memorable online presence. Content creation follows a strategic approach, starting with objectives and audience analysis before moving into story development.</p>`
//         },
        
//         // Story Development
//         {
//           type: "text",
//           content: `<h2>Steps to Develop a Compelling Story</h2>
//           <div class="steps-container">
//             <div class="step">
//               <h3>1. Craft Your Brand Story</h3>
//               <ul>
//                 <li>Develop a story aligned with values, mission, and vision</li>
//                 <li>Highlight unique brand attributes</li>
//                 <li>Connect with audience values</li>
//               </ul>
//             </div>
            
//             <div class="step">
//               <h3>2. Identify Key Messages</h3>
//               <ul>
//                 <li>Define core messages for content</li>
//                 <li>Ensure brand story consistency</li>
//                 <li>Validate audience resonance</li>
//               </ul>
//             </div>
            
//             <div class="step">
//               <h3>3. Choose Theme or Narrative Arc</h3>
//               <ul>
//                 <li>Select central theme</li>
//                 <li>Develop consistent narrative</li>
//                 <li>Align with brand identity</li>
//               </ul>
//             </div>
//           </div>`
//         },
        
//         // Content Planning
//         {
//           type: "text",
//           content: `<h2>Content Plan Development</h2>
//           <p>A content plan serves as a strategic roadmap for creating, organizing, and distributing content to achieve specific goals. It encompasses multiple platforms and content types while maintaining consistency in messaging and brand voice.</p>
          
//           <h3>Essential Elements of Content Planning</h3>
//           <ul>
//             <li>Content type determination (blogs, videos, infographics)</li>
//             <li>Publishing schedule development</li>
//             <li>Platform-specific strategy</li>
//             <li>Audience engagement opportunities</li>
//             <li>Visual content integration</li>
//           </ul>`
//         },
        
//         // Visual Content
//         {
//           type: "text",
//           content: `<h2>Visual Content Creation</h2>
//           <p>Visual content is crucial for capturing attention in fast-moving social feeds. High-quality visuals can significantly improve engagement and message retention.</p>
          
//           <h3>Photography Tips for Content Creation</h3>
//           <ul>
//             <li>Utilize natural lighting for clarity</li>
//             <li>Apply the rule of thirds</li>
//             <li>Use basic editing tools effectively</li>
//             <li>Maintain consistent visual style</li>
//           </ul>`
//         },
        
//         // Brand Awareness
//         {
//           type: "text",
//           content: `<h2>Building Brand Awareness</h2>
//           <p>Brand awareness forms the foundation of business success, contributing to trust-building and organic growth through word-of-mouth referrals.</p>
          
//           <h3>Key Strategies</h3>
//           <ul>
//             <li>Consistent visual branding</li>
//             <li>Strategic hashtag usage</li>
//             <li>Collaborative partnerships</li>
//             <li>Regular audience engagement</li>
//           </ul>`
//         },
        
//         // Organic Content
//         {
//           type: "text",
//           content: `<h2>Creating Organic Content</h2>
//           <p>Organic content builds authentic connections and fosters brand loyalty without paid promotion. Success in organic content requires understanding audience preferences and maintaining consistent engagement.</p>
          
//           <h3>Building Audience Engagement</h3>
//           <ul>
//             <li>Maintain posting consistency</li>
//             <li>Create interactive content</li>
//             <li>Share authentic brand stories</li>
//             <li>Personalize user experience</li>
//             <li>Implement loyalty programs</li>
//           </ul>`
//         },
        
//         // User Generated Content
//         {
//           type: "text",
//           content: `<h2>User-Generated Content (UGC)</h2>
//           <p>UGC adds authenticity and community engagement to your social media strategy. It leverages content created by your audience to build trust and increase engagement.</p>
          
//           <h3>Benefits of UGC</h3>
//           <div class="benefits-grid">
//             <div class="benefit">
//               <h4>Trust Building</h4>
//               <p>Peer-created content generates higher trust levels than brand-created content</p>
//             </div>
//             <div class="benefit">
//               <h4>Enhanced Engagement</h4>
//               <p>UGC posts typically receive higher engagement rates</p>
//             </div>
//             <div class="benefit">
//               <h4>Content Diversity</h4>
//               <p>Adds variety and authenticity to your content strategy</p>
//             </div>
//           </div>`
//         },
        
//         // Knowledge Check
//         {
//           type: "quiz",
//           title: "Content Creation Understanding Check",
//           questions: [
//             {
//               id: 1,
//               question: "What is the primary benefit of user-generated content?",
//               options: [
//                 "Lower production costs",
//                 "Increased audience trust",
//                 "Faster content creation",
//                 "Better SEO rankings"
//               ],
//               correctAnswer: 1,
//               explanation: "User-generated content primarily builds trust as people tend to trust content created by their peers more than brand-created content."
//             }
//           ],
//           feedback: {
//             perfect: "Excellent understanding of content creation principles!",
//             good: "Good grasp of the basics, but review some key points.",
//             poor: "Please review the content creation strategies again."
//           }
//         }
//       ]
//     },
//     {
//       id: 'module2_lesson4',
//       title: "Social Media Marketing Tools",
//       order: 1,
//       moduleId: "module2",
//       courseId: "digital-marketing-101",
//       totalLessons: 10,
//       sections:[
//         {
//           type: "text",
//           content: `<h2>Social Media Marketing Tools</h2>
//           <p>Let's explore some essential tools that can help streamline and enhance your social media marketing efforts. These tools are designed to make content creation, scheduling, and analytics more efficient and effective.</p>`
//         },
//         {
//           type: "text",
//           content: `<h3>Content Creation Tools</h3>
//           <div class="tool-section">
//             <div class="tool-card">
//               <h4>Canva</h4>
//               <p>A versatile design platform that makes creating beautiful creative assets accessible to everyone:</p>
//               <ul>
//                 <li>Social media images and videos</li>
//                 <li>GIFs and animations</li>
//                 <li>Posters and presentations</li>
//                 <li>Marketing materials</li>
//               </ul>
//               <p class="tool-link">Learn more: <a href="https://www.canva.com/learn/how-to-canva-beginners-guide/" target="_blank" rel="noopener">Canva Beginner's Guide</a></p>
//             </div>
//           </div>`
//         },
//         {
//           type: "video",
//           content: `<div class="video-container">
//             <h4>Getting Started with Canva</h4>
//             <iframe 
//               src="https://www.youtube.com/embed/sample-canva-video" 
//               title="Canva for Beginners: Opening Canva"
//               allowfullscreen>
//             </iframe>
//           </div>`
//         },
//         {
//           type: "text",
//           content: `<h3>Management and Scheduling Tools</h3>
//           <div class="tool-section">
//             <div class="tool-card">
//               <h4>Buffer</h4>
//               <p>A comprehensive platform for social media management:</p>
//               <ul>
//                 <li>Schedule posts across multiple platforms</li>
//                 <li>Track post performance</li>
//                 <li>Analyze audience engagement</li>
//                 <li>Manage team collaboration</li>
//               </ul>
//               <p class="tool-link">Explore: <a href="https://buffer.com/" target="_blank" rel="noopener">Buffer Platform</a></p>
//             </div>
//           </div>`
//         },
//         {
//           type: "text",
//           content: `<h3>Analytics Tools</h3>
//           <div class="tool-section">
//             <div class="tool-card">
//               <h4>Google Analytics</h4>
//               <p>Comprehensive web analytics platform that helps track:</p>
//               <ul>
//                 <li>Website traffic from social media</li>
//                 <li>User behavior and engagement</li>
//                 <li>Conversion tracking</li>
//                 <li>Campaign performance</li>
//               </ul>
//               <p class="tool-link">Learn more: <a href="https://marketingplatform.google.com/about/analytics/" target="_blank" rel="noopener">Google Analytics</a></p>
//             </div>
        
//             <div class="tool-card">
//               <h4>Facebook Page Insights</h4>
//               <p>Built-in analytics for Facebook business pages:</p>
//               <ul>
//                 <li>Page performance metrics</li>
//                 <li>Post engagement analytics</li>
//                 <li>Audience insights</li>
//                 <li>Reach and impression data</li>
//               </ul>
//               <p class="tool-link">Documentation: <a href="https://www.facebook.com/business/help/633309530105735" target="_blank" rel="noopener">Facebook Insights Guide</a></p>
//             </div>
//           </div>`
//         },
//         {
//           type: "text",
//           content: `<div class="module-completion">
//             <h3>Module Completion</h3>
//             <p>Congratulations! You've completed the "Effective Social Media Marketing Strategies" module. You now have a solid understanding of the essential tools used in social media marketing.</p>
//           </div>`
//         },
//         {
//           type: "quiz",
//           title: "Social Media Tools Assessment",
//           questions: [
//             {
//               id: 1,
//               question: "Which tool is best suited for creating visual content for social media?",
//               options: [
//                 "Google Analytics",
//                 "Buffer",
//                 "Canva",
//                 "Facebook Insights"
//               ],
//               correctAnswer: 2,
//               explanation: "Canva is specifically designed for creating visual content like social media images, videos, and marketing materials."
//             }
//           ],
//           feedback: {
//             perfect: "Excellent understanding of social media marketing tools!",
//             good: "Good knowledge of the tools. Review their specific features for better utilization.",
//             poor: "Please review the tools section again to understand their purposes and benefits."
//           }
//         }
//       ]
//     }
    
//     ]
      

//     // Add each lesson
//     for (const lesson of lessons) {
//       const { id, ...lessonData } = lesson;
//       await setDoc(doc(db, 'lessons', id), lessonData);
//       console.log(`Lesson ${id} added successfully`);
//     }

//     return { success: true, message: 'Data initialized successfully' };
//   } catch (error) {
//     console.error('Error initializing data:', error);
//     return { success: false, message: error.message };
//   }
// };