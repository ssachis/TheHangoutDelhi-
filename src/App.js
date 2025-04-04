import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './css/Form.css'; 

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Partners from './components/partners';
import Testimonials from './components/Testimonials';
import FAQ from './components/Faq';
import Footer from './components/footer';
import RegistrationForm from './components/Register';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Experiences />
    <Partners />
    <Testimonials />
    <FAQ />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
