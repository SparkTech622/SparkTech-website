import {} from 'react';
import { Link } from 'react-router-dom';
// import services from '../assets/Services';

function Services() {

  return (
    <main className="py-10 bg-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl text-center font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 text-center text-lg mb-6">
            Choose the perfect solution for your business
          </p>
        </header>

        <section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-label="services-list"
        >
  {/* Add this new article for Custom Web Design */}
  <article 
    className="bg-quinary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
  >
    <div className="flex flex-col h-full">
      <header>
        <h2 className="text-2xl text-primary font-bold mb-6">
          Custom Web Design & Development
        </h2>
      </header>
      <div className="flex-grow">
        <p className="text-secondary mb-4 leading-relaxed">
          Professional, responsive websites tailored to your business needs. Includes:
        </p>
        <ul className="text-secondary mb-8 space-y-2">
          <li className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Custom Design & Development</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Responsive Mobile Design</span>
          </li>
          {/* <li className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>SEO Optimization</span>
          </li> */}
        </ul>
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-2">Starting from</p>
          <span className="text-lg font-semibold">KSH</span>
          <span className="text-4xl font-bold">9,000</span>
        </div>
      </div>
      <footer className="flex flex-col gap-3">
        <Link 
          to="/website-pricing"
          className="w-full bg-primary text-white py-3 rounded-full hover:bg-green-500 transition duration-300 flex items-center justify-center space-x-2"
        >
          View Pricing Plans
        </Link>
        <a
          href={`https://wa.me/254796591251?text=${encodeURIComponent(`Hello, I'm interested in your Custom Web Design & Development services. Can we discuss more details about pricing and features?`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full border-2 hover:bg-green-500 border-primary text-primary py-3 rounded-full hover:bg-primary/10 transition duration-300 flex items-center justify-center space-x-2"
          aria-label="Chat on WhatsApp about Custom Web Design & Development"
        >
          <span>Discuss Project</span>
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
        </a>
      </footer>
    </div>
  </article>
 

<article 
  className="bg-quinary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
>
  <div className="flex flex-col h-full">
    <header>
      <h2 className="text-2xl text-primary font-bold mb-6">
        Advanced Digital Marketing Class
      </h2>
    </header>
    <div className="flex-grow">
      <p className="text-secondary mb-4 leading-relaxed">
        Master modern digital marketing strategies and tools to grow your business online. Comprehensive training suitable for beginners and marketing professionals.
      </p>
      <ul className="text-secondary mb-8 space-y-2">
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Social Media Marketing</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Email Marketing Strategies</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Content Marketing </span>
        </li>
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Analytics & Performance Tracking</span>
        </li>
      </ul>


      <div className="text-center mb-8">
        <p className="text-sm text-gray-600 mb-2">Course Fee</p>
        <div className="mb-2">
          <span className="text-lg font-semibold">KSH </span>
          <span className="text-4xl font-bold">2,000</span>
        </div>
        <p className="text-sm text-primary font-medium">
          Flexible learning schedule
        </p>
      </div>
    </div>
    <footer className="flex flex-col gap-3">
      <Link to="/dashboard" className="w-full bg-primary text-white py-3 rounded-full hover:bg-green-500 transition duration-300 flex items-center justify-center space-x-2">
        <span>Get Started</span>
      </Link>
    </footer>
  </div>
</article>

{/* Replace the Posters and Flyers article */}
<article 
  className="bg-quinary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
>
  <div className="flex flex-col h-full">
    <header>
      <h2 className="text-2xl text-primary font-bold mb-6">
        Professional Poster & Flyer Design
      </h2>
    </header>
    <div className="flex-grow">
      <p className="text-secondary mb-4 leading-relaxed">
        Eye-catching, professional designs that help your business stand out. Perfect for events, promotions, and marketing campaigns.
      </p>
      <ul className="text-secondary mb-8 space-y-2">
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Custom Design Creation</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>High-Resolution Files</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Print-Ready Formats</span>
        </li>
      </ul>


      <div className="text-center mb-8">
        <p className="text-sm text-gray-600 mb-2">Starting from</p>
        <div className="mb-2">
          <span className="text-lg font-semibold">KSH</span>
          <span className="text-4xl font-bold">500</span>
        </div>
       
      </div>
    </div>
    <footer>
      <a
        href={`https://wa.me/254796591251?text=${encodeURIComponent("Hello, I need a professional poster/flyer design for my business. Can we discuss the details?")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-primary text-white py-3 rounded-full hover:bg-green-500 transition duration-300 flex items-center justify-center space-x-2"
        aria-label="Start designing on WhatsApp"
      >
        <span>Start Designing</span>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </a>
    </footer>
  </div>
</article>

            <article 
  className="bg-quinary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
>
  <div className="flex flex-col h-full">
    <header>
      <h2 className="text-2xl text-primary font-bold mb-6">
        SEO Implementation & Optimization
      </h2>
    </header>
    <div className="flex-grow">
      <p className="text-secondary mb-4 leading-relaxed">
        Boost your website&apos;s visibility and attract more organic traffic with our comprehensive SEO services. Get higher rankings on Google and other search engines.
      </p>
      <ul className="text-secondary mb-8 space-y-2">
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Keyword Research & Analysis</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>On-Page SEO Optimization</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Technical SEO Implementation</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Performance Optimization</span>
        </li>
      </ul>

      <div className="text-center mb-8">
        <p className="text-sm text-gray-600 mb-2">Starting from</p>
        <div className="mb-2">
          <span className="text-lg font-semibold">KSH</span>
          <span className="text-4xl font-bold">2,500</span>
        </div>
        <p className="text-sm text-primary font-medium">
          One-time optimization with lasting results
        </p>
      </div>
    </div>
    
    <footer className="flex flex-col gap-3">
      <a
        href={`https://wa.me/254796591251?text=${encodeURIComponent("Hello, I'm interested in your SEO Implementation service. I'd like to improve my website's search engine rankings. Can we discuss how you can help?")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-primary hover:bg-green-500 text-white py-3 rounded-full  transition duration-300 flex items-center justify-center space-x-2"
        aria-label="Get SEO Consultation on WhatsApp"
      >
        <span>Schedule Consultation</span>
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </a>
    </footer>
  </div>
</article>

            <article 
  className="bg-quinary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
>
  <div className="flex flex-col h-full">
    <header>
      <h2 className="text-2xl text-primary font-bold mb-6">
        Web Design and Development Classes
      </h2>
    </header>
    <div className="flex-grow">
      <p className="text-secondary mb-4 leading-relaxed">
        Master the art of web development with our comprehensive hands-on training. Perfect for beginners and intermediate developers looking to enhance their skills.
      </p>
      <ul className="text-secondary mb-8 space-y-2">
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>HTML5, CSS3 & JavaScript Fundamentals</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>React.js & Modern Web Development</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Responsive Design Principles</span>
        </li>
      </ul>
      <div className="text-center mb-8">
        <p className="text-sm text-gray-700 mb-2">Flexible Learning Options</p>
        <div className="mb-2">
          <span className="text-lg font-semibold">KSH</span>
          <span className="text-4xl font-bold">300</span>
          <span className="text-sm text-gray-600">/hour</span>
        </div>
        <p className="text-sm text-primary font-semibold">
          One-on-one mentoring available
        </p>
      </div>
    </div>
    <footer className="flex flex-col gap-3">
      <a
        href={`https://wa.me/254796591251?text=${encodeURIComponent(`Hello, I'm interested in your Web Development and Design Classes. I'd like to know more about the schedule and curriculum.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full border-2 border-primary text-primary py-3 rounded-full hover:bg-green-500 transition duration-300 flex items-center justify-center space-x-2"
        aria-label="Inquire about Web Development Classes"
      >
        <span>Schedule </span>
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </a>
    </footer>
  </div>
</article>

       
        </section>
      </div>
    </main>
  );
}

export default Services;
