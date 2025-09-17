import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { COMPANY_INFO } from '../utils/constants';

const About: React.FC = () => {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About {COMPANY_INFO.name}</h1>
          <p className="text-xl opacity-90">
            {COMPANY_INFO.tagline}
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Founder's Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  My name is <strong>Micheal Wayne</strong>, and I am the founder of Wayne Medical Supplies LLC. 
                  With years of experience in healthcare and a deep understanding of the challenges faced by 
                  patients and caregivers, I established this company with a clear mission in mind.
                </p>
                <p className="mb-4">
                  Having witnessed firsthand the difficulties people encounter when trying to access quality 
                  medical equipment and supplies, I was inspired to create a business that prioritizes 
                  accessibility, dependability, and compassion above all else.
                </p>
                <p className="mb-4">
                  Wayne Medical Supplies LLC was born from the belief that everyone deserves access to 
                  high-quality medical equipment that can improve their quality of life, regardless of 
                  their circumstances. We are committed to serving our community with integrity and care.
                </p>
                <p>
                  Our goal is not just to provide medical supplies, but to be a trusted partner in your 
                  healthcare journey, offering personalized service and expert guidance every step of the way.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-orange-50 p-8 rounded-lg">
                <div className="w-32 h-32 bg-orange-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-orange-500">👨‍💼</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{COMPANY_INFO.founder}</h3>
                  <p className="text-orange-500 font-medium">Founder & CEO</p>
                  <p className="text-gray-600 mt-4">
                    "Dedicated to making quality medical equipment accessible to everyone in our community."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing accessible, dependable, and compassionate medical supply solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Accessible</h3>
              <p className="text-gray-600">
                We make quality medical equipment accessible to everyone, ensuring affordable pricing 
                and accepting various insurance plans.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Dependable</h3>
              <p className="text-gray-600">
                Count on us for reliable medical equipment that meets the highest quality standards 
                with trusted brands and warranties.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Compassionate</h3>
              <p className="text-gray-600">
                We understand your healthcare needs and provide personalized service with empathy, 
                care, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Location</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-500 text-sm">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-500 text-sm">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-500 text-sm">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">{COMPANY_INFO.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  We're conveniently located in Hyattsville, Maryland, and welcome visits to our facility. 
                  Our knowledgeable staff is ready to help you find the right medical equipment for your needs.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.4926181553443!2d-76.9458872!3d38.9556565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af59a2b%3A0x681e1f7db8a5e31c!2s6606%20West%20Forest%20Rd%2C%20Hyattsville%2C%20MD%2020785!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Wayne Medical Supplies Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;