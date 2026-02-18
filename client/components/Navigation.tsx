import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import BudimaLogo from './BudimaLogo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <BudimaLogo size="default" />
            <div className="hidden sm:block">
              <div className="font-bold text-xl">
                <span className="text-purple-600">Bu</span>
                <span className="text-purple-600">Di</span>
                <span className="text-purple-600">Ma</span>
                <span className="text-blue-400 ml-1">AI</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-purple-600 transition font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-purple-600 transition font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 transition font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-600 transition font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/login"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-purple-600" />
            ) : (
              <Menu className="w-6 h-6 text-purple-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition font-medium"
            >
              Contact
            </button>
            <Link
              to="/login"
              className="block mx-4 mt-4 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
