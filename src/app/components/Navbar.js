"use client";
import Link from 'next/link';
import "@/app/styles/Navbar.css";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navbarRef = useRef(null);
    const hamburgerRef = useRef(null);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    // Close mobile menu when clicking outside
    const closeMobileMenu = (e) => {
        if (navbarRef.current && !navbarRef.current.contains(e.target) &&
            hamburgerRef.current && !hamburgerRef.current.contains(e.target)) {
            setIsMobileMenuOpen(false);
        }
    };

    // Close menu when a link is clicked
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', closeMobileMenu);
        return () => {
            document.removeEventListener('click', closeMobileMenu);
        };
    }, []);

    return (
        <section className="navbar-section" ref={navbarRef}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link href="/">
                        <Image src="/images/logo.svg" alt="logo" width={80} height={80} />
                    </Link>
                </div>
                <div className="navbar">
                    <h1>Usmani<span> Group.</span></h1>
                </div>
                <div 
                    className="navbar-hamburger" 
                    onClick={toggleMobileMenu} 
                    ref={hamburgerRef}
                >
                    <span className={isMobileMenuOpen ? 'line open' : 'line'}></span>
                    <span className={isMobileMenuOpen ? 'line open' : 'line'}></span>
                    <span className={isMobileMenuOpen ? 'line open' : 'line'}></span>
                </div>
            </div>
            <nav className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link href="/services" onClick={handleLinkClick}>Consultancy</Link></li>
                    <li><Link href="/Umrah" onClick={handleLinkClick}>Umrah</Link></li>
                    <li><Link href="/Events" onClick={handleLinkClick}>Events</Link></li>
                    <li><Link href="/about" onClick={handleLinkClick}>About Us</Link></li>
                    <li><Link href="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
