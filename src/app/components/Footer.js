"use client"; // Ensures it's a Client Component

import Image from 'next/image';
import Link from 'next/link';
import "@/app/styles/footer.css"; 
import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaArrowUp } from 'react-icons/fa'; // Using React Icons

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Usmani Group is committed to delivering exceptional services in Abroad Consultancy, Umrah Travel, and Event Management. Your trust and satisfaction are our top priorities.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Abroad Consultancy</a></li>
            <li><a href="/Umrah">Umrah Services</a></li>
            <li><a href="/Events">Event Management</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Phone: 0309-5840159 | 0317-0593433</p>
          <p>Email: contact@usmanigroup.site</p>
          <p>Address: Shah Tower near IT Park, Floor #1, Office #1 , ABBOTTABAD</p>
  
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/share/1KKLmtQ9xp/?mibextid=wwXIfr" aria-label="Facebook">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="http://wa.me/923095840159" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/usmani.group?igsh=MW92MDFoaGVucGR3Ng== " aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimer and Copyright Section */}
      <div className="footer-bottom">
        <p className="disclaimer">
          All information provided on this website is for general purposes only. Usmani Group ensures the accuracy of its content but cannot guarantee it at all times.
        </p>
        <p className="copyright">
          © 2025 Usmani Group. All Rights Reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      <button className="back-to-top" onClick={handleScrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
