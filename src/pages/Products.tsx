import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import { PRODUCTS } from '../utils/constants';

const Products: React.FC = () => {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            MEET OUR <span className="text-white">MEDICAL EQUIPMENT</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-4 opacity-90">
            HEALTHCARE SOLUTIONS
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg opacity-90 leading-relaxed">
              Engineered with durability and reliability in mind, our medical equipment leads the healthcare industry with 
              hospital-grade products that are built to perform in the most demanding environments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 mb-4">
              SAVING YOU TIME AND MONEY
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Engineered with durability and simplicity in mind, our patented medical equipment leads the healthcare industry with 
              hospital-grade products that are built to shine in the toughest environments.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                {/* Product Image */}
                <div className="h-64 bg-gray-100 overflow-hidden">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400 text-sm text-center px-4">{product.name}</span>
                    </div>
                  )}
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link 
                    to={`/products/${product.id}`}
                    className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold flex items-center justify-center group"
                  >
                    <span>SEE PRODUCT DETAILS</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            LET US SHED LIGHT
          </h2>
          <p className="text-2xl lg:text-3xl mb-6 opacity-90">
            ON THE RIGHT SOLUTION FOR YOU
          </p>
          <div className="w-16 h-0.5 bg-white mx-auto mb-8 opacity-60"></div>
          <p className="text-lg mb-8 opacity-90">
            Have a question about our products, services or how we can help?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us Today
            </a>
            <a
              href="tel:571-665-0501"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors"
            >
              Call 571-665-0501
            </a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Products;
