import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Our Savior Lutheran Church</h1>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/" end activeClassName="active" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/events" activeClassName="active" onClick={closeMenu}>Events</NavLink></li>
        <li><NavLink to="/staff" activeClassName="active" onClick={closeMenu}>Staff</NavLink></li>
        <li><NavLink to="/gallery" activeClassName="active" onClick={closeMenu}>Gallery</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active" onClick={closeMenu}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}


export default Navbar;
