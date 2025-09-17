import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { SERVICES } from '../../utils/constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            OUR <span className="text-orange-500">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Designed lighting systems that enhance savings and efficiency
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`${index < SERVICES.length - 1 ? 'border-r border-gray-500' : ''}`}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive service offerings cover every aspect of lighting system optimization, 
            from initial assessment through complete implementation. We partner with ESCOs and 
            provide turnkey solutions that deliver measurable energy savings and improved efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;