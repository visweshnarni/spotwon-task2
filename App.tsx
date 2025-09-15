
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';

const App: React.FC = () => {
  return (
    <div className="bg-brand-gray text-brand-dark overflow-x-hidden">
      <CursorFollower />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
