import {} from 'react';
import { Instagram, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import tiktok from '../assets/images/tiktok.png'
import whatsapp from '../assets/images/whatsapp.png'

import logo from '../assets/images/logo2.png';

const Footer = () => {
  const socialLinks = {
    instagram: "https://www.instagram.com/spark_techsolutions",
    tiktok: "https://www.tiktok.com/@sparktechsolution",
    linkedin: "https://www.linkedin.com/in/peter-k-336100262",
    whatApp: "https://wa.me/254796591251",
  };

  return (
    <footer className="bg-primary text-tertiary" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <section aria-labelledby="company-info">
            <div className='flex flex-row gap-2'  aria-hidden="true">
            <img src={logo} alt="sparktech logo" className='w-8 h-8' />
            <h2 id="company-info" className="text-quinary font-bold text-lg mb-4">SparkTech Solutions</h2>
            </div>
            
            <p className="text-sm mb-4">Innovation Meets Excellence.</p>
            <nav aria-label="Social media links">
              <ul className="flex space-x-4">
                <li>
                  <a href={socialLinks.linkedin} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     aria-label="Visit our LinkedIn profile">
                    <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={socialLinks.instagram} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     aria-label="Visit our Instagram profile">
                    <Instagram className="w-5 h-5 hover:text-white cursor-pointer" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={socialLinks.tiktok} 
                  className='hover:text-white'
                     target="_blank" 
                     rel="noopener noreferrer"
                     aria-label="Visit our Instagram profile">
                    <img src={tiktok} alt="Tiktok" className="w-6 h-6   cursor-pointer" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={socialLinks.whatApp} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     aria-label="Visit our WhatsApp profile">
                    <img src={whatsapp} alt="WhatsApp" className="w-6 h-6   cursor-pointer" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          {/* Quick Links */}
          <nav aria-labelledby="quick-links">
            <h2 id="quick-links" className="text-quinary font-bold text-lg mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="online-services" className="hover:text-white transition-colors">Services</Link></li>
            </ul>
          </nav>

          {/* Support */}
          <nav aria-labelledby="support-links">
            <h2 id="support-links" className="text-quinary font-bold text-lg mb-4">Support</h2>
            <ul className="space-y-2">
              {/* <li><Link to="faq" className="hover:text-white transition-colors">FAQ</Link></li> */}
              <li><Link to="https://wa.me/254796591251" className="hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <section aria-labelledby="contact-info">
            <h2 id="contact-info" className="text-quinary font-bold text-lg mb-4">Contact Us</h2>
            <address className="space-y-4 not-italic">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" aria-hidden="true" />
                <a href="mailto:alphatech1798@gmail.com" 
                   className="hover:text-quinary hover:underline transition-colors">
                  sparktech1798@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <a href="tel:+254796591251" 
                   className="hover:text-quinary transition-colors">
                  +254 79659-1251
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <p>Ngong Town<br />Kajiado, Kenya</p>
              </div>
            </address>
          </section>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-1  pt-2 text-sm text-center">
          <small>&copy; {new Date().getFullYear()} SparkTech Solutions. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;