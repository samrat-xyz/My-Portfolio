import React from 'react';

function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-200 mb-12 relative uppercase">
          About Me
         
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text content */}
          <div className="md:w-1/2">
            <div className=" p-8 rounded-lg shadow-md">
              <h3 className="text-4xl font-semibold text-white mb-4">React Developer</h3>
              <p className="text-white mb-4 leading-relaxed text-xl">
                I'm a passionate React developer with a focus on creating intuitive, 
                user-friendly web applications. With expertise in modern JavaScript and 
                React ecosystems, I build responsive interfaces that deliver exceptional 
                user experiences.
              </p>
              <p className="text-white mb-4 leading-relaxed text-xl">
                My approach combines technical expertise with creative problem-solving 
                to develop efficient, scalable solutions. I enjoy turning complex 
                challenges into simple, beautiful designs.
              </p>
              <p className="text-white leading-relaxed text-xl">
                When I'm not coding, I'm exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          
          {/* Image content */}
          <div className="md:w-1/2 flex justify-center border">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;