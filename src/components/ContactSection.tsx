
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: "1234 Tech Parkway, San Francisco, CA 94105"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@skygridtech.com"
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 relative bg-skygrid-gray overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-skygrid-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-skygrid-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-skygrid-blue font-medium uppercase opacity-0 animate-on-scroll">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-skygrid-black mt-4 opacity-0 animate-on-scroll">
            Contact Us
          </h2>
          <p className="text-skygrid-black-light mt-6 opacity-80 text-lg opacity-0 animate-on-scroll">
            Have questions or ready to transform your business with our cloud solutions? Reach out to our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-bold text-skygrid-black">Send Us A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-skygrid-black mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-skygrid-gray-dark/30 focus:outline-none focus:border-skygrid-blue focus:ring-1 focus:ring-skygrid-blue transition-colors duration-300"
                  placeholder="John Doe"
                  disabled={formStatus !== 'idle'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-skygrid-black mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-skygrid-gray-dark/30 focus:outline-none focus:border-skygrid-blue focus:ring-1 focus:ring-skygrid-blue transition-colors duration-300"
                  placeholder="john@example.com"
                  disabled={formStatus !== 'idle'}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-skygrid-black mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-skygrid-gray-dark/30 focus:outline-none focus:border-skygrid-blue focus:ring-1 focus:ring-skygrid-blue transition-colors duration-300 resize-none"
                  placeholder="How can we help you?"
                  disabled={formStatus !== 'idle'}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${
                    formStatus === 'success'
                      ? 'bg-green-600 text-white'
                      : formStatus === 'submitting'
                      ? 'bg-skygrid-blue/60 text-white/80 cursor-not-allowed'
                      : 'bg-skygrid-blue text-white hover:bg-skygrid-blue-light shadow-lg shadow-skygrid-blue/20'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : formStatus === 'success' ? (
                    <div className="flex items-center">
                      <Check className="mr-2" size={18} />
                      Message Sent!
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2" size={18} />
                      Send Message
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-10 opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-bold text-skygrid-black">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-skygrid-blue/10 flex items-center justify-center text-skygrid-blue mr-6">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-skygrid-black">{info.title}</h4>
                    <p className="text-skygrid-black-light mt-1">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold text-skygrid-black mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-skygrid-black-light">Monday - Friday:</span>
                  <span className="text-skygrid-black font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-skygrid-black-light">Saturday:</span>
                  <span className="text-skygrid-black font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-skygrid-black-light">Sunday:</span>
                  <span className="text-skygrid-black font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
