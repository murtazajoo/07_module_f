'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 bg-white/70  right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled 
          ? ' shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold text-blue-600"
            aria-label="Welcome Lyon Home"
          >
           Welcome Lyon 
          </Link>
          
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="#attractions" 
                className="text-sky-600 hover:text-blue-600 transition-colors"
                aria-label="Go to attractions section"
              >
                Attractions
              </Link>
            </li>
            <li>
              <Link 
                href="#events" 
                className="text-sky-600 hover:text-blue-600 transition-colors"
                aria-label="Go to events section"
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                href="#information" 
                className="text-sky-600 hover:text-blue-600 transition-colors"
                aria-label="Go to information section"
              >
                Information
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="text-sky-600 hover:text-blue-600 transition-colors"
                aria-label="Go to contact section"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-sky-600 hover:text-blue-600"
            aria-label="Open mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
