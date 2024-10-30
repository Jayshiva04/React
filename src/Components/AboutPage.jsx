// src/Components/AboutPage.jsx
import React from 'react';
import './AboutPage.css'; // Make sure to import the updated CSS file

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <section className="about-page-hero">
        <div className="about-page-hero-content">
          <h1>About Shiv's Music Accessories</h1>
          <p>Discover the passion and dedication behind our musical instrument shop.</p>
        </div>
      </section>

      <section className="about-page-section about-page-mission">
        <h2>Our Mission</h2>
        <p>At Shiv's Music Accessories, our mission is to provide musicians of all levels with high-quality instruments and accessories. We believe in the power of music to inspire, uplift, and bring people together.</p>
      </section>

      <section className="about-page-section about-page-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We offer only the best products from trusted brands.</li>
          <li><strong>Customer Service:</strong> Our team is dedicated to providing exceptional service and support.</li>
          <li><strong>Passion:</strong> We are passionate about music and helping our customers find their perfect sound.</li>
          <li><strong>Community:</strong> We believe in the importance of music in the community and strive to support local musicians and events.</li>
        </ul>
      </section>

      <section className="about-page-section about-page-history">
        <h2>Our History</h2>
        <p>Shiv's Music Accessories was founded in 2010 by Shiva, a passionate musician with a dream to create a space where musicians could find everything they need. Over the years, we have grown from a small shop to a well-known destination for music lovers, offering a wide range of instruments and accessories.</p>
      </section>

      <section className="about-page-section about-page-team">
        <h2>Meet Our Team</h2>
        <div className="about-page-team-members">
          <div className="about-page-team-member">
            <img src={`${process.env.PUBLIC_URL}/assets/images/man.jpg`} alt="Shiva Kumar" />
            <h3>Shiva</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="about-page-team-member">
            <img src={`${process.env.PUBLIC_URL}/assets/images/man.jpg`} alt="John Doe" />
            <h3>John Doe</h3>
            <p>Store Manager</p>
          </div>
          <div className="about-page-team-member">
            <img src={`${process.env.PUBLIC_URL}/assets/images/man.jpg`} alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Customer Service Specialist</p>
          </div>
        </div>
      </section>

      <section className="about-page-section about-page-testimonials">
        <h2>Customer Testimonials</h2>
        <div className="about-page-testimonials-container">
          <div className="about-page-testimonial">
            <p>"Shiv's Music Accessories is my go-to shop for all my musical needs. The staff is knowledgeable and always ready to help."</p>
            <h4>- Alex Johnson</h4>
          </div>
          <div className="about-page-testimonial">
            <p>"I love the variety of instruments available. I found the perfect guitar here and couldn't be happier with my purchase."</p>
            <h4>- Maria Garcia</h4>
          </div>
          <div className="about-page-testimonial">
            <p>"Great prices and excellent customer service. I highly recommend Shiva's Music Accessories to all musicians."</p>
            <h4>- Michael Lee</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
