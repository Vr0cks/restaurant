import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Header = ({ onNavigate, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', action: () => scrollToSection('home') },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Menu', action: () => scrollToSection('menu') },
    { label: 'Reservations', action: () => scrollToSection('reservations') },
    { label: 'Gallery', action: () => scrollToSection('gallery') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-amber-900 text-amber-100 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Open: 11:00 AM - 10:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>123 Vista Street, Downtown</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-amber-900' : 'text-white'
              }`}>
                Bella Vista
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`font-medium transition-colors hover:text-amber-600 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => onNavigate('order')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Order Online
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-800 hover:text-amber-600"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('order');
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-amber-600 font-medium"
              >
                Order Online
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;