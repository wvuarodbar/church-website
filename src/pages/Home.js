/*
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
*/

import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import mapImage from '../image/church map.jpg';
import adult from '../image/adults.jpg';
import youth from '../image/youth.jpg';
import child from '../image/child.jpg';

const googleMapsUrl = 'https://www.google.com/maps/place/Our+Savior+Lutheran+Church/@33.1241988,-95.6076265,17.5z/data=!4m6!3m5!1s0x864a2e327edde327:0x42459f751ae842a9!8m2!3d33.1231496!4d-95.6061598!16s%2Fg%2F1tfhz_5_?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D';

// Hero Section Component
function HeroSection() {
    const navigate = useNavigate();

    return (
        <header className="hero-section">
            <h1>Welcome to Our Savior Lutheran Church</h1>
            <p>Where everyone is welcome to grow in faith and community.</p>
            <button onClick={() => navigate('/events')}>
                Join Us for an Event
            </button>
        </header>
    );
}

// About Section Component
function AboutSection() {
    return (
        <section className="about-section">
            <h2>About Us</h2>
            <p>Our Savior Lutheran Church is a community-focused church dedicated to helping individuals grow in faith, build strong connections, and make a difference in the world. We believe in the power of love, faith, and service, and invite you to be part of our family.</p>
        </section>
    );
}

function GroupCards() {
  const groups = [
      { title: "Children", description: "Fun and engaging activities for kids of all ages.", image: child },
      { title: "Youth", description: "Empowering our youth through fellowship and learning.", image: youth },
      { title: "Adults", description: "Grow in faith and community with our adult programs.", image: adult  },
  ];

  return (
      <section className="group-cards">
          <h2>Programs for Everyone</h2>
          <div className="card-list">
              {groups.map((group, index) => (
                  <div className="card" key={index}>
                      <img src={group.image} alt={group.title} className="card-image" />
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                  </div>
              ))}
          </div>
      </section>
  );
}



function ServiceTimes() {
  return (
      <section className="service-times">
          <h2>Service Times</h2>
          <div className="service-time-list">
              <div className="service-time-item">
                  <h3>Sunday</h3>
                  <p>10:00 AM - Worship Service</p>
              </div>
              <div className="service-time-item">
                  <h3>Wednesday</h3>
                  <p>7:00 PM - Bible Study</p>
              </div>
              <div className="service-time-item">
                  <h3>Friday</h3>
                  <p>6:00 PM - Youth Fellowship</p>
              </div>
          </div>
      </section>
  );
}

// Map Section Component
// Map Section Component
// Map Section Component
function MapSection() {
  //const navigate = useNavigate();

  return (
    <section className="map-section">
        <div className="map-container">
            <img src={mapImage} alt="Map to Our Savior Lutheran Church" className="map-image" />
            <div className="overlay-content">
                <h2>Visit Us</h2>
                <p>Our Savior Lutheran Church</p>
                <p>1000 Texas St, Sulphur Springs, TX 75482</p>
                <button 
    onClick={() => window.open(googleMapsUrl, '_blank')} 
    className="directions-button"
>
    Get Directions
</button>

            </div>
        </div>
    </section>
);
}



// Footer Component
function Footer() {
    return (
        <footer className="footer">
            <p>Our Savior Lutheran Church | 1000 Texas St, Sulphur Springs, TX 75482</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    );
}

// Main Home Component
function Home() {
    return (
        <div className="home">
            <HeroSection />
            <AboutSection />
            <ServiceTimes />
            <MapSection />
            <GroupCards />
            <Footer />
        </div>
    );
}

export default Home;

