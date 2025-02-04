"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import "@/app/services/services.css";

const ServicesPage = () => {
    const [expandedService, setExpandedService] = useState(null);

    const toggleReadMore = (service) => {
        setExpandedService(expandedService === service ? null : service);
    };

    return (
        <section className="services-page">
            {/* Headline Section */}
            <div className="headline-section">
                <h1>Our Premium Services Tailored for You</h1>
                <p>Discover the best services designed to meet your needs with excellence and care.</p>
            </div>

            {/* Abroad Consultancy Section */}
            <div className="service-card">
                <div className="service-image">
                    <Image 
                        src="/images/conc.jpg" 
                        alt="Abroad Consultancy" 
                        width={800} 
                        height={500} 
                        className="card-image"
                    />
                </div>
                <div className="service-content">
                    <h2>Abroad Consultancy</h2>
                    <p>
                        We provide expert consultancy services to help you achieve your dream of studying or settling abroad. 
                        Our team of experienced consultants will guide you through every step of the process, ensuring a seamless experience.
                    </p>
                    <h3>Countries We Serve:</h3>
                    <ul>
                        <li><strong>Italy:</strong> Affordable tuition fees and rich cultural heritage.</li>
                        <li><strong>France:</strong> Renowned for its world-class education and vibrant culture.</li>
                        <li><strong>Germany:</strong> Known for its high-quality education and strong economy.</li>
                        <li><strong>Finland:</strong> World-class education with a focus on innovation.</li>
                    </ul>
                    <h3>Our Services Include:</h3>
                    <ul>
                        <li><strong>Visa Processing:</strong> We handle all visa-related paperwork and ensure timely submissions.</li>
                        <li><strong>Documentation Assistance:</strong> From transcripts to recommendation letters, we&apos;ve got you covered.</li>
                        <li><strong>Career and Study Guidance:</strong> Personalized advice to help you choose the right path.</li>
                    </ul>
                    {expandedService === 'abroad' && (
                        <div className="additional-details">
                            <h4>Why Choose Us?</h4>
                            <p>
                                With over a decade of experience, we have helped thousands of students and professionals achieve their dreams. 
                                Our success rate is unmatched, and our clients consistently praise our dedication and expertise.
                            </p>
                            <h4>Process Overview:</h4>
                            <ol>
                                <li>Initial Consultation: Understand your goals and preferences.</li>
                                <li>Document Preparation: Gather and organize all necessary documents.</li>
                                <li>Application Submission: Submit applications to your desired institutions or immigration offices.</li>
                                <li>Follow-Up: Track progress and provide updates.</li>
                            </ol>
                        </div>
                    )}
                    <button className="read-more-button" onClick={() => toggleReadMore('abroad')}>
                        {expandedService === 'abroad' ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>

            {/* Country Cards Section */}
            <div className="country-cards">
                {/* Italy Card */}
                <div className="service-card">
                    <div className="service-image">
                        <Image 
                            src="/images/abroad1.jpg" 
                            alt="Italy" 
                            width={800} 
                            height={500} 
                            className="card-image"
                        />
                    </div>
                    <div className="service-content">
                        <h2>Italy</h2>
                        <p>
                            Italy is known for its rich history, art, and world-class education system. It offers a variety of programs for international students.
                        </p>
                        {expandedService === 'italy' && (
                            <div className="additional-details">
                                <h4>Why Italy?</h4>
                                <ul>
                                    <li>Affordable tuition fees compared to other European countries.</li>
                                    <li>Rich cultural heritage and vibrant student life.</li>
                                    <li>Opportunities to learn Italian, a globally spoken language.</li>
                                </ul>
                                <h4>Process + Total Expense (For Pakistani Students):</h4>
                                <ul>
                                    <li>Application Period: Varies by university; typically between November and June.</li>
                                    <li>Acceptance Letter: Received in 1-2 months after application deadline.</li>
                                    <li>Visa Process: Approximately 6-12 weeks.</li>
                                    <li>Visa Application Fee: €50</li>
                                    <li>Flight Ticket: Estimated between PKR 100,000 to PKR 150,000.</li>
                                    <li>Health Insurance: Mandatory; approximately €150 per year.</li>
                                    <li>Bank Statement: Required; around €6,000 to €10,000.</li>
                                    <li>Consultancy Fee: PKR 60,000 (if applicable).</li>
                                </ul>
                                <h4>Scholarships</h4>
                                <h5>Government Scholarships:</h5>
                                <ul>
                                    <li>Offered by the Italian Government and regional authorities.</li>
                                    <li>Application Period: Varies by program; typically between January and April.</li>
                                    <li>Coverage: Full or partial tuition fee waivers, accommodation support, and monthly stipends.</li>
                                </ul>
                                <h5>Merit-Based Scholarships:</h5>
                                <ul>
                                    <li>Offered by universities and private organizations.</li>
                                    <li>Coverage: Partial to full tuition fee waivers and/or monthly stipends.</li>
                                </ul>
                                <h4>Expenses</h4>
                                <h5>Tuition Fees:</h5>
                                <ul>
                                    <li>Public Universities: Typically between €900 to €4,000 per year.</li>
                                    <li>Private Universities: Tuition fees vary; typically between €5,000 to €20,000 per year.</li>
                                </ul>
                                <h5>Accommodation:</h5>
                                <ul>
                                    <li>Monthly Rent: €300 to €700, depending on the city and type of accommodation.</li>
                                    <li>Initial Deposit: Usually equivalent to 1-3 months&apos; rent.</li>
                                </ul>
                                <h5>Monthly Living Expenses:</h5>
                                <ul>
                                    <li>Estimated at €600 to €1,000, covering accommodation, food, transportation, and other daily needs.</li>
                                </ul>
                                <h5>Total Expense:</h5>
                                <ul>
                                    <li>First Year: Approximately €8,000 to €12,000 (including living expenses, health insurance, and other fees).</li>
                                    <li>Subsequent Years: Approximately €7,000 to €10,000 per year.</li>
                                </ul>
                                <h4>Additional Information</h4>
                                <ul>
                                    <li>High acceptance rates and visa success rates for well-prepared applicants.</li>
                                    <li>Classes typically start in September (Fall Intake) and February (Spring Intake).</li>
                                    <li>Many programs are available in English, though learning Italian can improve job prospects.</li>
                                </ul>
                            </div>
                        )}
                        <button className="read-more-button" onClick={() => toggleReadMore('italy')}>
                            {expandedService === 'italy' ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>

                {/* France Card */}
                <div className="service-card">
                    <div className="service-image">
                        <Image 
                            src="/images/abroad2.jpg" 
                            alt="France" 
                            width={800} 
                            height={500} 
                            className="card-image"
                        />
                    </div>
                    <div className="service-content">
                        <h2>France</h2>
                        <p>
                            France is renowned for its world-class education and vibrant culture. It is a top destination for students and professionals alike.
                        </p>
                        {expandedService === 'france' && (
                            <div className="additional-details">
                                <h4>Why France?</h4>
                                <ul>
                                    <li>Home to some of the world&apos;s top universities and business schools.</li>
                                    <li>Affordable tuition fees for international students.</li>
                                    <li>Opportunities to learn French, a global business language.</li>
                                </ul>
                                <h4>Process + Total Expense:</h4>
                                <ul>
                                    <li>Application Period: October to April (varies by university)</li>
                                    <li>Acceptance Letter: Received in 1/2 months</li>
                                    <li>Visa Process: 1/2 months</li>
                                    <li>Visa Application Fee: Included</li>
                                    <li>Flight Ticket: Included</li>
                                    <li>Health Insurance: Included (Annual)</li>
                                    <li>Bank Statement: Required (PKR: 30-35 Lacs)</li>
                                    <li>Consultancy Fee: PKR: 100,000</li>
                                </ul>
                                <h4>Scholarships</h4>
                                <h5>Government Scholarships:</h5>
                                <ul>
                                    <li>Application Period: December to March</li>
                                    <li>Coverage: Full or partial tuition fee</li>
                                    <li>Some scholarships cover full tuition fees, while others provide partial fee waivers or reduced tuition costs.</li>
                                </ul>
                                <h5>Merit-Based Scholarships:</h5>
                                <ul>
                                    <li>Coverage: Up to 40% of tuition fee</li>
                                    <li>No IELTS required</li>
                                </ul>
                                <h4>Expenses</h4>
                                <h5>Tuition Fees:</h5>
                                <ul>
                                    <li>Depends on the university</li>
                                </ul>
                                <h5>Accommodation:</h5>
                                <ul>
                                    <li>First 3 months advance: 700 Euros to 3,500 Euros</li>
                                    <li>Free or discounted accommodation available</li>
                                </ul>
                                <h5>Monthly Stipend:</h5>
                                <ul>
                                    <li>700 Euros to 1,500 Euros (covers living expenses, accommodation, food, and daily needs)</li>
                                </ul>
                                <h5>Health Insurance:</h5>
                                <ul>
                                    <li>Yearly (low compared to other European countries)</li>
                                </ul>
                                <h5>Total Expense:</h5>
                                <ul>
                                    <li>25 Lacs (excluding bank statement and consultancy fee)</li>
                                </ul>
                                <h4>Additional Information</h4>
                                <ul>
                                    <li>Higher Acceptance Rates and Visa Success Rates</li>
                                    <li>Classes Start: September/October</li>
                                    <li>No IELTS Requirement for some scholarships</li>
                                </ul>
                            </div>
                        )}
                        <button className="read-more-button" onClick={() => toggleReadMore('france')}>
                            {expandedService === 'france' ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>

                {/* Germany Card */}
                <div className="service-card">
                    <div className="service-image">
                        <Image 
                            src="/images/abroad3.jpg" 
                            alt="Germany" 
                            width={800} 
                            height={500} 
                            className="card-image"
                        />
                    </div>
                    <div className="service-content">
                        <h2>Germany</h2>
                        <p>
                            Germany is known for its high-quality education and strong economy. It offers numerous opportunities for students and professionals.
                        </p>
                        {expandedService === 'germany' && (
                            <div className="additional-details">
                                <h4>Why Germany?</h4>
                                <ul>
                                    <li>Tuition-free education at public universities.</li>
                                    <li>Strong job market and post-study work opportunities.</li>
                                    <li>Opportunities to learn German, a key language in Europe.</li>
                                </ul>
                                <h4>Process + Total Expense (For Pakistani Students):</h4>
                                <ul>
                                    <li>Application Period: Varies by university; typically between December and July.</li>
                                    <li>Acceptance Letter: Received in 1-2 months after application deadline.</li>
                                    <li>Visa Process: Approximately 6-12 weeks.</li>
                                    <li>Visa Application Fee: €75</li>
                                    <li>Flight Ticket: Estimated between PKR 100,000 to PKR 150,000.</li>
                                    <li>Health Insurance: Mandatory; approximately €1,200 per year.</li>
                                    <li>Bank Statement: Required; €11,208 in a blocked account.</li>
                                    <li>Consultancy Fee: PKR 60,000 (if applicable).</li>
                                </ul>
                                <h4>Scholarships</h4>
                                <h5>Government Scholarships:</h5>
                                <ul>
                                    <li>Offered by the German Academic Exchange Service (DAAD).</li>
                                    <li>Application Period: Varies by program; typically between October and January.</li>
                                    <li>Coverage: Full or partial tuition fee waivers, monthly stipends, and other allowances.</li>
                                </ul>
                                <h5>Merit-Based Scholarships:</h5>
                                <ul>
                                    <li>Offered by various foundations and institutions.</li>
                                    <li>Coverage: Partial to full tuition fee waivers and/or monthly stipends.</li>
                                    <li>Examples include the Deutschlandstipendium and scholarships from political foundations.</li>
                                </ul>
                                <h4>Expenses</h4>
                                <h5>Tuition Fees:</h5>
                                <ul>
                                    <li>Public Universities: Generally tuition-free; a semester contribution of €150 to €350 may apply.</li>
                                    <li>Private Universities: Tuition fees vary; typically between €5,000 to €20,000 per year.</li>
                                </ul>
                                <h5>Accommodation:</h5>
                                <ul>
                                    <li>Monthly Rent: €250 to €700, depending on the city and type of accommodation.</li>
                                    <li>Initial Deposit: Usually equivalent to 1-3 months&apos; rent.</li>
                                </ul>
                                <h5>Monthly Living Expenses:</h5>
                                <ul>
                                    <li>Estimated at €861, covering accommodation, food, transportation, and other daily needs.</li>
                                </ul>
                                <h5>Total Expense:</h5>
                                <ul>
                                    <li>First Year: Approximately €11,000 to €15,000 (including living expenses, health insurance, and other fees).</li>
                                    <li>Subsequent Years: Approximately €10,000 to €12,000 per year.</li>
                                </ul>
                                <h4>Additional Information</h4>
                                <ul>
                                    <li>High acceptance rates and visa success rates for well-prepared applicants.</li>
                                    <li>Classes typically start in October (Winter Semester) and April (Summer Semester).</li>
                                    <li>German language proficiency may be required for certain programs; however, many programs are offered in English.</li>
                                </ul>
                            </div>
                        )}
                        <button className="read-more-button" onClick={() => toggleReadMore('germany')}>
                            {expandedService === 'germany' ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>

                {/* Finland Card */}
                <div className="service-card">
                    <div className="service-image">
                        <Image 
                            src="/images/abroad4.jpg" 
                            alt="Finland" 
                            width={800} 
                            height={500} 
                            className="card-image"
                        />
                    </div>
                    <div className="service-content">
                        <h2>Finland</h2>
                        <p>
                            Finland is known for its high-quality education system and innovative teaching methods. It is a great destination for students.
                        </p>
                        {expandedService === 'finland' && (
                            <div className="additional-details">
                                <h4>Why Finland?</h4>
                                <ul>
                                    <li>World-class education with a focus on innovation.</li>
                                    <li>Safe and welcoming environment for international students.</li>
                                </ul>
                                <h4>Process + Total Expense:</h4>
                                <ul>
                                    <li>Application Period: December to February (varies by university)</li>
                                    <li>Acceptance Letter: Received in 2 months</li>
                                    <li>Visa Process: 3/4 months</li>
                                    <li>Visa Application Fee: Included</li>
                                    <li>Flight Ticket: Included</li>
                                    <li>Health Insurance: Included</li>
                                    <li>Bank Statement: Required (PKR: 40-50 Lacs)</li>
                                    <li>Consultancy Fee: PKR: 100,000</li>
                                </ul>
                                <h4>Scholarships</h4>
                                <h5>Government Scholarships:</h5>
                                <ul>
                                    <li>Application Period: January to March</li>
                                    <li>Coverage: Full or partial tuition fee</li>
                                    <li>Without Scholarship: 18,000 Euros to 34,000 Euros (depending on university, excluding bank statement and consultancy fee)</li>
                                    <li>With Scholarship: 7,000 Euros to 15,000 Euros</li>
                                </ul>
                                <h5>Merit-Based Scholarships:</h5>
                                <ul>
                                    <li>Coverage: 50% to 100% tuition fee</li>
                                    <li>Some scholarships cover full tuition fees, while others provide partial fee waivers or reduced tuition costs.</li>
                                </ul>
                                <h4>Expenses</h4>
                                <h5>Tuition Fees:</h5>
                                <ul>
                                    <li>Without Scholarship: 18,000 Euros to 34,000 Euros</li>
                                    <li>With Scholarship: 7,000 Euros to 15,000 Euros</li>
                                </ul>
                                <h5>Accommodation:</h5>
                                <ul>
                                    <li>First 3 months advance: 5,000 Euros to 10,000 Euros</li>
                                    <li>Yearly: 8,000 Euros to 18,000 Euros (installments)</li>
                                </ul>
                                <h5>Total Expense:</h5>
                                <ul>
                                    <li>More affordable than Ireland, Scotland, UK</li>
                                </ul>
                                <h4>Additional Information</h4>
                                <ul>
                                    <li>Higher Acceptance Rates and Visa Success Rates</li>
                                    <li>Yearly Stipend: Available for some scholarships</li>
                                    <li>Classes Start: September/October</li>
                                </ul>
                            </div>
                        )}
                        <button className="read-more-button" onClick={() => toggleReadMore('finland')}>
                            {expandedService === 'finland' ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
                <h2>Contact Us for More Information</h2>
                <Link href="/contact" className="cta-button">Get in Touch</Link>
            </div>
        </section>
    );
};

export default ServicesPage;