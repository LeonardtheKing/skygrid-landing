
import React, { useEffect, useRef } from 'react';
import { Cloud, Database, Layers, ServerCog, CloudCog, Settings, Shield, Wrench } from 'lucide-react';

const services = [
  {
    title: "Amazon Redshift Solutions",
    description: "High-performance data warehousing solutions with Amazon Redshift for efficient analysis and insights.",
    icon: Database,
  },
  {
    title: "Amazon Database Migration",
    description: "Seamless migration of databases to AWS with minimal downtime and complete data integrity.",
    icon: Cloud,
  },
  {
    title: "Amazon Glue",
    description: "Fully managed ETL service that makes it simple to prepare and load your data for analytics.",
    icon: Layers,
  },
  {
    title: "Amazon CloudFormation",
    description: "Infrastructure as code to model and provision AWS and third-party resources in your cloud environment.",
    icon: CloudCog,
  },
  {
    title: "Amazon Control Tower and Delivery",
    description: "Set up and govern a secure, compliant multi-account AWS environment with streamlined delivery.",
    icon: ServerCog,
  },
  {
    title: "Amazon Lambda Services",
    description: "Serverless computing solutions allowing you to run code without provisioning or managing servers.",
    icon: Settings,
  },
  {
    title: "Amazon WAF and Security",
    description: "Advanced web application firewall services to protect your applications from common exploits and threats.",
    icon: Shield,
  },
  {
    title: "Amazon API Gateway",
    description: "Create, publish, maintain, monitor, and secure APIs at any scale for your applications.",
    icon: Wrench,
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
            Amazon AWS Solutions
          </h2>
          <p className="text-skygrid-black-light mt-6 opacity-80 text-lg opacity-0 animate-on-scroll">
            We provide a comprehensive range of Amazon AWS services to help your business leverage the power of cloud computing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
