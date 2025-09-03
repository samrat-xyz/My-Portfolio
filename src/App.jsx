import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';


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