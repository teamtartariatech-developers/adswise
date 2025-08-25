import React, { useState, useRef, FormEvent } from 'react';
import emailJs from '@emailjs/browser';

interface FormData {
  user_name: string;
  user_email: string;
  company: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');

  // EmailJS configuration - matching your values
  const SERVICE_ID = 'service_wnrgjg4';
  const TEMPLATE_ID = 'template_mzyt4bl';
  const PUBLIC_KEY = 'LBlYoEAIwb_JgiLgj';

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    
    if (!form.current) {
      setStatus('Form reference error');
      setIsLoading(false);
      return;
    }

    emailJs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.currentTarget,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          e.currentTarget.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('Something went wrong. Please try again.');
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Brand?</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get in touch and let's discuss how our psychology-driven approach can accelerate your brand's growth and conversion rates.
        </p>
      </div>
      
      <form ref={form} onSubmit={sendEmail} className="grid md:grid-cols-2 gap-6">
        <input
          name="user_name"
          type="text"
          placeholder="Your Name"
          required
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
        />
        <input
          name="user_email" 
          type="email"
          placeholder="Your Email"
          required
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
        />
        <input
          name="company"  
          type="text"
          placeholder="Company Name"
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
        />
        <select 
          name="service" 
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
        >
          <option value="">Select Service Interest</option>
          <option value="brand-foundation">Brand Foundation & Identity</option>
          <option value="website-design">Website Psychology & Design</option>
          <option value="social-media">Social Media Growth & Monetisation</option>
          <option value="brand-partner">Brand Partner Service</option>
        </select>
        <textarea 
          name="message"
          placeholder="Tell us about your project and goals..."
          rows={6}
          required
          className="md:col-span-2 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-none"
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="md:col-span-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? 'Sending...' : 'Get Custom Quote'} 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12,5 19,12 12,19"></polyline>
          </svg>
        </button>
      </form>

      {status && (
        <div className={`mt-6 p-4 rounded-lg text-center ${
          status.includes('successfully') 
            ? 'bg-green-900 text-green-300 border border-green-700' 
            : 'bg-red-900 text-red-300 border border-red-700'
        }`}>
          {status}
        </div>
      )}

      
    </div>
  );
};

export default ContactForm;