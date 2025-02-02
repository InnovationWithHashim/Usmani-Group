"use client";
import '@/app/Events/Events.css';
import React, { useState } from 'react';
import Image from 'next/image';

const Events = () => {
    const [expandedService, setExpandedService] = useState(null);

    const toggleReadMore = (service) => {
        setExpandedService(expandedService === service ? null : service);
    };

    return (
        <div className="servicesPage">
            {/* Event Organization & Management */}
            <div className="serviceCard">
                <div className="serviceImage">
                    <Image 
                        src="/images/E1.jpg" // Replace with your image path
                        alt="Event Management" 
                        width={1200} 
                        height={600} 
                        className="cardImage"
                    />
                </div>
                <div className="serviceContent">
                    <h2>Event Organization & Management</h2>
                    <p>
                        From weddings to corporate events, we bring your vision to life. 
                        Our team of experts will handle every detail, ensuring your event is unforgettable.
                    </p>
                    <h3>Events We Manage:</h3>
                    <ul>
                        <li><strong>Weddings:</strong> From intimate gatherings to grand celebrations, we create magical moments.</li>
                        <li><strong>Birthdays:</strong> Personalized themes and decorations to make your day special.</li>
                        <li><strong>Corporate Events:</strong> Professional and seamless execution for business events.</li>
                        <li><strong>Anniversaries:</strong> Celebrate milestones with style and elegance.</li>
                        <li><strong>Product Launches:</strong> Create buzz and excitement for your new product.</li>
                        <li><strong>Charity Galas:</strong> Elegant and impactful events for a cause.</li>
                    </ul>
                    {expandedService === 'event' && (
                        <div className="additionalDetails">
                            <h4>Our Process:</h4>
                            <ol>
                                <li><strong>Initial Consultation:</strong> We sit down with you to understand your vision, goals, and requirements.</li>
                                <li><strong>Planning:</strong> Our team creates a detailed plan, including budget, timeline, and vendor coordination.</li>
                                <li><strong>Execution:</strong> We handle all logistics, from decorations to catering, ensuring everything is perfect.</li>
                                <li><strong>Management:</strong> On the day of the event, we oversee every detail to ensure a seamless experience.</li>
                                <li><strong>Post-Event Review:</strong> We follow up with you to gather feedback and ensure your satisfaction.</li>
                            </ol>
                            <h4>Why Choose Us?</h4>
                            <p>
                                With years of experience and a proven track record, we pride ourselves on delivering exceptional events. Our team is dedicated to creativity, precision, and excellence, ensuring your event is a resounding success.
                            </p>
                            <h4>Testimonials:</h4>
                            <div className="testimonials">
                                <blockquote>
                                    "The team made our wedding day absolutely magical! Every detail was perfect, and we couldn’t have asked for more."
                                    <cite>- Ayesha & Ali</cite>
                                </blockquote>
                                <blockquote>
                                    "Our corporate event was a huge success, thanks to their professionalism and attention to detail."
                                    <cite>- Crax Corporation</cite>
                                </blockquote>
                            </div>
                        </div>
                    )}
                    <button 
                        className="readMoreButton" 
                        onClick={() => toggleReadMore('event')}
                    >
                        {expandedService === 'event' ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>

            {/* Corporate Event Planning */}
            <div className="serviceCard">
                <div className="serviceImage">
                    <Image 
                        src="/images/C1.jpg" // Replace with your image path
                        alt="Corporate Event Planning" 
                        width={1200} 
                        height={600} 
                        className="cardImage"
                    />
                </div>
                <div className="serviceContent">
                    <h2>Corporate Event Planning</h2>
                    <p>
                        Elevate your business events with our expert planning and management services. 
                        From conferences to product launches, we ensure your event leaves a lasting impression.
                    </p>
                    <h3>Types of Corporate Events:</h3>
                    <ul>
                        <li><strong>Conferences:</strong> Professional and engaging events for knowledge sharing.</li>
                        <li><strong>Seminars:</strong> Interactive sessions to educate and inspire.</li>
                        <li><strong>Team Building:</strong> Fun and engaging activities to strengthen your team.</li>
                        <li><strong>Networking Events:</strong> Opportunities to connect and grow your business.</li>
                    </ul>
                    {expandedService === 'corporate' && (
                        <div className="additionalDetails">
                            <h4>Our Process:</h4>
                            <ol>
                                <li><strong>Initial Consultation:</strong> Understand your business goals and event objectives.</li>
                                <li><strong>Planning:</strong> Develop a detailed plan, including venue selection, agenda, and logistics.</li>
                                <li><strong>Execution:</strong> Coordinate with vendors, speakers, and attendees for a seamless experience.</li>
                                <li><strong>Management:</strong> Oversee the event to ensure everything runs smoothly.</li>
                                <li><strong>Post-Event Review:</strong> Analyze feedback and provide a detailed report.</li>
                            </ol>
                            <h4>Why Choose Us?</h4>
                            <p>
                                We specialize in creating impactful corporate events that align with your brand and objectives. Our team is committed to delivering excellence and ensuring your event is a success.
                            </p>
                            <h4>Testimonials:</h4>
                            <div className="testimonials">
                                <blockquote>
                                    "The conference was flawlessly executed, and our attendees were highly impressed."
                                    <cite>- PakTech Solutions</cite>
                                </blockquote>
                                <blockquote>
                                    "Their attention to detail and professionalism made our networking event a huge success."
                                    <cite>- Innovate Pakistan</cite>
                                </blockquote>
                            </div>
                        </div>
                    )}
                    <button 
                        className="readMoreButton" 
                        onClick={() => toggleReadMore('corporate')}
                    >
                        {expandedService === 'corporate' ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>

            {/* Wedding Planning */}
            <div className="serviceCard">
                <div className="serviceImage">
                    <Image 
                        src="/images/W1.jpg" // Replace with your image path
                        alt="Wedding Planning" 
                        width={1200} 
                        height={600} 
                        className="cardImage"
                    />
                </div>
                <div className="serviceContent">
                    <h2>Wedding Planning</h2>
                    <p>
                        Your wedding day is one of the most important days of your life. 
                        Let us handle the details so you can focus on celebrating your love.
                    </p>
                    <h3>Our Wedding Services:</h3>
                    <ul>
                        <li><strong>Full Planning:</strong> Comprehensive planning from start to finish.</li>
                        <li><strong>Partial Planning:</strong> Assistance with specific aspects of your wedding.</li>
                        <li><strong>Day-of Coordination:</strong> Ensuring everything runs smoothly on your big day.</li>
                        <li><strong>Destination Weddings:</strong> Planning weddings in exotic locations.</li>
                    </ul>
                    {expandedService === 'wedding' && (
                        <div className="additionalDetails">
                            <h4>Our Process:</h4>
                            <ol>
                                <li><strong>Initial Consultation:</strong> Understand your vision and preferences.</li>
                                <li><strong>Planning:</strong> Create a detailed timeline, budget, and vendor list.</li>
                                <li><strong>Execution:</strong> Coordinate with vendors, manage logistics, and handle last-minute changes.</li>
                                <li><strong>Management:</strong> Oversee the wedding day to ensure everything is perfect.</li>
                                <li><strong>Post-Wedding Review:</strong> Gather feedback and provide a keepsake report.</li>
                            </ol>
                            <h4>Why Choose Us?</h4>
                            <p>
                                We are passionate about creating unforgettable weddings that reflect your unique love story. Our team is dedicated to making your day as special as you’ve always dreamed.
                            </p>
                            <h4>Testimonials:</h4>
                            <div className="testimonials">
                                <blockquote>
                                    "Our wedding was everything we dreamed of and more, thanks to their incredible planning."
                                    <cite>- Fatima & Ahmed</cite>
                                </blockquote>
                                <blockquote>
                                    "They made our destination wedding stress-free and absolutely magical."
                                    <cite>- Zainab & Usman</cite>
                                </blockquote>
                            </div>
                        </div>
                    )}
                    <button 
                        className="readMoreButton" 
                        onClick={() => toggleReadMore('wedding')}
                    >
                        {expandedService === 'wedding' ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>

            {/* Product Launch Events */}
            <div className="serviceCard">
                <div className="serviceImage">
                    <Image 
                        src="/images/P1.jpg" // Replace with your image path
                        alt="Product Launch Events" 
                        width={1200} 
                        height={600} 
                        className="cardImage"
                    />
                </div>
                <div className="serviceContent">
                    <h2>Product Launch Events</h2>
                    <p>
                        Make a splash with your new product launch. 
                        We create buzz and excitement to ensure your product gets the attention it deserves.
                    </p>
                    <h3>Our Services:</h3>
                    <ul>
                        <li><strong>Event Planning:</strong> Comprehensive planning for your launch event.</li>
                        <li><strong>Marketing Strategy:</strong> Create buzz through social media and PR campaigns.</li>
                        <li><strong>Guest Management:</strong> Invite and manage attendees for a seamless experience.</li>
                        <li><strong>Post-Event Analysis:</strong> Measure success and provide actionable insights.</li>
                    </ul>
                    {expandedService === 'product-launch' && (
                        <div className="additionalDetails">
                            <h4>Our Process:</h4>
                            <ol>
                                <li><strong>Initial Consultation:</strong> Understand your product and launch goals.</li>
                                <li><strong>Planning:</strong> Develop a detailed plan, including venue, marketing, and guest list.</li>
                                <li><strong>Execution:</strong> Coordinate with vendors, manage logistics, and oversee the event.</li>
                                <li><strong>Management:</strong> Ensure everything runs smoothly on the day of the launch.</li>
                                <li><strong>Post-Event Review:</strong> Analyze feedback and provide a detailed report.</li>
                            </ol>
                            <h4>Why Choose Us?</h4>
                            <p>
                                We specialize in creating memorable product launches that generate excitement and drive sales. Our team is dedicated to making your launch a success.
                            </p>
                            <h4>Testimonials:</h4>
                            <div className="testimonials">
                                <blockquote>
                                    "The product launch was a huge success, and we couldn’t have done it without their expertise."
                                    <cite>- PakElectronics</cite>
                                </blockquote>
                                <blockquote>
                                    "Their creative ideas and flawless execution made our launch unforgettable."
                                    <cite>- Style Pakistan</cite>
                                </blockquote>
                            </div>
                        </div>
                    )}
                    <button 
                        className="readMoreButton"
                        onClick={() => toggleReadMore('product-launch')}
                    >
                        {expandedService === 'product-launch' ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Events;