
import React, { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        enquiry: '',
    });
    
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setSubmitted(true);
        // Here you would typically send the data to a server
    };

    const FadeInDiv = useFadeIn('div');
    const FadeInH2 = useFadeIn('h2');

    return (
        <section id="contact" className="py-24 bg-gradient-to-t from-brand-gray to-brand-dark-dark">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                <FadeInDiv className="w-full lg:w-1/2">
                    <div className="bg-brand-accent p-8 sm:p-12 rounded-2xl shadow-2xl">
                        <FadeInH2>
                            <h2 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h2>
                        </FadeInH2>
                        {submitted ? (
                            <div className="text-center bg-white/20 p-8 rounded-lg">
                                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                                <p className="text-brand-dark-dark text-lg">Your message has been sent. We'll get back to you shortly.</p>
                            </div>
                        ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-brand-dark text-sm font-bold mb-2">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/90 text-brand-dark focus:outline-none focus:ring-2 focus:ring-white transition"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-brand-dark text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/90 text-brand-dark focus:outline-none focus:ring-2 focus:ring-white transition"/>
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-brand-dark text-sm font-bold mb-2">Company Name</label>
                                <input type="text" id="company" name="company" placeholder="Your Company Name" value={formData.company} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/90 text-brand-dark focus:outline-none focus:ring-2 focus:ring-white transition"/>
                            </div>
                            <div>
                                <label htmlFor="enquiry" className="block text-brand-dark text-sm font-bold mb-2">Enquiry</label>
                                <textarea id="enquiry" name="enquiry" placeholder="Your Enquiry" rows={5} value={formData.enquiry} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/90 text-brand-dark focus:outline-none focus:ring-2 focus:ring-white transition resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-dark-dark transition-colors duration-300 transform hover:scale-105">
                                Submit
                            </button>
                        </form>
                        )}
                    </div>
                </FadeInDiv>
                <FadeInDiv className="w-full lg:w-1/2 hidden lg:block">
                     <img src="https://i.imgur.com/k9b6I1j.png" alt="Contact illustration" className="w-full h-auto object-contain"/>
                </FadeInDiv>
            </div>
        </section>
    );
};

export default Contact;
