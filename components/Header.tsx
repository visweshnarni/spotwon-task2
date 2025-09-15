
import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
    <svg width="180" height="80" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 30L35 15L50 45L65 5" stroke="#263238" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="75" y="40" fontFamily="Poppins, sans-serif" fontSize="28" fontWeight="bold" fill="#263238">Rocket</text>
        <text x="110" y="52" fontFamily="Poppins, sans-serif" fontSize="16" fontWeight="bold" fill="#ff6941">Transform</text>
    </svg>
);


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'How it Works' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-gray/80 backdrop-blur-lg shadow-md' : 'bg-brand-gray'}`}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#home" className="flex-shrink-0">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-brand-dark font-semibold hover:text-brand-accent transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#contact">
            <button className="bg-brand-dark text-brand-gray-dark px-6 py-2 rounded-md font-bold hover:bg-brand-dark-dark transition-colors duration-300 transform hover:scale-105">
              Join Now
            </button>
          </a>
          <a href="#" className="bg-brand-dark text-brand-gray-dark h-10 w-10 rounded-full flex items-center justify-center hover:bg-brand-dark-dark transition-colors duration-300 transform hover:scale-105">
            <i className="fa-regular fa-user"></i>
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark text-2xl z-50 relative">
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-brand-gray/95 backdrop-blur-xl transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-brand-dark text-2xl font-bold hover:text-brand-accent transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-brand-dark text-brand-gray-dark px-8 py-3 rounded-lg font-bold hover:bg-brand-dark-dark transition-colors duration-300 text-xl">
              Join Now
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
