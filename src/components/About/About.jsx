import React from "react";

const About = () => {
  return (
    <section
    
      id="about"
      className="min-h-screen mt-4 text-white flex flex-col justify-center items-center px-6 md:px-12 lg:px-12 py-12 "
    >
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-center tracking-widest">
        ABOUT <span className="text-yellow-400">ME</span>
      </h2>

      {/* Content Box */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12 lg:gap-20">
        {/* Right side - Image */}
        <div className="flex justify-center w-full md:w-1/2 mx-auto">
          <img
            src="/path-to-your-image.jpg"
            alt="Profile"
            className="w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 object-cover border-4 border-gray-700 shadow-2xl rounded-lg mx-auto"
          />
        </div>

        {/* Left side - Text */}
        <div className="text-base sm:text-lg lg:text-xl leading-relaxed space-y-6 w-full md:w-1/2 mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200">
            React Developer
          </h3>
          <p className="text-gray-300">
            I'm a passionate React developer with a focus on creating intuitive,
            user-friendly web applications. With expertise in modern JavaScript
            and React ecosystems, I build responsive interfaces that deliver
            exceptional user experiences.
          </p>
          <p className="text-gray-300">
            My approach combines technical expertise with creative
            problem-solving to develop efficient, scalable solutions. I enjoy
            turning complex challenges into simple, beautiful designs.
          </p>
          <p className="text-gray-300">
            When I’m not coding, I explore new technologies, contribute to
            open-source projects, or share knowledge with the developer
            community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
