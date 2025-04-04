import React from 'react';

const Footer = () => (
  <>
    <section id="contact" className="py-5" style={{ backgroundColor: '#fffbe2' }}>
      <div className="container text-center">
        <h2 className="section-title mb-4">Contact Us</h2>
        <p className="lead">We’d love to hear from you! Get in touch for any inquiries or just to say hello.</p>
        <p>
          <a style={{ color: 'black' }} href="mailto:thehangoutdel@gmail.com">
            <i className="fa fa-envelope"></i> thehangoutdel@gmail.com
          </a>
        </p>
        <div>
          <a href="https://www.instagram.com/thehangoutdelhi/" target="_blank" rel="noreferrer">
            <img src="images/Instagram_logo.webp" alt="Instagram" width="35px" />
          </a>
        </div>
      </div>
    </section>
    <footer>
      <p className="text-center">&copy; 2025 The Hangout Delhi. All Rights Reserved.</p>
    </footer>
  </>
);

export default Footer;
