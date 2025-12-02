import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen  text-white flex flex-col justify-center items-center px-6 md:px-12 lg:px-32 py-12"
    >
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-bold mb-10 text-center tracking-widest"
      >
        ABOUT <span className="text-yellow-400">ME</span>
      </motion.h2>

      {/* Pure text — no card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl space-y-6 text-center md:text-left"
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200">
          React Developer
        </h3>

        <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
          I'm a passionate React developer focused on building modern,
          high-performance web applications. I create clean and user-friendly
          interfaces that deliver a smooth user experience.
        </p>

        <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
          I work with the latest tools, JavaScript standards, and React concepts
          to develop scalable and efficient solutions. Problem-solving and UI
          optimization are my core strengths.
        </p>

        <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
          Outside of coding, I explore new technologies, learn continuously, and
          enjoy contributing to the developer community.
        </p>
      </motion.div>
    </section>
  );
}
