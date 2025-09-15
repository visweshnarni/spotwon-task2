
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

interface ServiceCardProps {
    iconClass: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconClass, title, description }) => {
    const FadeInDiv = useFadeIn('div');
    return (
        <FadeInDiv>
            <div className="bg-brand-accent p-8 rounded-3xl text-center h-full flex flex-col items-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div className="bg-white/20 h-20 w-20 rounded-full flex items-center justify-center mb-6">
                    <i className={`${iconClass} text-4xl text-white`}></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
                <p className="text-brand-dark-dark font-light leading-relaxed">{description}</p>
            </div>
        </FadeInDiv>
    );
};

const Services: React.FC = () => {
    const FadeInH1 = useFadeIn('h1');

    const servicesData: ServiceCardProps[] = [
        { iconClass: 'fas fa-search', title: 'Search Engine Optimization (SEO)', description: 'Boost your website’s visibility on search engines to drive organic traffic and ensure your target audience finds you easily.' },
        { iconClass: 'fas fa-bullhorn', title: 'Social Media Marketing', description: 'Grow your brand presence on platforms like Facebook, Instagram, and LinkedIn. We create engaging content and manage your profiles.' },
        { iconClass: 'fas fa-mouse-pointer', title: 'Pay-Per-Click Advertising (PPC)', description: 'Drive instant traffic and conversions with paid ad campaigns. We design and manage Google Ads to maximize your ROI.' },
        { iconClass: 'fas fa-pen-alt', title: 'Content Marketing', description: 'Establish authority in your industry with high-quality content. We develop blogs, videos, and infographics that engage your audience.' },
        { iconClass: 'fas fa-envelope-open-text', title: 'Email Marketing', description: 'Connect with your customers directly through tailored email campaigns that nurture leads and retain existing clients.' },
        { iconClass: 'fas fa-code', title: 'Website Design & Development', description: 'We design responsive, user-friendly websites that not only look great but also drive conversions through seamless user experiences.' },
        { iconClass: 'fas fa-shield-alt', title: 'Online Reputation Management', description: 'Manage your brand\'s reputation and reviews across the web. We build trust and credibility with potential customers.' },
        { iconClass: 'fas fa-chart-line', title: 'Analytics and Reporting', description: 'Make data-driven decisions with detailed reports. We track campaign performance and provide actionable insights to optimize strategies.' },
    ];

    return (
        <section id="services" className="py-24 bg-brand-gray-light bg-opacity-50">
            <div className="container mx-auto px-6">
                <FadeInH1>
                    <h1 className="text-5xl md:text-6xl font-semibold text-brand-dark-dark text-center mb-16">Our Services</h1>
                </FadeInH1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map(service => <ServiceCard key={service.title} {...service} />)}
                </div>
            </div>
        </section>
    );
};

export default Services;
