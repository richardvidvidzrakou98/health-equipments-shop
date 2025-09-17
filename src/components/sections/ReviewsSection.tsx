import React from 'react';

const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-white">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2 tracking-wider">WORKING FOR</h3>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                GLOWING <span className="bg-white text-orange-500 px-2">REVIEWS</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Working within many industries, we have the opportunity to 
                get to know our customers and the unique challenges they 
                face. Between our products and services, we work with 
                farms, ESCOs, electrical distributors, construction 
                managers and everything in between.
              </p>
              <p>
                No matter who we're serving, there's one thing in common: the need for tough 
                products and intelligent design.
              </p>
            </div>
          </div>
          
          {/* Right Side - Team Image */}
          <div className="relative">
            {/* Placeholder for team image */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center relative">
                {/* Team Members Placeholder */}
                <div className="flex space-x-4">
                  {/* Person 1 */}
                  <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">👨‍💼</span>
                  </div>
                  {/* Person 2 */}
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">👩‍💼</span>
                  </div>
                  {/* Person 3 */}
                  <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">👷‍♂️</span>
                  </div>
                </div>
                
                {/* Hard Hat */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                </div>
                <div className="absolute bottom-4 right-8">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white rounded-full opacity-60"></div>
          </div>
        </div>
        
        {/* Bottom Stats/Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-90">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-sm opacity-90">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;