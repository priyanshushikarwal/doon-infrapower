import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Calculator from './components/Calculator';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SanityStudio from './components/SanityStudio';

const LandingPage = () => (
  <div className="antialiased text-neutral-900 selection:bg-amber-100 selection:text-amber-900">
    <Navbar />
    <main>
      <Hero />
      <Features />
      <Portfolio />
      <Calculator />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sanity/*" element={<SanityStudio />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
