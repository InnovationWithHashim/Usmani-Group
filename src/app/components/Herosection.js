"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/styles/herosection.css";
import Testimonial from "./Testimonial";

const Herosection = () => {
  const [currentText, setCurrentText] = useState("Abroad Consultancy");
  const texts = ["Abroad Consultancy", "Umrah Services", "Event Management"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [texts]);

  return (
    <>
      <main className="hero-section">
        {/* Image Background */}
        <div className="hero-image">
          <Image
            src="/images/heroimage.svg"
            alt="Background Image"
            width={1920}
            height={1080}
            priority // Ensures the image loads first
          />
        </div>

        {/* Hero Section */}
        <div className="hero">
          <div className="hero-container">
            {/* Hero Content (Left Side) */}
            <div className="hero-content">
              <h1>
                Welcome to <span>Usmani Group</span>
              </h1>
              <h2>{currentText}</h2> {/* Dynamic text here */}
              <p>
                Your Trusted Partner for Exceptional Services From Abroad
                Consultancy to Event Management, We Bring Excellence to Every
                Step.
              </p>
            </div>

            {/* Unique Link Cards (Right Side) */}
            <div className="link-cards">
              <Link href="/services" className="link-card">
                <div className="card-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Abroad Consultancy</h3>
              </Link>
              <Link href="/Umrah" className="link-card">
                <div className="card-icon">
                  <i className="fas fa-kaaba"></i>
                </div>
                <h3>Umrah Services</h3>
              </Link>
              <Link href="/Events" className="link-card">
                <div className="card-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Event Management</h3>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>
          Why Choose <span>Usmani Group</span>?
        </h2>
        <div className="why-section">
          {[
            {
              icon: "fas fa-users",
              title: "Experienced and Professional Team",
              description:
                "Our team of experts is here to guide you every step of the way, ensuring success in all your endeavors.",
            },
            {
              icon: "fas fa-hand-holding-usd",
              title: "Affordable and Transparent Services",
              description:
                "We offer services that provide great value without hidden fees, ensuring transparency throughout.",
            },
            {
              icon: "fas fa-heart",
              title: "Customer-Centric Approach",
              description:
                "Your satisfaction is our priority. We listen to your needs and tailor our services to exceed your expectations.",
            },
            {
              icon: "fas fa-chart-line",
              title: "Proven Track Record of Success",
              description:
                "With a proven track record in all our services, we are dedicated to helping you achieve your goals.",
            },
          ].map((item, index) => (
            <div className="why-item" key={index}>
              <div className="card">
                <div className="card-content">
                  <div className="icon-wrapper">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button for Services */}
        <div className="services-container">
          <div className="services-button">
            <Link href="/services" className="neon-button">
              Abroad Consultancy
            </Link>
          </div>
          <div className="services-button">
            <Link href="/Umrah" className="neon-button">
              Umrah Services
            </Link>
          </div>
          <div className="services-button">
            <Link href="/Events" className="neon-button">
              Events Management
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonial />
    </>
  );
};

export default Herosection;