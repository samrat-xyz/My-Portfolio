import React from "react";
import {
  FaHtml5, FaCss3, FaReact, FaGitAlt, FaGithub, FaFire,
} from "react-icons/fa";
import {
  SiTailwindcss, SiDaisyui, SiNextdotjs, SiJavascript,
  SiExpress, SiMongodb, SiNetlify, SiVercel,
  SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skill() {

  const itemAnim = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="max-w-6xl py-10 px-4 text-white mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-center tracking-widest">
         <span className="text-yellow-400 uppercase">Skills</span>
      </h2>

      {/* FRONTEND */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
        <h2 className="text-2xl mb-4 font-semibold text-yellow-400">Frontend</h2>
        <div className="flex flex-wrap gap-3">
          {[
            [<FaHtml5 size={24} className="text-orange-500"/>, "HTML"],
            [<FaCss3 size={24} className="text-blue-500"/>, "CSS"],
            [<SiTailwindcss size={24} className="text-teal-400"/>, "Tailwind CSS"],
            [<SiDaisyui size={24} />, "Daisy UI"],
            [<FaReact size={24} className="text-cyan-400"/>, "React"],
            [<SiNextdotjs size={24} />, "Next.js"],
          ].map(([icon, title], i) => (
            <motion.div variants={itemAnim} whileHover={{ scale:1.15, boxShadow:"0 0 15px #facc15" }} className="skill-item" key={i}>
              {icon} {title}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BACKEND */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 flex flex-col items-end">
        <h2 className="text-2xl mb-4 font-semibold text-yellow-400">Backend</h2>
        <div className="flex flex-wrap gap-3">
          {[
            [<SiJavascript size={24} className="text-yellow-300"/>, "JavaScript"],
            [<SiExpress size={24} />, "Express.js"],
            [<SiNextdotjs size={24} />, "Next.js"],
          ].map(([icon, title], i) => (
            <motion.div variants={itemAnim} whileHover={{ scale:1.15, boxShadow:"0 0 15px #facc15" }} className="skill-item" key={i}>
              {icon} {title}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* DATABASES */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
        <h2 className="text-2xl mb-4 font-semibold text-yellow-400">Database</h2>
        <div className="flex flex-wrap gap-3">
          <motion.div variants={itemAnim} whileHover={{ scale:1.15, boxShadow:"0 0 15px #facc15" }} className="skill-item">
            <SiMongodb size={24} className="text-green-800"/> MongoDB
          </motion.div>
        </div>
      </motion.div>

      {/* FIREBASE */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 flex flex-col items-end">
        <h2 className="text-2xl mb-4 font-semibold text-yellow-400">Firebase</h2>
        <div className="flex flex-wrap gap-3">
          {[
            [<SiFirebase size={24} className="text-yellow-400"/>, "Authentication"],
            [<SiFirebase size={24} className="text-yellow-400"/>, "Hosting"],
          ].map(([icon, title], i) => (
            <motion.div variants={itemAnim} whileHover={{ scale:1.15, boxShadow:"0 0 15px #facc15" }} className="skill-item" key={i}>
              {icon} {title}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* VCS + DEPLOY */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
        <h2 className="text-2xl mb-4 font-semibold text-yellow-400">VCS & Deployment</h2>
        <div className="flex flex-wrap gap-3">
          {[
            [<FaGitAlt size={24} className="text-[#f05134]"/>, "Git"],
            [<FaGithub size={24} />, "GitHub"],
            [<SiNetlify size={24} />, "Netlify"],
            [<SiVercel size={24} className="text-black"/>, "Vercel"],
            [<SiFirebase size={24} className="text-yellow-400"/>, "Firebase"],
          ].map(([icon, title], i) => (
            <motion.div variants={itemAnim} whileHover={{ scale:1.15, boxShadow:"0 0 15px #facc15" }} className="skill-item" key={i}>
              {icon} {title}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Styling */}
      <style>{`
        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #0f0f0f;
          border: 1px solid #333;
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 0.95rem;
          transition: 0.25s;
        }
      `}</style>
    </section>
  );
}
