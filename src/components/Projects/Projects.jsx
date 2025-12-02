import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiJavascript,
  SiStripe,
} from "react-icons/si";

function Projects() {
  const projects = [
    {
      name: "Freelinza",
      small_summary:
        "A freelance service marketplace where users can hire experts easily.",
      stacks: ["React", "Express", "MongoDB", "Firebase Auth"],
      live_link: "https://freelinza.netlify.app/",
      repo: "https://github.com/samrat-xyz/Freelinza-Client",
      image:
        "https://i.ibb.co/tp0dgQX6/Screenshot-from-2025-12-01-23-30-49.png",
    },
    {
      name: "GameHub",
      small_summary:
        "A modern gaming showcase platform with review & wishlist features.",
      stacks: ["React", "Express", "MongoDB", "Firebase Auth"],
      live_link: "https://game-hub-ac22c.web.app/",
      repo: "https://github.com/samrat-xyz/Game-Hub",
      image:
        "https://i.ibb.co/yBRV3sFW/Screenshot-from-2025-12-01-23-28-14.png",
    },
    {
      name: "ClothMania",
      small_summary:
        "A fashion e-commerce website with cart, checkout and user auth.",
      stacks: ["Next.js", "Express", "MongoDB","Firebase Auth"],
      live_link: "https://cloth-mania-vert.vercel.app/",
      repo: "https://github.com/samrat-xyz/Cloth-Mania",
      image:
        "https://i.ibb.co/wNzK61fB/Screenshot-from-2025-12-01-23-32-19.png",
    },
  ];

  // Map stack names to icons
  const stackIcons = {
  React: <FaReact size={20} className="text-cyan-400" />,
  HTML: <FaHtml5 size={20} className="text-orange-500" />,
  CSS: <FaCss3 size={20} className="text-blue-500" />,
  Tailwind: <SiTailwindcss size={20} className="text-teal-400" />,
  DaisyUI: <SiFirebase size={20} className="text-yellow-400" />,
  
  // ✅ Next.js icons (support both variations)
  "Next.js": <SiNextdotjs size={20} className="text-white" />,
  NextJs: <SiNextdotjs size={20} className="text-white" />,

  JavaScript: <SiJavascript size={20} className="text-yellow-300" />,
  Node: <FaNodeJs size={20} className="text-green-500" />,
  Express: <SiExpress size={20} />,
  MongoDB: <SiMongodb size={20} className="text-green-400" />,
  "Firebase Auth": <SiFirebase size={20} className="text-yellow-400" />,
  Stripe: <SiStripe size={20} className="text-indigo-400" />,
};


  return (
    <section id="projects" className="max-w-6xl mx-auto py-14 text-white px-4">
      <h2 className="text-4xl lg:text-5xl font-bold text-center tracking-widest mb-14">
        Latest <span className="text-yellow-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10
                       rounded-2xl shadow-xl hover:shadow-yellow-400/30
                       hover:-translate-y-2 duration-300 overflow-hidden"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto max-h-64 object-contain rounded-t-2xl"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                {project.small_summary}
              </p>

              {/* Stack Icons */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.stacks.map((stack, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1 text-sm bg-white/5 border border-white/10 px-3 py-1 rounded-lg shadow-sm hover:shadow-yellow-400/40 transition-all"
                  >
                    {stackIcons[stack]} <span>{stack}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-5 mt-2">
                <a
                  href={project.live_link}
                  target="_blank"
                  className="flex items-center gap-2 text-sm hover:text-yellow-400 duration-200"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className="flex items-center gap-2 text-sm hover:text-yellow-400 duration-200"
                >
                  <FaGithub /> Repo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
