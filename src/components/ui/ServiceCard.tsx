import React from 'react';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'ENGINEERED DESIGN':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2ZM12 7C13.1 7 14 7.9 14 9S13.1 11 12 11 10 10.1 10 9 10.9 7 12 7ZM12 13C13.1 13 14 13.9 14 15S13.1 17 12 17 10 16.1 10 15 10.9 13 12 13Z"/>
          </svg>
        );
      case 'ESCO PARTNER':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12C15.7 12 15.4 12 15.1 11.9L12.4 16.8C11.8 17.8 10.4 18.2 9.4 17.6L4.1 14.7C3.4 14.3 3 13.5 3 12.6V7.4C3 6.1 4.1 5 5.4 5H10.6C11.4 5 12.1 5.4 12.5 6L13.6 8H16M16 6C17.1 6 18 6.9 18 8S17.1 10 16 10 14 9.1 14 8 14.9 6 16 6Z"/>
          </svg>
        );
      case 'ASSESSMENT AND AUDIT':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
          </svg>
        );
      case 'RETROFITTING':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 22H15C15.55 22 16 21.55 16 21V10H8V21C8 21.55 8.45 22 9 22ZM10.5 12H13.5V20H10.5V12ZM11.71 4.04C11.32 3.65 10.69 3.65 10.3 4.04L9.59 4.75L5.75 0.91C5.36 0.52 4.73 0.52 4.34 0.91C3.95 1.3 3.95 1.93 4.34 2.32L8.18 6.16L7.47 6.87C7.08 7.26 7.08 7.89 7.47 8.28L11.71 12.52C12.1 12.91 12.73 12.91 13.12 12.52L17.36 8.28C17.75 7.89 17.75 7.26 17.36 6.87L13.12 2.63C12.73 2.24 12.1 2.24 11.71 2.63Z"/>
          </svg>
        );
      default:
        return <div className="w-12 h-12 bg-gray-300 rounded"></div>;
    }
  };

  return (
    <div className="bg-white p-8 text-center group hover:bg-gray-50 transition-colors duration-300">
      {/* Icon */}
      <div className="text-orange-500 mb-6 flex justify-center">
        {getIcon(service.title)}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;