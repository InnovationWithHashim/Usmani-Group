"use client"; // Ensures it's a Client Component
import Image from "next/image";
import "@/app/about/about.css";
import React from "react";
import { FaMapMarkerAlt, FaUsers, FaHandshake, FaStar } from "react-icons/fa";

const AboutUs = () => {
  const coreValues = [
    {
      icon: <FaStar />,
      title: "Customer Satisfaction",
      description: "We prioritize your needs above all.",
    },
    {
      icon: <FaHandshake />,
      title: "Excellence in Service",
      description: "We go the extra mile to deliver unmatched quality.",
    },
    {
      icon: <FaUsers />,
      title: "Integrity and Trust",
      description: "Honesty and reliability are at the heart of our work.",
    },
  ];

  const teamMembers = [
    {
      image: "/images/pic.jpg",
      name: "ZEESHAN USMANI",
      role: "CEO & Founder",
    },
    {
      image: "/images/pic.jpg",
      name: "Muhammad HASHIM KHAN",
      role: "CO-Founder",
    },
    {
      image: "/images/pic.jpg",
      name: "SARDAR Muhammad USMAN",
      role: "Senior Consultant",
    },
    {
      image: "/images/pic.jpg",
      name: "SHAHEER AHMED",
      role: "Logistics & Production Manager",
    },
    {
      image: "/images/pic.jpg",
      name: "Umer Raza Shah",
      role: "Creative Director",
    },
    {
      image: "/images/pic.jpg",
      name: "Zain Awan",
      role: "Marketing Manager",
    },
  ];

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
            Usmani Group was founded with a vision to provide premium services in
            Abroad Consultancy, Umrah Travel, and Event Management. Over the
            years, we have earned the trust of countless clients through our
            professionalism and commitment to excellence.
          </p>
        </div>
        <div className="intro-image">
          <Image
            src="/images/about1.jpg"
            alt="Our Team"
            width={500}
            height={300}
            priority // Ensures the image loads first
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="team-member-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
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
            allowFullScreen
            loading="lazy"
            aria-label="Google Maps location of Usmani Group"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;