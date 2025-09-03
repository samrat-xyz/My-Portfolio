import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 tracking-widest">
          MY <span className="text-yellow-400">SKILLS</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              tabIndex={0} // keyboard focusable
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50 focus:scale-105 focus:shadow-yellow-500/50"
            >
              <div className="text-5xl sm:text-6xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
