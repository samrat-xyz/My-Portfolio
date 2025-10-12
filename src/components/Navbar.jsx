import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="opacity-75">
      <div className="navbar bg-base-100 shadow-sm max-w-6xl mx-auto rounded-full mt-4">
        {/* Mobile Hamburger - Left Side */}
        <div className="flex-none lg:hidden">
          <button 
            className="btn-ghost p-2 min-h-0 h-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex flex-col items-center justify-center w-5 h-5 gap-1">
              <div 
                className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></div>
              <div 
                className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              <div 
                className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
          <a href="#about" className="text-lg font-bold uppercase hover:text-amber-200">About Me</a>
          <a href="#skills" className="text-lg font-bold uppercase hover:text-amber-200">Skills</a>
          <a href="#projects" className="text-lg font-bold uppercase hover:text-amber-200">Projects</a>
          <a href="#contact" className="text-lg font-bold uppercase hover:text-amber-200">Contact</a>
        </div>

        {/* Resume Button - Right Side */}
        <div className="flex-1 justify-end flex">
          <a href="#resume" className="btn btn-md rounded-full text-lg uppercase font-bold  text-amber-400 hover:bg-amber-400 hover:text-black">Resume</a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-base-100 shadow-md max-w-5xl mx-auto rounded-lg mt-2">
          <div className="flex flex-col p-4 gap-2 uppercase">
            <a href="#about" className="text-sm font-bold hover:text-amber-200 py-2">About Me</a>
            <a href="#skills" className="text-sm font-bold hover:text-amber-200 py-2">Skills</a>
            <a href="#projects" className="text-sm font-bold hover:text-amber-200 py-2">Projects</a>
            <a href="#contact" className="text-sm font-bold hover:text-amber-200 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
