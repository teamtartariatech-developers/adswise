import React, { useState, useEffect ,useRef } from 'react';
import { Menu, X, ArrowRight, Star, Users, Award, Zap, Eye, Palette, TrendingUp, ChevronLeft, ChevronRight, Check, Brain, Target, Smartphone, BarChart3 } from 'lucide-react';

import ContactForm from './ContactForm.tsx';

function App() {

//   const form = useRef<HTMLFormElement | null>(null);


// const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!form.current) return;
//     emailJs
//     .sendForm(
//       'service_wnrgjg4',
//       'template_mzyt4bl' ,
//       // form.current,
//       e.currentTarget,
//        'LBlYoEAIwb_JgiLgj')
//     .then(
//       (result) => {
//         console.log(result.text);
//         alert('Message sent successfully!');
//         e.currentTarget.reset(); 
//       },
//       (error) => {
//         console.log(error.text);
//         alert('Something went wrong. Please try again.');
//       }
//     );
// };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      text: "Adswise Marketing transformed our brand identity completely. Their psychology-based approach and AI insights boosted our conversion rates by 180%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Innovate Labs",
      text: "Working with Adswise was a game-changer. Their Brand Partner service gave us a dedicated team that truly understands our vision and market.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      company: "Verde Consulting",
      text: "The AI-powered campaigns and psychological triggers they implemented increased our ROI by 250%. Best investment we've made for our brand.",
      rating: 5
    }
  ];

  const portfolioItems = [
    {
      title: "TechFlow Solutions",
      category: "Brand Foundation & Identity",
      description: "Complete brand transformation with psychology-based messaging",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Verde Consulting",
      category: "Website Psychology & Design",
      description: "High-conversion website with AI-powered analytics integration",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Urban Wellness",
      category: "Social Media Growth",
      description: "Complete social media ecosystem with monetization systems",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "EcoLiving",
      category: "Brand Partner Service",
      description: "Long-term partnership with ongoing strategy optimization",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg z-50 border-b border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      {/* Logo and Brand Name - Grouped Together */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png"
          alt="Adswise Marketing Logo"
          className="h-8 w-8 object-contain"
        />
        <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Adswise Marketing
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="hover:text-yellow-400 transition-colors duration-300">Home</a>
        <a href="#services" className="hover:text-yellow-400 transition-colors duration-300">Services</a>
        <a href="#portfolio" className="hover:text-yellow-400 transition-colors duration-300">Portfolio</a>
        <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About</a>
        <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white hover:text-yellow-400 transition-colors duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-black/95 backdrop-blur-lg">
      <div className="px-4 py-4 space-y-4">
        <a href="#home" className="block hover:text-yellow-400 transition-colors duration-300">Home</a>
        <a href="#services" className="block hover:text-yellow-400 transition-colors duration-300">Services</a>
        <a href="#portfolio" className="block hover:text-yellow-400 transition-colors duration-300">Portfolio</a>
        <a href="#about" className="block hover:text-yellow-400 transition-colors duration-300">About</a>
        <a href="#contact" className="block hover:text-yellow-400 transition-colors duration-300">Contact</a>
      </div>
    </div>
  )}
</nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">
                Digital Presence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Psychology-driven branding and AI-powered marketing strategies that convert visitors into loyal customers and drive exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2">
                Get Custom Quote <ArrowRight size={20} />
              </button>
              <button className="border border-gray-600 px-8 py-4 rounded-full font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300">
                Become a Brand Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our One-Time Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Perfect for specific projects and targeted improvements. Each service is built on psychological principles and AI insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain size={40} />,
                title: "Brand Foundation & Identity",
                description: "Complete brand foundation built on psychological principles and market intelligence. Distinctive identities that resonate deeply.",
                features: ["Brand Strategy & Positioning", "Logo & Visual Identity", "Brand Guidelines", "Psychology-Based Messaging"]
              },
              {
                icon: <Smartphone size={40} />,
                title: "Website Psychology & Design",
                description: "High-performance websites combining stunning design with psychological triggers and AI insights for maximum conversion.",
                features: ["UX/UI Psychology Design", "Conversion Optimization", "AI-Powered Analytics", "Mobile-First Development"]
              },
              {
                icon: <TrendingUp size={40} />,
                title: "Social Media Growth & Marketing",
                description: "Complete social media ecosystem designed for growth and revenue generation using AI-driven strategies.",
                features: ["Growth Strategy & Content", "Monetization Systems", "Community Building", "AI-Powered Campaigns"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-yellow-400 transition-colors duration-300 group"
              >
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Check size={16} className="text-yellow-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Branding Packages</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the perfect package for your brand journey. Whether you need specific services or a complete brand partnership.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* One-Time Services */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-3xl font-bold mb-4">One-Time Services</h3>
              <p className="text-gray-400 mb-6">Perfect for specific projects and targeted improvements</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Target size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Project-Based Approach</h4>
                    <p className="text-gray-400 text-sm">Ideal for specific improvements and testing our capabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Internal Team Support</h4>
                    <p className="text-gray-400 text-sm">Perfect complement to your existing marketing team</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Eye size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Engagement</h4>
                    <p className="text-gray-400 text-sm">Choose exactly what you need, when you need it</p>
                  </div>
                </div>
              </div>

              <button className="w-full border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                Get Custom Quote
              </button>
            </div>

            {/* Brand Partner Service */}
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400 relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                RECOMMENDED
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Brand Partner Service</h3>
              <p className="text-gray-400 mb-6">Long-term partnership for complete brand transformation</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Award size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Dedicated Brand Team</h4>
                    <p className="text-gray-400 text-sm">Full team of strategists, designers, developers, and data scientists</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered Insights</h4>
                    <p className="text-gray-400 text-sm">Regular brand health reports and predictive market analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Complete Brand Management</h4>
                    <p className="text-gray-400 text-sm">All aspects of your digital presence with strategic precision</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Partnership Benefits:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center"><Check size={14} className="text-yellow-400 mr-2" />All Services Included</div>
                  <div className="flex items-center"><Check size={14} className="text-yellow-400 mr-2" />24/7 Brand Monitoring</div>
                  <div className="flex items-center"><Check size={14} className="text-yellow-400 mr-2" />Monthly Strategy Sessions</div>
                  <div className="flex items-center"><Check size={14} className="text-yellow-400 mr-2" />Priority Support</div>
                  <div className="flex items-center"><Check size={14} className="text-yellow-400 mr-2" />Quarterly Reports</div>
                  <div className="flex items-center"><Check size={14} className="text-yellow-400 mr-2" />Unlimited Revisions</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300">
                Become a Brand Partner
              </button>
            </div>
          </div>

          {/* Which Package Section */}
          <div className="mt-16 bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-8 text-center">Which Package is Right for You?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-yellow-400">Choose One-Time Services If:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start"><Check size={16} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />You need specific project-based work</li>
                  <li className="flex items-start"><Check size={16} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />You have an internal marketing team</li>
                  <li className="flex items-start"><Check size={16} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />You prefer project-by-project approach</li>
                  <li className="flex items-start"><Check size={16} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />You want to test our capabilities first</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-yellow-400">Choose Brand Partner If:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start"><Check size={16} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />You want comprehensive brand management</li>
                  <li className="flex items-start"><Check size={16} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />You need ongoing strategic support</li>
                  <li className="flex items-start"><Check size={16} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />You prefer a dedicated brand team</li>
                  <li className="flex items-start"><Check size={16} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />You want maximum ROI and growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore some of our recent projects and see how we've helped brands achieve remarkable results through psychology-driven strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-yellow-400 transition-colors duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-yellow-400 text-sm font-medium mb-2">{item.category}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our psychology-driven approach.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <h4 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-400">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-yellow-400 text-black p-3 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-yellow-400 text-black p-3 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Adswise Marketing</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                We are a psychology-driven marketing agency that combines behavioral science with AI-powered insights to create brands that don't just look good—they convert. Our approach is rooted in understanding human psychology and leveraging cutting-edge technology.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Every strategy we develop is backed by data, psychological principles, and market intelligence to ensure your brand not only stands out but drives real, measurable business results.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">20+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">20+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Us"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <ContactForm /><br />
      {/* Contact Section
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Brand?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get in touch and let's discuss how our psychology-driven approach can accelerate your brand's growth and conversion rates.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800">
              <form ref={form} onSubmit={sendEmail} className="grid md:grid-cols-2 gap-6">
                <input
                name="user_name"
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                />
                <input
                name="user_email" 
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                />
                <input
                name="company"  
                  type="text"
                  placeholder="Company Name"
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                />
                <select name="service" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-300">
                  <option value="">Select Service Interest</option>
                  <option value="brand-foundation">Brand Foundation & Identity</option>
                  <option value="website-design">Website Psychology & Design</option>
                  <option value="social-media">Social Media Growth & Monetisation</option>
                  <option value="brand-partner">Brand Partner Service</option>
                </select>
                <textarea name="message"
                  placeholder="Tell us about your project and goals..."
                  rows={6}
                  className="md:col-span-2 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="md:col-span-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Custom Quote <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Adswise Marketing
            </div>
            
            <p className="text-gray-400 mb-8">Psychology-driven branding and AI-powered marketing strategies.</p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">&copy; 2025 Adswise Marketing. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;