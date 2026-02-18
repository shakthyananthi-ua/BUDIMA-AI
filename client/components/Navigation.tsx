import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

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
            <div className="w-8 h-8 bg-gradient-to-br from-budima-deep-blue to-budima-indigo rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl text-budima-deep-blue hidden sm:inline">
              BUDIMA AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-budima-deep-blue transition font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-budima-deep-blue transition font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-budima-deep-blue transition font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-budima-deep-blue transition font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/login"
              className="px-6 py-2.5 bg-gradient-to-r from-budima-deep-blue to-budima-indigo text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-budima-deep-blue/20 transition-all duration-300"
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
              <X className="w-6 h-6 text-budima-deep-blue" />
            ) : (
              <Menu className="w-6 h-6 text-budima-deep-blue" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-budima-deep-blue hover:bg-budima-light-bg transition font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-budima-deep-blue hover:bg-budima-light-bg transition font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-budima-deep-blue hover:bg-budima-light-bg transition font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-budima-deep-blue hover:bg-budima-light-bg transition font-medium"
            >
              Contact
            </button>
            <Link
              to="/login"
              className="block mx-4 mt-4 px-4 py-2.5 bg-gradient-to-r from-budima-deep-blue to-budima-indigo text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
