import React from 'react';
import { COMPANY_INFO } from '../../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-gray-600 mb-4">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-gray-600 mb-4">
              Providing accessible, dependable, and compassionate medical supply solutions for our community.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{COMPANY_INFO.address}</p>
              <p>Phone: {COMPANY_INFO.phone}</p>
              <p>Email: {COMPANY_INFO.email}</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="/products" className="hover:text-orange-500 transition-colors">Products</a></li>
              <li><a href="/contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/products" className="hover:text-orange-500 transition-colors">Durable Medical Equipment</a></li>
              <li><a href="/products" className="hover:text-orange-500 transition-colors">Respiratory Supplies</a></li>
              <li><a href="/products" className="hover:text-orange-500 transition-colors">Wound Care</a></li>
              <li><a href="/products" className="hover:text-orange-500 transition-colors">Daily Living Aids</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;