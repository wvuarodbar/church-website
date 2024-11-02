import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
      <div className="home">
        <header className="hero-section">
          <h1>Welcome to Our Savior Lutheran Church</h1>
          <p>Where everyone is welcome to grow in faith and community.</p>
          <button onClick={() => navigate('/events')}>
            Join Us for an Event
          </button> 
        </header>
      <section className="about-section">
        <h2>About Us</h2>
        <p>Our Savior Lutheran Church is a community-focused church dedicated to helping individuals grow in faith, build strong connections, and make a difference in the world. We believe in the power of love, faith, and service, and invite you to be part of our family.</p>
      </section>

      <section className="service-times">
        <h2>Service Times</h2>
        <ul>
          <li>Sunday: 10:00 AM - Worship Service</li>
          <li>Wednesday: 7:00 PM - Bible Study</li>
          <li>Friday: 6:00 PM - Youth Fellowship</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;