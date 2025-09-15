
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

interface InfoCardProps {
    iconUrl: string;
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ iconUrl, title, description }) => {
    const FadeInDiv = useFadeIn('div');
    return (
        <FadeInDiv>
            <div className="bg-brand-dark-dark/90 text-brand-gray rounded-3xl p-8 h-full flex flex-col hover:bg-brand-dark-dark transition-all duration-300 transform hover:-translate-y-2 shadow-xl">
                <img src={iconUrl} alt={title} className="h-32 w-auto object-contain self-center mb-6"/>
                <h4 className="text-brand-accent-light text-2xl font-semibold mb-4 text-center">{title}</h4>
                <p className="text-brand-gray text-center font-light leading-relaxed">{description}</p>
            </div>
        </FadeInDiv>
    );
};

const About: React.FC = () => {
    const FadeInDiv = useFadeIn('div');
    const FadeInH1 = useFadeIn('h1');
    const FadeInH4 = useFadeIn('h4');
    const FadeInP = useFadeIn('p');
    
    const infoCardsData: InfoCardProps[] = [
        { iconUrl: 'https://i.imgur.com/8Q9Z42S.png', title: 'OUR MISSION', description: 'Our mission is to empower businesses of all sizes to reach their full potential online by crafting tailored digital marketing strategies that deliver measurable results.' },
        { iconUrl: 'https://i.imgur.com/kYq3t2j.png', title: 'OUR APPROACH', description: 'We believe in a data-driven approach combined with creative insights. By understanding your audience and market trends, we create customized strategies that not only meet but exceed your business goals.' },
        { iconUrl: 'https://i.imgur.com/3qFwQ8k.png', title: 'OUR STORY', description: 'Founded by a group of marketing enthusiasts, our agency was born from a desire to help businesses navigate the complexities of the digital world with confidence and creativity.' },
    ];

    const collaboratorLogos = [
        'https://i.imgur.com/o5V3j4A.png',
        'https://i.imgur.com/xIeB5jQ.png',
        'https://i.imgur.com/aO3e07G.png',
        'https://i.imgur.com/uT2F8Vw.png',
        'https://i.imgur.com/I24y9Ea.png',
    ];

  return (
    <section id="about" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
          <FadeInDiv className="w-full lg:w-2/5">
            <img src="https://i.imgur.com/nJ2c8V9.png" alt="Our Team" className="w-full h-auto object-contain"/>
          </FadeInDiv>
          <div className="w-full lg:w-3/5">
            <FadeInH1><h1 className="text-5xl md:text-6xl font-semibold text-brand-dark-light mb-4">About Us</h1></FadeInH1>
            <FadeInH4><h4 className="text-2xl md:text-3xl font-medium text-brand-accent-light mb-6">Turning clicks into connections, and ideas into impact.</h4></FadeInH4>
            <FadeInP><p className="text-brand-dark text-lg font-light leading-relaxed text-justify">We are a passionate team of digital marketing experts dedicated to helping brands grow, engage, and thrive in the digital world. With a blend of creativity, strategy, and cutting-edge technology, we bring your brand's vision to life. Our tailored solutions ensure that your business stays ahead in a rapidly evolving digital landscape.</p></FadeInP>
          </div>
        </div>

        <div className="relative py-24 bg-about-boxes-bg bg-cover bg-center rounded-3xl">
          <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {infoCardsData.map(card => <InfoCard key={card.title} {...card} />)}
          </div>
        </div>
        
        <div className="mt-24 text-center">
            <FadeInH4><h4 className="text-2xl md:text-3xl text-brand-dark max-w-4xl mx-auto font-medium mb-12">Take your business to new heights with a digital marketing agency that truly cares about your success.</h4></FadeInH4>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {collaboratorLogos.map((logo, index) => (
                    <FadeInDiv key={index} className="opacity-0 transition-opacity duration-500" style={{ transitionDelay: `${index * 100}ms`}}>
                        <img src={logo} alt={`Collaborator ${index + 1}`} className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300" />
                    </FadeInDiv>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
