
import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-skygrid-black text-white py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <a href="#" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                <span className="text-skygrid-blue">Sky</span>gridtech
              </span>
            </a>
            <p className="text-white/70 mb-6 max-w-xs">
              Transforming businesses with innovative cloud computing and software solutions, enabling growth and operational excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-skygrid-blue transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-skygrid-blue transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-skygrid-blue transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-skygrid-blue transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-skygrid-blue transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-skygrid-blue transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-skygrid-blue transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Managed IT Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-skygrid-blue transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Security Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-skygrid-blue transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-skygrid-blue transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2023 SkyGridTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
