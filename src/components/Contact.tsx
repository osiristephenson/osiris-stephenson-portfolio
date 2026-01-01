import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always excited to collaborate on meaningful research projects. Let's 
                discuss how we can create better user experiences together.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:info.stephensonconsulting@gmail.com"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Mail size={16} />
                <span>Email Me</span>
              </a>
              <a 
                href="https://linkedin.com/in/stephensoe"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Coffee Chat Note */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                Always up for a coffee chat about UX research!
              </p>
            </div>
          </div>

          {/* Right Content - Footer Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src="/footer.png" 
                alt="Osiris walking on the beach"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Footer image failed to load:', e);
                  e.currentTarget.src = 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}