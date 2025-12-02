import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/pic1.jpeg";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-12 px-6 text-white text-center mt-6">
      {/* Text Section */}
      <div className="flex flex-col items-center gap-6 max-w-2xl">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-lime-400 via-amber-400 to-blue-500 text-transparent bg-clip-text">
          Mohammad Samrat
        </h1>

        {/* Animated Role */}
        <h2 className="text-3xl md:text-5xl text-gray-200">
          <Typewriter
            words={[
              "Frontend Web Developer",
              "React Developer",
              "Next.js Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>

      {/* Image Section */}
      <div className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg shadow-cyan-500/40 overflow-hidden transform transition ">
        <img
          src={profileImg}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-5xl">
        <a
          href="https://www.linkedin.com/in/md-samrat0/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition transform hover:scale-110 duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/samrat-xyz"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300 transition transform hover:scale-110 duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/ew.r.asif.507079"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition transform hover:scale-110 duration-300"
        >
          <FaFacebook />
        </a>
      </div>
    </section>
  );
}

export default Hero;
