
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
