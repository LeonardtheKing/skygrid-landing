
import React, { useEffect, useRef } from 'react';
import { Cloud, Code, Server, Shield } from 'lucide-react';

const services = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud infrastructure to support your business operations with 99.9% uptime.",
    icon: Cloud,
  },
  {
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your specific business needs and workflows.",
    icon: Code,
  },
  {
    title: "Managed IT Services",
    description: "Comprehensive IT management and support, allowing you to focus on your core business.",
    icon: Server,
  },
  {
    title: "Security Solutions",
    description: "Advanced cybersecurity measures to protect your sensitive data and ensure compliance.",
    icon: Shield,
  }
];

const ServicesSection: React.FC = () => {
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
              }, index * 100);
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
      id="services"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 relative bg-skygrid-gray overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-skygrid-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-skygrid-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-skygrid-blue font-medium uppercase opacity-0 animate-on-scroll">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-skygrid-black mt-4 opacity-0 animate-on-scroll">
            Comprehensive Cloud & Software Solutions
          </h2>
          <p className="text-skygrid-black-light mt-6 opacity-80 text-lg opacity-0 animate-on-scroll">
            We provide a range of cloud computing and software services to help businesses scale, innovate, and thrive in the digital era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl opacity-0 animate-on-scroll hover-lift"
            >
              <div className="w-14 h-14 rounded-lg bg-skygrid-blue/10 flex items-center justify-center text-skygrid-blue mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-skygrid-black mb-4">{service.title}</h3>
              <p className="text-skygrid-black-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
