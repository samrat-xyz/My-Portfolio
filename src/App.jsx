import React from 'react';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;