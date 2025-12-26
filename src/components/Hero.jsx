import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import profilePic from "../assets/krish_profile.jpg";
import resumePDF from "../assets/projects/Krish-Patil-GenAI-Engineer.pdf";

const Hero = () => {
  const slides = [
    {
      label: "The Engineer",
      title: "GenAI Engineer | Full-Stack AI/ML Developer",
      content: "Turning complex AI research into production-grade applications. I have successfully architected and deployed multi-agent RAG systems, HIPAA-compliant AI pipelines, and internal AI platforms for global enterprise stakeholders."
    },
    {
      label: "The Researcher",
      title: "Data Science & ML Foundations",
      content: "Master’s in Data Science with AI (Merit) from the University of Exeter. Researched behavioral AI for data leak prevention, achieving a 40% reduction in exposure through NLP and real-time behavioral pattern analysis."
    },
    {
      label: "The Vision",
      title: "Architecting the Future of Agentic AI",
      content: "I am actively engineering end-to-end LLM ecosystems, focusing on multi-agent observability and robust evaluation frameworks to ensure autonomous systems deliver reliable performance in high-stakes production environments."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [displayedContent, setDisplayedContent] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 12000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    setDisplayedContent("");
    setIsTyping(true);
    let i = 0;
    const fullText = slides[currentIndex].content;

    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedContent(fullText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 15);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      filter: "blur(10px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)"
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      filter: "blur(10px)"
    })
  };

  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-35 relative overflow-hidden">
      <div className="flex flex-wrap items-center">
        {/* Navigation/Social is handled by Navbar, so we focus on tight Hero spacing */}
        <div className="w-full lg:w-3/5 min-h-[500px] md:min-h-[500px] flex flex-col justify-start lg:justify-center pt-2 md:pt-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              className="pb-4 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl w-full"
            >
              {"Krish Patil".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <div
              ref={carouselRef}
              className="relative w-full min-h-[300px] mt-1 touch-none cursor-grab active:cursor-grabbing"
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipeThreshold = 50;
                    if (offset.x > swipeThreshold) {
                      prevSlide();
                    } else if (offset.x < -swipeThreshold) {
                      nextSlide();
                    }
                  }}
                  className="absolute inset-0 flex flex-col items-center lg:items-start px-4 md:px-0"
                >
                  <p className="text-purple-400 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3">
                    {slides[currentIndex].label}
                  </p>
                  <h2 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl lg:text-5xl tracking-tight text-transparent font-medium mb-4 leading-tight min-h-[60px] md:min-h-0">
                    {slides[currentIndex].title}
                  </h2>
                  <div className="max-w-xl font-light leading-relaxed text-neutral-400 text-sm md:text-lg lg:text-xl min-h-[140px]">
                    {displayedContent}
                    {isTyping && <span className="inline-block w-2 h-4 ml-1 bg-purple-500 animate-pulse">|</span>}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 mt-4 w-full">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-bold"
                >
                  <span className="absolute h-full w-full bg-gradient-to-br from-[#ff00c6] via-[#ff00c6] to-[#01fbff]"></span>
                  <span className="relative rounded-full bg-neutral-950 px-8 py-3 transition-all duration-200 ease-out group-hover:bg-opacity-0">
                    <span className="relative bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent group-hover:text-white text-base md:text-lg">
                      View CV
                    </span>
                  </span>
                </a>
              </motion.div>

              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === index ? "w-8 bg-purple-500" : "w-1.5 bg-neutral-800"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 lg:p-8 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-3xl animate-pulse"></div>
            <div className="relative w-56 h-56 lg:w-[450px] lg:h-[450px] rounded-full border-4 border-neutral-800 overflow-hidden shadow-2xl">
              <img
                src={profilePic}
                alt="Krish Patil"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
