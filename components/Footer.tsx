import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              About Us
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              Getting Here
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              FAQs
            </a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              Places to Stay
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              Things to Do
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              Events Calendar
            </a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              Restaurants
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              Nightlife
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              Shopping
            </a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              Plan Your Trip
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              Contact Us
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-900 transition-colors">
              Newsletter Signup
            </a>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;