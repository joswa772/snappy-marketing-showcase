
import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Add animation to elements when they become visible
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100;
        if (isVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle testimonial cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Sample data
  const services = [
    {
      icon: "layout-grid",
      title: "Digital Strategy",
      description: "We create data-driven strategies that align with your business goals for measurable growth."
    },
    {
      icon: "search",
      title: "SEO & SEM",
      description: "Improve visibility and drive quality traffic through search engine optimization and marketing."
    },
    {
      icon: "users",
      title: "Social Media",
      description: "Engage your audience with compelling content and community management across platforms."
    },
    {
      icon: "mail",
      title: "Email Marketing",
      description: "Nurture leads and build customer loyalty through personalized email campaigns."
    },
    {
      icon: "image",
      title: "Content Creation",
      description: "Develop high-quality content that resonates with your target audience and drives action."
    },
    {
      icon: "briefcase",
      title: "Brand Development",
      description: "Build a cohesive brand identity that communicates your unique value proposition."
    }
  ];

  const projects = [
    {
      title: "RevenueBoost Campaign",
      client: "TechSolutions Inc.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Increased qualified leads by 120% through integrated digital strategy and content marketing.",
      tag: "Lead Generation"
    },
    {
      title: "Brand Refresh & Digital Presence",
      client: "GreenEco Products",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Complete brand overhaul and digital strategy leading to 85% increase in online engagement.",
      tag: "Brand Development"
    },
    {
      title: "E-commerce Revenue Optimization",
      client: "StyleFashion Co.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Optimized user journey and implemented targeted ads resulting in 65% sales increase.",
      tag: "E-commerce"
    },
    {
      title: "Market Expansion Campaign",
      client: "GlobalTech Solutions",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Strategic digital campaign helping client expand into 3 new international markets.",
      tag: "Global Marketing"
    }
  ];

  const testimonials = [
    {
      quote: "Their strategic approach transformed our online presence. We've seen a 200% increase in qualified leads since working with them.",
      name: "Sarah Johnson",
      title: "CMO, TechSolutions Inc.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "The team's creativity and data-driven approach helped us achieve record-breaking quarterly results. Highly recommended!",
      name: "Mark Williams",
      title: "CEO, Brand Innovators",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "They understand our business goals and deliver results that matter. Our ROI on digital marketing has never been better.",
      name: "Jennifer Lee",
      title: "Marketing Director, EcoSolutions",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Morgan",
      title: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      description: "Digital strategist with 15+ years of experience helping brands achieve remarkable growth."
    },
    {
      name: "Jamie Rodriguez",
      title: "Creative Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      description: "Award-winning creative with a passion for developing unique brand identities and campaigns."
    },
    {
      name: "Taylor Chen",
      title: "Head of SEO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      description: "Data-driven SEO expert specializing in helping businesses rank for competitive keywords."
    },
    {
      name: "Jordan Smith",
      title: "Social Media Strategist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      description: "Creator of viral social media campaigns that boost engagement and drive conversions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            PIXEL<span className="text-purple-600">PULSE</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition">Services</a>
            <a href="#work" className="text-gray-700 hover:text-purple-600 transition">Our Work</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition">Testimonials</a>
            <a href="#team" className="text-gray-700 hover:text-purple-600 transition">Team</a>
            <a href="#contact" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-full hover:opacity-90 transition">
              Contact Us
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
            <div className="flex flex-col items-center space-y-6 py-8">
              <a 
                href="#services" 
                className="text-xl text-gray-700 hover:text-purple-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#work" 
                className="text-xl text-gray-700 hover:text-purple-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </a>
              <a 
                href="#testimonials" 
                className="text-xl text-gray-700 hover:text-purple-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#team" 
                className="text-xl text-gray-700 hover:text-purple-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                We Drive <span className="text-purple-600">Digital Growth</span> That Gets Results
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:pr-12">
                Strategic digital marketing solutions tailored to elevate your brand, engage your audience, and accelerate business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition text-center"
                >
                  Get Started
                </a>
                <a 
                  href="#work" 
                  className="border border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition flex items-center justify-center gap-2"
                >
                  See Our Work <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-200 rounded-full opacity-30 filter blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-200 rounded-full opacity-30 filter blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                  alt="Digital Marketing Strategy Meeting" 
                  className="relative z-10 rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to help your business thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition animate-on-scroll" 
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {service.icon === "layout-grid" && <span className="text-purple-600 text-2xl">📊</span>}
                  {service.icon === "search" && <span className="text-purple-600 text-2xl">🔍</span>}
                  {service.icon === "users" && <span className="text-purple-600 text-2xl">👥</span>}
                  {service.icon === "mail" && <span className="text-purple-600 text-2xl">📧</span>}
                  {service.icon === "image" && <span className="text-purple-600 text-2xl">📸</span>}
                  {service.icon === "briefcase" && <span className="text-purple-600 text-2xl">💼</span>}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section id="work" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our case studies and discover how we've helped businesses achieve remarkable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition animate-on-scroll"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-purple-600 mb-3">Client: {project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700"
                  >
                    View Case Study <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't take our word for it—hear what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <div className="relative h-full overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`transition-opacity duration-500 flex flex-col md:flex-row items-center gap-8 ${activeTestimonial === index ? 'opacity-100' : 'opacity-0 absolute'}`}
                  >
                    <div className="md:w-1/4 flex justify-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-purple-100"
                      />
                    </div>
                    <div className="md:w-3/4 text-center md:text-left">
                      <svg className="w-10 h-10 text-purple-200 mb-4 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-xl md:text-2xl font-medium mb-6">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? 'bg-purple-600' : 'bg-gray-300'}`}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented professionals behind our successful digital marketing strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition animate-on-scroll"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Talk About Your Project</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to take your digital marketing to the next level? Contact us today for a free consultation and discover how we can help your business grow.
              </p>
              
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <a href="mailto:hello@pixelpulse.com" className="text-purple-600 hover:text-purple-700">hello@pixelpulse.com</a>
                </div>
              </div>
              
              <div className="flex items-center mb-8">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <a href="tel:+1234567890" className="text-purple-600 hover:text-purple-700">(123) 456-7890</a>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-100 transition">
                  <Facebook className="w-5 h-5 text-gray-700" />
                </a>
                <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-100 transition">
                  <Instagram className="w-5 h-5 text-gray-700" />
                </a>
                <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-100 transition">
                  <Twitter className="w-5 h-5 text-gray-700" />
                </a>
                <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-100 transition">
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">PIXEL<span className="text-purple-400">PULSE</span></h3>
              <p className="text-gray-400 max-w-xs">
                Elevating brands through strategic digital marketing solutions that drive growth and deliver results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Digital Strategy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">SEO & SEM</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Social Media</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Email Marketing</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                  <li><a href="#team" className="text-gray-400 hover:text-white transition">Our Team</a></li>
                  <li><a href="#work" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
                <p className="text-gray-400 mb-4">Stay updated with the latest digital marketing trends and insights.</p>
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-4 py-2 bg-gray-800 text-white rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button 
                    type="submit" 
                    className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-700 transition"
                  >
                    <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-800 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} PixelPulse Marketing Agency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors z-40"
        aria-label="Back to top"
      >
        <ArrowRight className="rotate-270 transform" size={20} />
      </a>
    </div>
  );
};

export default Index;
