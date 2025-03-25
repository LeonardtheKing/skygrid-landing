
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  "Industry-leading cloud infrastructure with 99.9% uptime",
  "Certified security protocols and data protection",
  "24/7 technical support and monitoring",
  "Customizable software solutions for your business needs",
  "Seamless systems integration capabilities",
  "Scalable resources that grow with your business"
];

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
                el.classList.remove('opacity-0');
              }, index * 150);
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 opacity-0 animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-skygrid-blue/5 rounded-xl -rotate-6 transform origin-bottom-left"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=800&q=80" 
                alt="Technology" 
                className="rounded-xl shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-lg shadow-lg md:max-w-xs z-20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-skygrid-blue flex items-center justify-center text-white shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 7L1 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-skygrid-black font-bold">Innovative Solutions</h3>
                    <p className="text-skygrid-black-light text-sm">
                      Cutting-edge technologies for modern businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-skygrid-blue font-medium uppercase opacity-0 animate-on-scroll">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-skygrid-black mt-4 opacity-0 animate-on-scroll">
              Transforming Businesses With Innovative Technology
            </h2>
            <p className="text-skygrid-black-light mt-6 opacity-0 animate-on-scroll">
              SkyGridTech is a leading provider of cloud computing and software solutions, dedicated to helping businesses optimize their operations, improve efficiency, and drive innovation. With our industry expertise and cutting-edge technology, we deliver tailored solutions that address your unique business challenges.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 opacity-0 animate-on-scroll">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-skygrid-blue mr-2 shrink-0 mt-1" size={20} />
                  <span className="text-skygrid-black-light">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 opacity-0 animate-on-scroll">
              <a 
                href="#services" 
                className="bg-skygrid-blue text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-skygrid-blue-light shadow-lg shadow-skygrid-blue/20 transition-all duration-300 inline-block hover:-translate-y-1"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
