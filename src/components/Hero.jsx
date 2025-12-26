import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profilePic from "../assets/krish_profile.jpg";
import resumePDF from "../assets/projects/Krish-Patil-GenAI-Engineer.pdf";

const Hero = () => {
  const titles = ["GenAI Engineer", "Full-Stack AI/ML Developer", "Data Scientist"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = titles[currentTitleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullTitle.slice(0, displayText.length + 1));
        if (displayText === currentFullTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullTitle.slice(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <div className="border-b border-neutral-900 pb-16 lg:mb-35">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Krish Patil
            </motion.h1>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-12" // Set height to prevent layout shift
            >
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent font-medium">
                {displayText}
                <span className="animate-pulse text-purple-500">|</span>
              </span>
            </motion.div>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-4 max-w-xl py-6 font-light leading-relaxed text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-bold"
              >
                <span className="absolute h-full w-full bg-gradient-to-br from-[#ff00c6] via-[#ff00c6] to-[#01fbff] group-hover:from-[#ff00c6] group-hover:via-[#ff00c6] group-hover:to-[#01fbff]"></span>
                <span className="relative rounded-full bg-neutral-950 px-6 py-3 transition-all duration-200 ease-out group-hover:bg-opacity-0">
                  <span className="relative bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent group-hover:text-white">
                    View CV
                  </span>
                </span>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-2xl animate-pulse"></div>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-neutral-800 overflow-hidden shadow-2xl">
              <img
                src={profilePic}
                alt="Krish Patil"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
