import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';

interface HeaderProps {
  activeSection?: string;
}

export default function Header({ activeSection = 'home' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If on other pages, Link will handle navigation to homepage
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Logo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
              activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            }`}>
              <Home size={16} />
              <span>Home</span>
            </Link>
            <a href="#work" className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
              activeSection === 'work' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            }`}>
              <Briefcase size={16} />
              <span>Work</span>
            </a>
            <Link to="/about" className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
              activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            }`}>
              <User size={16} />
              <span>About</span>
            </Link>
          </nav>

          {/* Desktop Dark Mode Toggle and Mobile Menu */}
          <div className="flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 space-y-2">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`flex items-center space-x-3 px-4 py-3 text-base font-medium transition-colors ${
                activeSection === 'home' ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <a 
              href="#work" 
              onClick={closeMobileMenu}
              className={`flex items-center space-x-3 px-4 py-3 text-base font-medium transition-colors ${
                activeSection === 'work' ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Briefcase size={20} />
              <span>Work</span>
            </a>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`flex items-center space-x-3 px-4 py-3 text-base font-medium transition-colors ${
                activeSection === 'about' ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <User size={20} />
              <span>About</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}