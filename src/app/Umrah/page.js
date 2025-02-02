"use client";
import Link from 'next/link';
import Image from 'next/image';
import '@/app/Umrah/media.css';
import { useState } from 'react';

const UmrahTravelServices = () => {
    const [expandedService, setExpandedService] = useState(false);

    const toggleReadMore = () => {
        setExpandedService(!expandedService);
    };

    return (
        <section className="umrah-travel-services">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Umrah Travel Services</h1>
                    <p>
                        Embark on a spiritual journey like no other with our meticulously designed Umrah packages. 
                        We ensure every aspect of your pilgrimage is handled with care, allowing you to focus entirely on your spiritual goals.
                    </p>
                    <button className="cta-button" onClick={toggleReadMore}>
                        {expandedService ? 'Show Less' : 'Explore More'}
                    </button>
                </div>
                <div className="hero-image">
                    <Image 
                        src="/images/u1.jpg" 
                        alt="Umrah Travel Services" 
                        width={1200} 
                        height={800} 
                        className="hero-img"
                    />
                </div>
            </div>

            {/* Additional Details */}
            {expandedService && (
                <div className="additional-details">
                    <h2>Why Choose Us?</h2>
                    <p>
                        With over a decade of experience in organizing Umrah trips, we have helped thousands of pilgrims fulfill their spiritual dreams. 
                        Our success rate is unmatched, and our clients consistently praise our dedication, expertise, and attention to detail. 
                        We understand the spiritual significance of this journey and strive to make it as meaningful as possible for you.
                    </p>
                    <div className="why-choose-us-images">
                        <div className="image-card">
                            <Image 
                                src="/images/1.jpg" 
                                alt="Why Choose Us 1" 
                                width={400} 
                                height={300} 
                                className="why-choose-us-img"
                            />
                            <p>Expert Guidance</p>
                        </div>
                        <div className="image-card">
                            <Image 
                                src="/images/2.jpg" 
                                alt="Why Choose Us 2" 
                                width={400} 
                                height={300} 
                                className="why-choose-us-img"
                            />
                            <p>24/7 Support</p>
                        </div>
                        <div className="image-card">
                            <Image 
                                src="/images/3.jpg" 
                                alt="Why Choose Us 3" 
                                width={400} 
                                height={300} 
                                className="why-choose-us-img"
                            />
                            <p>Luxurious Comfort</p>
                        </div>
                    </div>

                    <h3>Our Process</h3>
                    <div className="process-steps">
                        <div className="step">
                            <h4>1. Initial Consultation</h4>
                            <p>We begin by understanding your needs, preferences, and budget. Our team will guide you in selecting the perfect package.</p>
                        </div>
                        <div className="step">
                            <h4>2. Document Preparation</h4>
                            <p>We assist you in gathering and organizing all necessary documents, including visa applications and travel permits.</p>
                        </div>
                        <div className="step">
                            <h4>3. Travel Arrangements</h4>
                            <p>We book your flights, accommodations, and transportation, ensuring a smooth and comfortable journey.</p>
                        </div>
                        <div className="step">
                            <h4>4. On-Ground Support</h4>
                            <p>Our team is available 24/7 during your trip to assist with any needs or concerns.</p>
                        </div>
                        <div className="step">
                            <h4>5. Post-Trip Follow-Up</h4>
                            <p>We follow up with you after your journey to ensure your experience was satisfactory and to address any feedback.</p>
                        </div>
                    </div>

                    <h3>Frequently Asked Questions</h3>
                    <div className="faq-section">
                        <div className="faq-item">
                            <h4>What is the best time to perform Umrah?</h4>
                            <p>The best time depends on your schedule, but many prefer the cooler months between November and February.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you provide visa assistance?</h4>
                            <p>Yes, we handle all visa-related paperwork and ensure a smooth process.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Can I customize my package?</h4>
                            <p>Absolutely! We offer customizable packages to suit your specific needs.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="main-content">
                <h2>Our Umrah Packages</h2>
                <p>
                    We offer a range of packages tailored to meet your needs, whether you're looking for luxury or affordability. 
                    Each package is designed to provide a seamless and spiritually enriching experience.
                </p>

                {/* Platinum Elegance Package */}
                <div className="package-card platinum">
                    <div className="package-image">
                        <Image 
                            src="/images/u2.jpg" 
                            alt="Platinum Elegance Package" 
                            width={800} 
                            height={500} 
                            className="package-img"
                        />
                    </div>
                    <div className="package-details">
                        <h3>Platinum Elegance Package</h3>
                        <p>
                            Designed for those seeking a luxurious experience, this package includes 5-star accommodations, private transportation, 
                            and exclusive access to premium services. Enjoy a seamless journey with personalized attention and comfort.
                        </p>
                        <h4>What’s Included?</h4>
                        <ul>
                            <li>5-star hotels near the Haram with stunning views.</li>
                            <li>Private transportation with experienced drivers.</li>
                            <li>Gourmet meals prepared by top chefs.</li>
                            <li>Personalized guided tours to historical and religious sites.</li>
                            <li>24/7 dedicated support team.</li>
                        </ul>
                        <Link href="/contact">
                        <button className="cta-button">Book Now</button>
                        </Link>
                    </div>
                </div>

                {/* Affordable Excellence Package */}
                <div className="package-card affordable">
                    <div className="package-image">
                        <Image 
                            src="/images/u3.png" 
                            alt="Affordable Excellence Package" 
                            width={800} 
                            height={500} 
                            className="package-img"
                        />
                    </div>
                    <div className="package-details">
                        <h3>Affordable Excellence Package</h3>
                        <p>
                            Perfect for budget-conscious travelers, this package offers comfortable stays, group transportation, 
                            and all essential services at an affordable price. Experience a hassle-free pilgrimage without compromising on quality.
                        </p>
                        <h4>What’s Included?</h4>
                        <ul>
                            <li>3-4 star hotels near the Haram.</li>
                            <li>Group transportation with modern vehicles.</li>
                            <li>Buffet-style meals with a variety of options.</li>
                            <li>Guided tours to key religious sites.</li>
                            <li>24/7 customer support.</li>
                        </ul>
                        <Link href="/contact">
                        <button className="cta-button">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
                <h2>Ready to Embark on Your Spiritual Journey?</h2>
                <p>Contact us today to book your Umrah package and experience a pilgrimage like no other.</p>
                <Link href="/contact">
  <button className="cta-button">Get in Touch</button>
</Link>
            </div>
        </section>
    );
};

export default UmrahTravelServices;
