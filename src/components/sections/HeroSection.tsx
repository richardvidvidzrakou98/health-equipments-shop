import React from 'react';
import Button from '../ui/Button';
import { HERO_CONTENT } from '../../utils/constants';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-20 flex items-center">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #f26411, #e0793dff, #df5b0fff)' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* Medical Equipment Section - Left Side */}
          <div className="text-white flex flex-col justify-center px-8 lg:px-12 py-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-6 h-6 border-2 border-white rounded-full"></div>
              <div className="absolute top-16 left-16 w-4 h-4 border-2 border-white rounded-full"></div>
              <div className="absolute top-32 left-4 w-3 h-3 border border-white rounded-full"></div>
              <div className="absolute bottom-20 left-20 w-4 h-4 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-white rounded-full"></div>
              <div className="absolute top-20 right-8 w-3 h-3 border border-white rounded-full"></div>
              <div className="absolute bottom-32 right-12 w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                {HERO_CONTENT.products.title}
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">{HERO_CONTENT.products.subtitle.split(' ')[0]}</span>
              </h2>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="bg-white text-orange-500 px-2">{HERO_CONTENT.products.subtitle.split(' ')[1]}</span>
              </h2>
              <p className="text-lg mb-8 max-w-md leading-relaxed">
                {HERO_CONTENT.products.description}
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500 font-bold tracking-wider transition-colors"
              >
                {HERO_CONTENT.products.buttonText}
              </Button>
            </div>
          </div>

          {/* Healthcare Supplies Section - Right Side */}
          <div className="relative flex flex-col justify-center px-8 lg:px-12 py-12 overflow-hidden bg-white">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 right-8 w-6 h-6 border-2 border-orange-400 rounded-full"></div>
              <div className="absolute top-20 right-16 w-4 h-4 border-2 border-orange-400 rounded-full"></div>
              <div className="absolute bottom-20 right-8 w-3 h-3 border border-orange-400 rounded-full"></div>
              <div className="absolute bottom-8 right-20 w-5 h-5 border-2 border-orange-400 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-orange-500">
                {HERO_CONTENT.services.title}
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-700">
                {HERO_CONTENT.services.subtitle}
              </h2>
              <p className="text-lg mb-8 max-w-md leading-relaxed text-gray-600">
                {HERO_CONTENT.services.description}
              </p>
              <Button
                variant="primary"
                className="font-bold tracking-wider bg-orange-500 hover:bg-orange-600 text-white"
              >
                {HERO_CONTENT.services.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Arrow */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-8 h-8 border-b-2 border-r-2 border-white transform rotate-45 animate-bounce"></div>
      </div> */}
    </section>
  );
};

export default HeroSection;