import React from 'react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image Placeholder */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-xs text-center px-2">{product.name}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
        
        {/* Features */}
        <div className="mt-4">
          <ul className="space-y-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <li key={index} className="text-xs text-gray-500 flex items-center">
                <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;