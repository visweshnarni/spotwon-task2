
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Hero: React.FC = () => {
  const FadeInH1 = useFadeIn('h1');
  const FadeInButton = useFadeIn('a');

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center bg-brand-gray">
      <div className="container mx-auto px-6 flex items-center">
        <div 
          className="absolute inset-0 bg-no-repeat bg-contain bg-right-top opacity-80" 
          style={{ backgroundImage: "url('https://i.imgur.com/rO9Z912.png')" }} // Placeholder for group-working2.png
        >
           <div className="absolute inset-0 bg-gradient-to-t from-brand-gray via-brand-gray/80 to-brand-gray"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-brand-gray via-brand-gray/50 to-transparent"></div>
        </div>
        <div className="relative w-full md:w-3/5 lg:w-1/2">
          <FadeInH1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brand-dark leading-tight">
              Empowering Brands to <span className="font-bold text-brand-accent">Grow, Engage, and Thrive</span> in the Digital World!
            </h1>
          </FadeInH1>
          <FadeInButton>
            <a href="#contact">
              <button className="mt-8 bg-brand-dark text-brand-gray-dark px-8 py-3 rounded-lg font-bold hover:bg-brand-dark-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us
              </button>
            </a>
          </FadeInButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
