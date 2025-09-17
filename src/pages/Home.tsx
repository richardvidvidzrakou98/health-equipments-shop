import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import HeroSection from '../components/sections/HeroSection';
import { COMPANY_INFO, PRODUCTS, SERVICES } from '../utils/constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <DefaultLayout>
      <HeroSection />
      
      {/* Products Section - Matching the reference design */}
      <section className="py-16 bg-white relative">
        {/* Decorative arrow pointer from hero */}
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-gray-200"></div>
        </div> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              OUR <span className="text-orange-500">PRODUCTS</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              Professional medical equipment and supplies designed for healthcare excellence. 
              Our comprehensive range ensures you have the right tools for every patient care scenario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Professional Design */}
      <section className="py-16 bg-gray-800 text-white relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              OUR <span className="text-orange-400">SERVICES</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed to support medical professionals 
              and improve patient outcomes across various care settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-all duration-300 border border-gray-600">
                  <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-orange-400 transition-colors">
                    <span className="text-2xl text-white">{service.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About/Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted Healthcare Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {COMPANY_INFO.name} is dedicated to providing comprehensive medical equipment and 
                supplies to healthcare facilities, patients, and caregivers throughout our community. 
                We understand the critical importance of reliable medical equipment in patient care.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team works closely with healthcare professionals to ensure you have 
                the right tools, delivered reliably, with the support you need to focus 
                on what matters most - your patients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">Quality-certified medical equipment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">Fast, reliable delivery service</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">Expert consultation and support</span>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="/about" 
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Learn More About Us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/healthshop2.jpg"
                  alt="Wayne Medical Supplies Healthcare Store"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Professional Medical Supplies</h3>
                  <p className="text-sm opacity-90">Quality equipment for healthcare excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Connect with our healthcare equipment specialists to discuss your needs 
            and discover how we can support your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request a Consultation
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;