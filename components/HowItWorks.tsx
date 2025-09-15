
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

interface StepProps {
    index: number;
    imageUrl: string;
    title: string;
    description: string;
}

const Step: React.FC<StepProps> = ({ index, imageUrl, title, description }) => {
    const isOdd = index % 2 !== 0;
    const FadeInDiv = useFadeIn('div');

    return (
        <FadeInDiv>
            <div className={`flex flex-col md:flex-row items-center gap-12 ${isOdd ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={imageUrl} alt={title} className="max-h-80 object-contain"/>
                </div>
                <div className="w-full md:w-1/2">
                    <h4 className="text-3xl sm:text-4xl font-semibold text-brand-accent-light mb-4">{title}</h4>
                    <p className="text-brand-dark-light text-lg leading-relaxed">{description}</p>
                </div>
            </div>
        </FadeInDiv>
    );
};

interface FeatureProps {
    iconUrl: string;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ iconUrl, title, description}) => {
    const FadeInDiv = useFadeIn('div');
    return (
        <FadeInDiv className="text-center p-6">
             <div className="flex justify-center mb-4">
                <img src={iconUrl} alt={title} className="h-24 w-24 object-contain"/>
            </div>
            <h6 className="text-xl font-semibold text-brand-accent mb-2">{title}</h6>
            <p className="text-brand-gray-dark font-light max-w-xs mx-auto">{description}</p>
        </FadeInDiv>
    );
};


const HowItWorks: React.FC = () => {
    const FadeInH1 = useFadeIn('h1');
    const FadeInH2 = useFadeIn('h2');
    
    const stepsData = [
        { imageUrl: 'https://i.imgur.com/1B3e2k8.png', title: 'Discovery & Research', description: 'We start by understanding your business, goals, and audience. Thorough research helps us craft a tailored strategy for your unique needs.' },
        { imageUrl: 'https://i.imgur.com/2s4f0vT.png', title: 'Strategy & Planning', description: 'We establish a detailed roadmap, set timelines, and define clear milestones. Collaboration ensures we are aligned on objectives and vision.' },
        { imageUrl: 'https://i.imgur.com/o1n2j5R.png', title: 'UI/UX Design & Prototyping', description: 'Our design phase focuses on a visually appealing and user-friendly interface. Prototypes are refined through user testing for optimal experiences.' },
        { imageUrl: 'https://i.imgur.com/4k7C0tG.png', title: 'Development & Implementation', description: 'With the design finalized, we build the site architecture, implement custom functionality, and ensure responsiveness across all devices.' },
        { imageUrl: 'https://i.imgur.com/i9d9z7B.png', title: 'Quality Assurance & Testing', description: 'The website undergoes rigorous testing to ensure it functions flawlessly. We check everything from links to forms for accuracy and compatibility.' },
        { imageUrl: 'https://i.imgur.com/7w8A2tX.png', title: 'Launch & Deployment', description: 'Once testing is complete, it’s time to go live. We handle final SEO optimizations and set up analytics for monitoring.' },
        { imageUrl: 'https://i.imgur.com/j6s4F9Z.png', title: 'Post-Launch Support & Optimization', description: 'Our work doesn’t end at launch. We provide ongoing support, bug fixes, and performance optimizations to ensure your site evolves with your needs.' },
    ];
    
    const featuresData = [
        { iconUrl: 'https://i.imgur.com/f0u8L5H.png', title: 'Results-Driven Approach', description: 'We focus on delivering measurable outcomes that directly support your business goals.' },
        { iconUrl: 'https://i.imgur.com/5E6uF1R.png', title: 'Customized Solutions', description: 'Our strategies are tailored to your brand’s unique needs for maximum impact and ROI.' },
        { iconUrl: 'https://i.imgur.com/d9j4I8N.png', title: 'Experienced Team of Experts', description: 'Our skilled marketers bring expertise across SEO, social media, and paid advertising.' },
        { iconUrl: 'https://i.imgur.com/6X9H7Wk.png', title: 'Transparent Reporting', description: 'We provide clear, detailed reports to keep you informed about your campaign\'s performance.' },
        { iconUrl: 'https://i.imgur.com/p0p9T2S.png', title: 'Dedicated Client Support', description: 'Receive personalized guidance and support from a dedicated account manager.' },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-brand-gray bg-gradient-to-b from-transparent via-brand-accent-dark/20 to-transparent">
            <div className="container mx-auto px-6">
                <FadeInH1>
                    <h1 className="text-5xl md:text-7xl font-bold text-brand-dark-dark text-center mb-24">This is How it Works</h1>
                </FadeInH1>
                <div className="space-y-24">
                    {stepsData.map((step, index) => <Step key={step.title} index={index + 1} {...step} />)}
                </div>
            </div>

            <div className="mt-24 pt-24 bg-why-us-bg bg-cover bg-center">
                <div className="bg-brand-dark-dark/90 py-24">
                    <div className="container mx-auto px-6">
                        <FadeInH2>
                            <h2 className="text-5xl md:text-6xl font-bold text-brand-accent-dark text-center mb-16">Why Us</h2>
                        </FadeInH2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                            {featuresData.map(feature => <Feature key={feature.title} {...feature} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
