import React from 'react';

const Navbar = () => (
  <nav className="custom-navbar">
    <div className="navbar-container container d-flex align-items-center justify-content-between">
      <a className="navbar-logo" href="#">
        <img src="images/logo4.png" alt="The Hangout Delhi Logo" />
      </a>
      <ul className="navbar-links d-none d-lg-flex">
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiances</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNav">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="collapse" id="mobileNav">
      <ul className="mobile-nav-list list-unstyled text-center">
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiances</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
