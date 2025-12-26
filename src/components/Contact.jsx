import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="border-t border-neutral-900 pb-20 pt-10 px-4">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="mb-10 text-center text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Let's Build Something Together
        </h2>

        <p className="text-neutral-400 mb-12 text-lg">
          Currently open to new opportunities in GenAI, ML Engineering, and Full-Stack Development.
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <motion.a
            href={`mailto:${CONTACT.email}`}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 hover:border-purple-500/50 transition-all group"
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
              <FaEnvelope className="text-purple-500 text-xl" />
            </div>
            <h3 className="text-neutral-200 font-semibold mb-2">Email</h3>
            <p className="text-neutral-400 text-sm">{CONTACT.email}</p>
          </motion.a>

          {/* Location Card */}
          <div className="flex flex-col items-center p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 transition-all">
            <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-pink-500 text-xl" />
            </div>
            <h3 className="text-neutral-200 font-semibold mb-2">Location</h3>
            <p className="text-neutral-400 text-sm">{CONTACT.address}</p>
          </div>

          {/* Socials Card */}
          <div className="flex flex-col items-center p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 transition-all">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
              <FaLinkedin className="text-blue-500 text-xl" />
            </div>
            <h3 className="text-neutral-200 font-semibold mb-2">Social</h3>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/krish-patil" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/krishkpatil" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
          <p>© 2025 Krish Patil. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with <span className="text-pink-500">❤️</span> using React & Tailwind
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Contact;
