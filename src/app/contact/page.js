"use client"; // Mark the component as a Client Component
import React, { useState } from "react";
import Image from "next/image";
import "@/app/contact/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      console.log("Sending data:", formData); // Log the data being sent
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status); // Log the response status
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        const data = await response.json();
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="contact-us-container">
      {/* Header Section */}
      <header className="header">
        <h1>Get in Touch with Us</h1>
        <p>
          We&apos;re here to help and answer any questions you might have. We look forward to
          hearing from you!
        </p>
      </header>

      {/* Contact Information Section */}
      <section className="contact-info">
        <div className="contact-details">
          <h2>Contact Information</h2>
          <div className="contact-item">
            <h3>Phone Numbers</h3>
            <p>0309-5840159</p>
            <p>0317-0593433</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>contact@usmanigroup.site</p>
          </div>
          <div className="contact-item">
            <h3>Office Address</h3>
            <p>Shah Tower near IT Park, Floor #1, Office #1, ABBOTTABAD</p>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="qr-code-section">
          <h2>Scan to Connect</h2>
          <div className="qr-code">
            <Image
              src="/images/qr.jpg"
              alt="QR Code to connect with Usmani Group"
              width={200}
              height={200}
            />
          </div>
          <p>Scan the code above to connect with us directly.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;