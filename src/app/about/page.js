"use client"; // Ensures it's a Client Component
import Image from 'next/image';
import '@/app/about/about.css';
import React from 'react';
import { FaMapMarkerAlt, FaUsers, FaHandshake, FaStar } from 'react-icons/fa'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <header className="header">
        <h1>Who We Are</h1>
      </header>

      {/* Introduction Section */}
      <section className="introduction">
        <div className="intro-content">
          <p>
            Usmani Group was founded with a vision to provide premium services in Abroad Consultancy, Umrah Travel, and Event Management. Over the years, we have earned the trust of countless clients through our professionalism and commitment to excellence.
          </p>
        </div>
        <div className="intro-image">
          <img src="/images/about1.jpg" alt="Our Logo" />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Customer Satisfaction</h3>
            <p>We prioritize your needs above all.</p>
          </div>
          <div className="value-card">
            <h3>Excellence in Service</h3>
            <p>We go the extra mile to deliver unmatched quality.</p>
          </div>
          <div className="value-card">
            <h3>Integrity and Trust</h3>
            <p>Honesty and reliability are at the heart of our work.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/t6.jpg" alt="Team Member 1" />
            <h3>ZEESHAN USMANI</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="/images/t1.jpg" alt="Team Member 2" />
            <h3>Muhammad HASHIM KHAN</h3>
            <p>CO-Founder</p>
          </div>
          <div className="team-member">
            <img src="/images/t4.jpg" alt="Team Member 3" />
            <h3>SARDAR Muhammad USMAN</h3>
            <p>Senior Consultant</p>
          </div>
          <div className="team-member">
            <img src="/images/t3.jpg" alt="Team Member 2" />
            <h3>SHAHEER AHMED</h3>
            <p>Logistics & Production Manager</p>
          </div>
          <div className="team-member">
            <img src="/images/t2.jpg" alt="Team Member 3" />
            <h3>Umer Raza Shah</h3>
            <p>Creative Director</p>
          </div>
          <div className="team-member">
            <img src="/images/t5.jpg" alt="Team Member 3" />
            <h3>Zain Awan</h3>
            <p>Marketing Manager</p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.51156119675016!2d73.23518203861092!3d34.195113199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de311167cea015%3A0xa946212a20f5c280!2sImmigration%20Assist%20Private%20Limited!5e0!3m2!1sen!2s!4v1738311032307!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};


export default AboutUs;