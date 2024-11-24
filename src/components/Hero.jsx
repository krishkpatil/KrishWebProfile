import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex justify-center">
        <div className="text-center max-w-xl">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl"
          >
            Krish Patil
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Data Science Graduate
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 font-light mb-8"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            href="https://docs.google.com/document/d/1i6hXZGWwQ_v2Ufdt8Tsfi4LaUh30OusNWg8ujfF-23g/export?format=pdf" // Direct PDF download link
            download="Krish_Patil_DS.pdf"
            target="_blank"  // Open in new tab
            rel="noopener noreferrer"  // Security best practice
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="inline-block rounded border-2 border-purple-500 px-4 py-2 text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 transition-all duration-300 hover:border-white hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 active:bg-gradient-to-r active:from-purple-500 active:via-slate-500 active:to-pink-300 active:border-white"
          >
            Download CV
          </motion.a>
          <div className="mt-12"></div> {/* Added space after the button */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
