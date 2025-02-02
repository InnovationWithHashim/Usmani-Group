"use client"; // Ensure this is at the top

import { useState } from "react";
import "@/app/styles/testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      rating: "⭐⭐⭐⭐⭐",
      text: "Usmani Group made my study abroad process stress-free! Their expert guidance helped me secure admission without any hassle. Highly professional service!",
      name: "Ahmed Khan, Abbottabad",
    },
    {
      id: 2,
      rating: "⭐⭐⭐⭐⭐",
      text: "My Umrah trip was perfectly organized, from visa processing to accommodations. Usmani Group made everything smooth and hassle-free. Highly recommended!",
      name: "Fatima Javed, Islamabad",
    },
    {
      id: 3,
      rating: "⭐⭐⭐⭐⭐",
      text: "We trusted Usmani Group for our corporate event, and they delivered beyond expectations. Everything was professionally managed, making the event a huge success!",
      name: "Hassan Raza, Peshawar",
    },
    {
      id: 4,
      rating: "⭐⭐⭐⭐⭐",
      text: "Honest, reliable, and efficient! They handled my work visa application with complete transparency. I highly recommend Usmani Group for anyone planning to go abroad.",
      name: "Bilal Hussain, Abbottabad",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials-slider">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="slider-container">
        <button className="slider-arrow left-arrow" onClick={goToPrevious}>
          &#10094;
        </button>
        
        {/* Display only the active testimonial */}
        <div className="slider-content">
          <div className="testimonial-card active">
            <div className="rating">{testimonials[currentIndex].rating}</div>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <p className="client-name">— {testimonials[currentIndex].name}</p>
          </div>
        </div>
        
        <button className="slider-arrow right-arrow" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
