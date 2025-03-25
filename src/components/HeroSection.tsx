
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (heroRef.current) {
            heroRef.current.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
                el.classList.remove('opacity-0');
              }, index * 200);
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-br from-skygrid-gray via-white to-skygrid-gray-dark opacity-50 z-0"></div>
        <div className="absolute top-1/4 -right-28 w-96 h-96 bg-skygrid-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 -left-28 w-96 h-96 bg-skygrid-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-8">
          <span className="text-skygrid-blue font-medium opacity-0 animate-on-scroll">CLOUD COMPUTING & SOFTWARE SOLUTIONS</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-skygrid-black tracking-tighter opacity-0 animate-on-scroll">
            Elevate Your Business <br />
            <span className="text-skygrid-blue">to the Cloud</span>
          </h1>
          <p className="text-lg md:text-xl text-skygrid-black-light opacity-80 max-w-lg opacity-0 animate-on-scroll">
            Transform your business with our cutting-edge cloud computing and software solutions designed for the modern enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-on-scroll">
            <a
              href="#contact"
              className="bg-skygrid-blue text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-skygrid-blue-light shadow-lg shadow-skygrid-blue/20 transition-all duration-300 text-center hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="border border-skygrid-black/20 bg-white/50 backdrop-blur-sm text-skygrid-black px-8 py-3 rounded-md text-lg font-medium hover:border-skygrid-blue hover:text-skygrid-blue transition-all duration-300 text-center flex items-center justify-center group"
            >
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <div className="glass-card w-full h-80 rounded-2xl overflow-hidden opacity-0 animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-skygrid-blue/10 to-skygrid-blue/5"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-full h-full bg-skygrid-blue/5 rounded-xl p-6 border border-white/40 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-skygrid-blue flex items-center justify-center text-white mb-6">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 7V5.5C9.5 4.67157 10.1716 4 11 4H13C13.8284 4 14.5 4.67157 14.5 5.5V7M6 7H18C19.1046 7 20 7.89543 20 9V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V9C4 7.89543 4.89543 7 6 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-skygrid-blue text-xl font-medium">Enterprise Solutions</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-16 -right-8 glass-card w-64 h-40 rounded-2xl overflow-hidden opacity-0 animate-on-scroll shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-skygrid-blue/10 to-skygrid-blue/5"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
                <div className="w-12 h-12 rounded-full bg-skygrid-blue flex items-center justify-center text-white mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 14L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-skygrid-blue text-base font-medium">Custom Software</span>
              </div>
            </div>
            <div className="absolute -top-8 -left-6 glass-card w-48 h-32 rounded-2xl overflow-hidden opacity-0 animate-on-scroll shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-skygrid-blue/10 to-skygrid-blue/5"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                <div className="w-10 h-10 rounded-full bg-skygrid-blue flex items-center justify-center text-white mb-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C16.1046 22 17 21.1046 17 20V8L11 2H9C7.89543 2 7 2.89543 7 4V20C7 21.1046 7.89543 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 2V8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-skygrid-blue text-sm font-medium">Cloud Storage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
