import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="mt-24 py-3 bg-black/80 backdrop-blur-xl border-t border-white/10 opacity-75">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
       

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-3xl mb-3">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/ew.r.asif.507079" },
            { icon: <FaGithub />, link: "https://github.com/samrat-xyz" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/md-samrat0/" },
          ].map((item, index) => (
            <motion.a
              whileHover={{ scale: 1.2 }}
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-3xl font-bold  text-yellow-400">
           Made with <IoHeart className="inline"/> by Samrat.
        </p>
      </motion.div>
    </footer>
  );
}
