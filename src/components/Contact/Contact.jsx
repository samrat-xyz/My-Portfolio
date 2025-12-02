import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
    id="contact"
    className="min-h-screen  text-white px-6 py-20">
      {/* HEADER */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-4xl lg:text-5xl font-extrabold mb-20 text-center tracking-[6px]"
      >
        CONTACT <span className="text-yellow-400">ME</span>
      </motion.h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* LEFT CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="bg-black opacity-75 backdrop-blur-xl border border-white/10 rounded-3xl p-12 "
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 text-lg mb-4">
            I'd love to hear from you!
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Whether you have a question or just want to say hi, message me
            anytime. Stay connected!
          </p>

         
          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-3xl mt-4">
            {[
              { icon: <FaFacebook />, link: "https://www.facebook.com/ew.r.asif.507079" },
              { icon: <FaGithub />, link: "https://github.com/samrat-xyz" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/md-samrat0/" },
            ].map((item, i) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-yellow-400 transition duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="space-y-7">
          {/* ITEM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="flex items-center gap-5 bg-black opacity-75  backdrop-blur-xl rounded-2xl 
                       p-5 border border-white/10 shadow-lg "
          >
            <FaEnvelope className="text-3xl text-yellow-400" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-300">md.samrat61790@gmail.com</p>
            </div>
          </motion.div>

          {/* WHATSAPP */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="flex items-center gap-5 bg-black backdrop-blur-xl rounded-2xl 
                       p-5 border border-white/10 shadow-lg "
          >
            <FaWhatsapp className="text-3xl text-green-400" />
            <div>
              <h3 className="text-lg font-semibold">WhatsApp</h3>
              <p className="text-gray-300">+8801861790495</p>
            </div>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="flex items-center gap-5 bg-black backdrop-blur-xl rounded-2xl 
                       p-5 border border-white/10 shadow-lg "
          >
            <FaMapMarkerAlt className="text-3xl text-red-400" />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-300">Cumilla, Bangladesh</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
