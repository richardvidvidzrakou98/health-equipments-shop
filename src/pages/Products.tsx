import React, { useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { COMPANY_INFO } from '../utils/constants';
import type { ProductCategory } from '../types';

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'dme',
    name: 'Durable Medical Equipment (DME)',
    description: 'Essential mobility and positioning equipment for daily living',
    products: [
      { id: 'wheelchairs', name: 'Wheelchairs', title: 'Manual & Electric Wheelchairs', description: 'Lightweight, durable wheelchairs for enhanced mobility', image: '/images/products/wheelchair', features: ['Manual & Electric', 'Lightweight', 'Adjustable', 'Comfortable'] },
      { id: 'walkers', name: 'Walkers', title: 'Walking Aids & Walkers', description: 'Support and stability for safe walking', image: '/images/products/mobilityaids.webp', features: ['Adjustable Height', 'Lightweight', 'Foldable', 'Non-slip'] },
      { id: 'hospital-beds', name: 'Hospital Beds', title: 'Adjustable Hospital Beds', description: 'Electric and manual hospital beds for home care', image: '/images/products/hospitalbed.jpg', features: ['Electric Controls', 'Side Rails', 'Comfortable', 'Adjustable'] },
      { id: 'scooters', name: 'Mobility Scooters', title: 'Electric Mobility Scooters', description: 'Battery-powered scooters for extended mobility', image: '', features: ['Long Battery Life', 'Comfortable Seat', 'Easy Controls', 'Portable'] }
    ]
  },
  {
    id: 'respiratory',
    name: 'Respiratory Supplies',
    description: 'Breathing support and respiratory therapy equipment',
    products: [
      { id: 'oxygen-tanks', name: 'Oxygen Tanks', title: 'Portable Oxygen Tanks', description: 'Lightweight oxygen cylinders for mobility', image: '/images/products/oxygyenequipment.webp', features: ['Portable', 'Various Sizes', 'Safety Valves', 'Refillable'] },
      { id: 'cpap-bipap', name: 'CPAP/BiPAP', title: 'Sleep Therapy Equipment', description: 'Continuous positive airway pressure machines', image: '', features: ['Quiet Operation', 'Comfortable Masks', 'Data Tracking', 'Travel-friendly'] },
      { id: 'nebulizers', name: 'Nebulizers', title: 'Medication Nebulizers', description: 'Devices for delivering respiratory medications', image: '', features: ['Efficient Delivery', 'Easy to Clean', 'Portable Options', 'Quick Treatment'] },
      { id: 'suction-machines', name: 'Suction Machines', title: 'Portable Suction Units', description: 'Airway clearance and secretion management', image: '', features: ['Portable', 'Quiet Operation', 'Easy Maintenance', 'Powerful Suction'] }
    ]
  },
  {
    id: 'wound-care',
    name: 'Wound Care & First Aid',
    description: 'Comprehensive supplies for wound treatment and healing',
    products: [
      { id: 'bandages', name: 'Bandages', title: 'Medical Bandages & Gauze', description: 'Sterile bandages for wound protection', image: '/images/products/woundcare.jpg', features: ['Sterile', 'Various Sizes', 'Breathable', 'Adhesive Options'] },
      { id: 'antiseptics', name: 'Antiseptics', title: 'Wound Cleaning Solutions', description: 'Antiseptic solutions and wound cleaners', image: '', features: ['Antimicrobial', 'Safe for Skin', 'Fast-acting', 'Various Formulations'] },
      { id: 'burn-care', name: 'Burn Care', title: 'Burn Treatment Supplies', description: 'Specialized products for burn care and healing', image: '', features: ['Cooling Relief', 'Non-adherent', 'Sterile', 'Pain Relief'] },
      { id: 'first-aid-kits', name: 'First Aid Kits', title: 'Complete First Aid Kits', description: 'Comprehensive emergency care supplies', image: '', features: ['Complete Supplies', 'Portable Cases', 'Emergency Guide', 'Refillable'] }
    ]
  },
  {
    id: 'orthopedic',
    name: 'Orthopedic & Rehabilitation',
    description: 'Support devices and rehabilitation equipment',
    products: [
      { id: 'braces', name: 'Braces & Supports', title: 'Orthopedic Braces', description: 'Joint support and stabilization devices', image: '', features: ['Comfortable Fit', 'Adjustable', 'Breathable Material', 'Various Joints'] },
      { id: 'compression', name: 'Compression Stockings', title: 'Medical Compression Wear', description: 'Graduated compression for circulation support', image: '', features: ['Medical Grade', 'Various Pressures', 'Comfortable', 'Different Lengths'] },
      { id: 'prosthetics', name: 'Prosthetics', title: 'Prosthetic Devices', description: 'Artificial limbs and prosthetic components', image: '', features: ['Custom Fit', 'Lightweight', 'Durable', 'Natural Movement'] },
      { id: 'therapy-equipment', name: 'Therapy Equipment', title: 'Rehabilitation Tools', description: 'Exercise and therapy equipment for recovery', image: '', features: ['Progressive Resistance', 'Easy to Use', 'Portable', 'Effective'] }
    ]
  },
  {
    id: 'incontinence',
    name: 'Incontinence & Personal Care',
    description: 'Dignity and comfort products for personal care needs',
    products: [
      { id: 'adult-diapers', name: 'Adult Diapers', title: 'Adult Incontinence Products', description: 'Comfortable and absorbent adult diapers', image: '', features: ['High Absorbency', 'Comfortable Fit', 'Odor Control', 'Various Sizes'] },
      { id: 'bedpans', name: 'Bedpans & Urinals', title: 'Bedside Toileting Aids', description: 'Convenient bedside toileting solutions', image: '', features: ['Easy to Clean', 'Comfortable Design', 'Splash Guards', 'Durable'] },
      { id: 'underpads', name: 'Underpads', title: 'Disposable Underpads', description: 'Protective underpads for beds and chairs', image: '', features: ['Waterproof', 'Disposable', 'Various Sizes', 'Soft Surface'] },
      { id: 'skin-care', name: 'Skin Care', title: 'Incontinence Skin Care', description: 'Protective skin care products', image: '', features: ['Barrier Protection', 'pH Balanced', 'Gentle Formula', 'Easy Application'] }
    ]
  },
  {
    id: 'diagnostic',
    name: 'Diagnostic & Monitoring Equipment',
    description: 'Health monitoring and diagnostic tools for home use',
    products: [
      { id: 'blood-pressure', name: 'Blood Pressure Monitors', title: 'Digital BP Monitors', description: 'Accurate blood pressure measurement devices', image: '/images/products/bloodpressuremonitor.jpg', features: ['Digital Display', 'Memory Storage', 'Large Cuff', 'Easy Operation'] },
      { id: 'glucose-meters', name: 'Glucose Meters', title: 'Blood Sugar Monitors', description: 'Diabetes monitoring and management tools', image: '', features: ['Fast Results', 'Small Sample Size', 'Memory Function', 'Easy Testing'] },
      { id: 'thermometers', name: 'Thermometers', title: 'Digital Thermometers', description: 'Accurate temperature measurement devices', image: '', features: ['Fast Reading', 'Digital Display', 'Fever Alert', 'Easy to Clean'] },
      { id: 'stethoscopes', name: 'Stethoscopes', title: 'Medical Stethoscopes', description: 'Professional-grade acoustic stethoscopes', image: '', features: ['Clear Sound', 'Comfortable Earpieces', 'Durable', 'Various Types'] }
    ]
  },
  {
    id: 'surgical',
    name: 'Surgical & Exam Supplies',
    description: 'Professional medical supplies for clinical use',
    products: [
      { id: 'gloves', name: 'Medical Gloves', title: 'Disposable Medical Gloves', description: 'Sterile and non-sterile examination gloves', image: '', features: ['Latex-free Options', 'Various Sizes', 'Powder-free', 'Sterile Available'] },
      { id: 'gowns', name: 'Medical Gowns', title: 'Protective Medical Gowns', description: 'Disposable and reusable protective gowns', image: '', features: ['Fluid Resistant', 'Comfortable Fit', 'Tie Closures', 'Various Levels'] },
      { id: 'syringes', name: 'Syringes', title: 'Medical Syringes & Needles', description: 'Sterile syringes for medical procedures', image: '', features: ['Sterile', 'Various Sizes', 'Safety Features', 'Luer Lock'] },
      { id: 'exam-tables', name: 'Exam Tables', title: 'Medical Examination Tables', description: 'Professional examination and treatment tables', image: '', features: ['Adjustable Height', 'Comfortable Padding', 'Easy to Clean', 'Durable Construction'] }
    ]
  },
  {
    id: 'daily-living',
    name: 'Home Health & Daily Living Aids',
    description: 'Assistive devices for independence in daily activities',
    products: [
      { id: 'shower-chairs', name: 'Shower Chairs', title: 'Bathroom Safety Chairs', description: 'Safe and comfortable bathing solutions', image: '', features: ['Non-slip Feet', 'Adjustable Height', 'Comfortable Seat', 'Easy Assembly'] },
      { id: 'grab-bars', name: 'Grab Bars', title: 'Safety Grab Bars', description: 'Bathroom and stairway safety support bars', image: '', features: ['Strong Support', 'Easy Installation', 'Non-slip Grip', 'Various Lengths'] },
      { id: 'toilet-seats', name: 'Raised Toilet Seats', title: 'Elevated Toilet Seats', description: 'Toilet seat risers for easier transfers', image: '', features: ['Easy Installation', 'Secure Fit', 'Comfortable', 'Easy to Clean'] },
      { id: 'dressing-aids', name: 'Dressing Aids', title: 'Adaptive Dressing Tools', description: 'Tools to assist with dressing and grooming', image: '', features: ['Easy to Use', 'Long Handles', 'Lightweight', 'Helpful Design'] }
    ]
  }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('dme');

  const currentCategory = PRODUCT_CATEGORIES.find(cat => cat.id === selectedCategory) || PRODUCT_CATEGORIES[0];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl opacity-90">
            Comprehensive medical equipment and supplies for all your healthcare needs
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {PRODUCT_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg text-left transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-orange-50 shadow-md'
                  }`}
                >
                  <h3 className="font-semibold text-sm mb-2">{category.name}</h3>
                  <p className={`text-xs ${selectedCategory === category.id ? 'text-orange-100' : 'text-gray-500'}`}>
                    {category.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Category Products */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentCategory.name}</h2>
              <p className="text-lg text-gray-600">{currentCategory.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCategory.products.map((product) => (
                <div key={product.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  {/* Product Image */}
                  <div className="h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm text-center px-2">{product.name}</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-500">
                        <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors text-sm font-medium">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Equipment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our experienced team is here to help you choose the perfect medical equipment for your needs.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors">
              Call {COMPANY_INFO.phone}
            </button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Products;