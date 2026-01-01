import React from 'react';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 py-6 lg:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Status Badge */}
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">Currently available for new opportunities</span>
            </div>

            {/* Main Content */}
            <div className="space-y-5">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Osiris Stephenson
                </h1>
                <h2 className="text-lg lg:text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  Product Designer | UX Researcher
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  I design simple products with data informed choices and clean handoffs.
                </p>
              </div>

              {/* Visual Divider */}
              <div className="py-6">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img 
                  src="/boyfren copy.png" 
                  alt="Osiris Stephenson - UX Researcher"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Profile image failed to load, trying fallback');
                  }}
                />
              </div>
              {/* Location Badge */}
              <div className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 shadow-lg flex items-center space-x-2">
                <MapPin size={14} className="text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}