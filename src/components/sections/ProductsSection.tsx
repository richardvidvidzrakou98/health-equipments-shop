import React from 'react';
import ProductCard from '../ui/ProductCard';
import { PRODUCTS } from '../../utils/constants';

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            OUR <span className="text-orange-500">PRODUCTS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FicientLock™ Technology makes installation quick and watertight
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive product line features innovative electrical solutions designed for durability, 
            efficiency, and ease of installation. Each product incorporates our proprietary FicientLock™ 
            technology to ensure watertight seals and reliable performance in demanding industrial environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;