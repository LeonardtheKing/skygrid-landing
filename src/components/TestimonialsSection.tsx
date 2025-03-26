import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechDrive Inc.",
    content: "SkyGridTech transformed our IT infrastructure, reducing costs by 40% while improving system performance. Their cloud solutions have been a game-changer for our business operations."
  },
  {
    name: "Michael Chen",
    position: "CEO, Innovate Solutions",
    content: "The custom software developed by SkyGridTech perfectly aligned with our business processes. Their team's attention to detail and technical expertise exceeded our expectations."
  },
  {
    name: "Emily Rodriguez",
    position: "Operations Director, Global Finance",
    content: "SkyGridTech's managed IT services have been instrumental in maintaining our system reliability. Their proactive approach to IT support has prevented countless potential issues."
  }
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);

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
      id="testimonials"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-skygrid-blue rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-skygrid-blue rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-skygrid-blue font-medium uppercase opacity-0 animate-on-scroll">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-skygrid-black mt-4 opacity-0 animate-on-scroll">
            What Our Clients Say
          </h2>
          <p className="text-skygrid-black-light mt-6 opacity-80 text-lg opacity-0 animate-on-scroll">
            Discover how our cloud computing and software solutions have helped businesses across various industries.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            <div 
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-skygrid-gray-dark/20">
                    <div className="flex justify-center mb-8">
                      <Quote className="text-skygrid-blue opacity-20" size={48} />
                    </div>
                    <p className="text-lg md:text-xl text-center text-skygrid-black-light mb-8">
                      "{testimonial.content}"
                    </p>
                    <div className="flex flex-col items-center">
                      <h4 className="font-bold text-skygrid-black">{testimonial.name}</h4>
                      <p className="text-skygrid-black-light text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-skygrid-black hover:text-skygrid-blue transition-colors duration-300 opacity-0 animate-on-scroll"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-skygrid-black hover:text-skygrid-blue transition-colors duration-300 opacity-0 animate-on-scroll"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'bg-skygrid-blue w-8' 
                    : 'bg-skygrid-gray-dark'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
