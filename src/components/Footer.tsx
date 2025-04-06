
import React from 'react';
import { Mail, Linkedin, ArrowUp, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Aryan Rajput</h3>
            <p className="mt-2 text-gray-300">IT Support Specialist</p>
            <p className="mt-1 text-gray-400">Mississauga, ON</p>
            <p className="mt-1 text-gray-400">
              <a href="tel:365-476-4945" className="hover:text-tech transition-colors">
                <Phone className="h-4 w-4 inline mr-1" />
                365-476-4945
              </a>
            </p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://www.linkedin.com/in/aryan-rajput-30496023b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-tech transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:rajputaryan2780@gmail.com" 
              className="text-gray-300 hover:text-tech transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="bg-tech hover:bg-tech-dark text-white p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Aryan Rajput. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
