import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import { PRODUCTS } from '../utils/constants';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <DefaultLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link to="/products" className="text-orange-500 hover:text-orange-600">
              Back to Products
            </Link>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      {/* Hero Section with Orange Background and Bubble Pattern */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 overflow-hidden">
        {/* Bubble Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-20 left-32 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute top-40 left-20 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute top-60 left-40 w-5 h-5 bg-white rounded-full"></div>
          <div className="absolute top-32 left-64 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-80 left-16 w-7 h-7 bg-white rounded-full"></div>
          <div className="absolute top-16 left-80 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute top-52 left-96 w-5 h-5 bg-white rounded-full"></div>
          <div className="absolute top-24 right-20 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-44 right-40 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute top-64 right-16 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute top-36 right-60 w-5 h-5 bg-white rounded-full"></div>
          <div className="absolute top-72 right-32 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-12 right-80 w-7 h-7 bg-white rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                THE {product.name.toUpperCase()}
              </h1>
              <p className="text-xl lg:text-2xl mb-4">
                TOUGH FIXTURE.
              </p>
              <p className="text-xl lg:text-2xl mb-8">
                EASY INSTALLATION.
              </p>
              
              {/* Navigation Breadcrumb */}
              <nav className="mb-8">
                <div className="flex items-center space-x-2 text-sm">
                  <Link to="/" className="hover:text-orange-200 transition-colors">
                    HOME
                  </Link>
                  <span className="text-orange-200">•</span>
                  <Link to="/products" className="hover:text-orange-200 transition-colors">
                    PRODUCTS
                  </Link>
                  <span className="text-orange-200">•</span>
                  <span className="text-orange-200">
                    {product.name.toUpperCase()}
                  </span>
                </div>
              </nav>
            </div>

            {/* Right Product Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-md w-full h-auto object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - Product Image */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-contain max-h-96"
                />
              </div>
              
              {/* Additional Product Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 aspect-square flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={`${product.title} view 1`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-4 aspect-square flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={`${product.title} view 2`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right - Product Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-orange-500 mb-6">
                  THE {product.name.toUpperCase()}
                </h2>
                <p className="text-xl text-orange-500 font-semibold mb-8">
                  INTELLIGENTLY DESIGNED FOR QUICK, WATERTIGHT INSTALLATION.
                </p>
                
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-6">
                    {product.description}
                  </p>
                  
                  <p className="mb-6">
                    Essentially, we took the standard jar utility light fixture and made it 
                    1,000 times better. The {product.name} boasts strength and ease of use. Say 
                    goodbye to cumbersome installation of gaskets and screws (we know 
                    you won't miss it). Simply twist and lock the fixture into place, and voila! 
                    You've got a watertight light ready for your toughest challenge.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                <div className="space-y-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link 
                  to="/contact"
                  className="w-full bg-orange-500 text-white py-4 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold text-lg text-center block"
                >
                  ORDER THIS PRODUCT
                </Link>
                <Link 
                  to="/contact"
                  className="w-full border-2 border-orange-500 text-orange-500 py-4 px-8 rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-200 font-semibold text-lg text-center block"
                >
                  REQUEST SERVICE & SUPPORT
                </Link>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Need More Information?</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Call us at: <span className="font-semibold text-orange-500">571-665-0501</span></p>
                  <p>Email: <span className="font-semibold text-orange-500">WayneMedicalSupplies@gmail.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Products</h2>
            <p className="text-lg text-gray-600">Explore other medical equipment that might interest you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => p.id !== product.id).slice(0, 3).map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                to={`/products/${relatedProduct.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedProduct.description}
                    </p>
                    <div className="text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                      View Details →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ProductDetails;