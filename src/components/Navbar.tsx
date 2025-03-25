
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-5 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-skygrid-black">
            <span className="text-skygrid-blue">Sky</span>gridtech
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="link-hover text-skygrid-black font-medium">
            Home
          </a>
          <a href="#services" className="link-hover text-skygrid-black font-medium">
            Services
          </a>
          <a href="#about" className="link-hover text-skygrid-black font-medium">
            About
          </a>
          <a href="#testimonials" className="link-hover text-skygrid-black font-medium">
            Testimonials
          </a>
          <a href="#contact" className="link-hover text-skygrid-black font-medium">
            Contact
          </a>
          <a 
            href="#contact" 
            className="bg-skygrid-blue text-white px-5 py-2 rounded-md hover:bg-skygrid-blue-light transition-colors duration-300 shadow-md"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-skygrid-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ top: '4rem' }}
      >
        <div className="flex flex-col space-y-4 p-6 text-center text-lg">
          <a 
            href="#home" 
            className="py-2 hover:text-skygrid-blue"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="#services" 
            className="py-2 hover:text-skygrid-blue"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="py-2 hover:text-skygrid-blue"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="py-2 hover:text-skygrid-blue"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="py-2 hover:text-skygrid-blue"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="bg-skygrid-blue text-white px-5 py-2 rounded-md mx-auto w-fit hover:bg-skygrid-blue-light transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
