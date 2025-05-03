import { Instagram } from 'lucide-react';
import Contact from './Contact';
import Testimonials from './Testimonials';
import About from './About';
import { Link } from 'react-router-dom';
import Services from './Services';

function Homepage() {
 

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="w-full min-h-screen pt-20 bg-gradient-to-r from-quaternary to-quinary"
        aria-label="hero section"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
            {/* Hero Content */}
            <article className="w-full lg:w-1/2 text-primary space-y-8 -mt-28 mb-8 lg:mb-0">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
    Transform Your Digital Presence
  </h1>
  
  <div className="space-y-6">
    <p className="text-lg md:text-xl leading-relaxed">
      Welcome to SparkTech Solutions - Your One-Stop Digital Excellence Hub in Kenya. We transform ideas into powerful digital solutions.
    </p>

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg">
      <li className="flex items-start space-x-2">
        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Custom Web Design & Development</span>
      </li>
      <li className="flex items-start space-x-2">
        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Web Application Development</span>
      </li>
      <li className="flex items-start space-x-2">
        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Digital Marketing Solutions</span>
      </li>
      <li className="flex items-start space-x-2">
        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>SEO Implementation</span>
      </li>
    </ul>

    <div className="pt-4">
      <p className="text-lg md:text-xl font-medium">
        🎓 Learn with Us: Professional Web Development & Digital Marketing Classes
      </p>
      <p className="text-base md:text-lg mt-2 text-gray-700">
        Join our expert-led courses and master the skills needed in today&apos;s digital world.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 pt-6">
      <Link 
        to="/online-services" 
        className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-center font-medium"
      >
        Explore Services
      </Link>
      {/* <Link 
        to="/dashboard" 
        className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors text-center font-medium"
      >
        Get Started
      </Link> */}
    </div>
  </div>
</article>

            {/* Welcome Card */}
        
<aside 
  className="w-full lg:w-1/2 flex h-[500px] md:-mt-20 justify-center lg:justify-end"
  aria-labelledby="welcome-heading"
>
  <div className="bg-primary p-1 rounded-xl shadow-xl max-w-md w-full">
    <section className="bg-white rounded-lg p-8 h-full">
      <div className="text-center space-y-6">
        <span 
          className="text-5xl mb-4 inline-block animate-bounce" 
          role="img" 
          aria-label="welcome emoji"
        >
          👋
        </span>
        
        <div className="space-y-4 welcome-text-container">
          <h2 
            id="welcome-heading"
            className="text-4xl font-bold animate-bounce-text text-gradient-primary"
          >
            Welcome
          </h2>
          
          <p className="text-4xl font-bold animate-slide-text text-gradient-secondary">
            To
          </p>
          
          <div className="animate-dance">
            <h3 className="text-4xl font-bricksons font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              SPARK
            </h3>
          </div>
          
          <div className="animate-float">
            <h3 className="text-4xl font-bisdak font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              TECH
            </h3>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 pt-4 animate-pulse">
          <Instagram 
            className="w-6 h-6 text-pink-600" 
            aria-hidden="true" 
          />
          <a 
            href="https://instagram.com/spark_techsolutions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            aria-label="Follow us on Instagram @spark_techsolutions"
          >
            @spark_techsolutions
          </a>
        </div>
      </div>
    </section>
  </div>
</aside>
          </div>
        </div>
      </section>

     
       <Services/>
      <Testimonials />
      <About/>
      <Contact />
    </main>
  );
}

export default Homepage;