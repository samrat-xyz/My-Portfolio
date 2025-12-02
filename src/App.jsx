import React from 'react';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;