import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-20 flex flex-wrap lg:justify-center items-start lg:gap-12">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              <div className="relative group w-full max-w-[400px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                {project.isVideo ? (
                  <video
                    src={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-neutral-800"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-neutral-800 hover:scale-[1.02] transition-transform duration-500"
                  />
                )}
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/3 max-w-2xl px-4 mt-8 lg:mt-0"
            >
              <h6 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                {project.title}
              </h6>
              <p className="mb-4 italic text-purple-300/80 text-sm font-medium tracking-wide">
                {project.subtitle}
              </p>
              <p className="mb-6 text-neutral-400 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="mb-6">
                <h7 className="text-xs font-bold text-neutral-200 block mb-3 uppercase tracking-[0.2em] opacity-70">Core Features</h7>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-neutral-400">
                  {project.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-1">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-5 bg-neutral-900/40 rounded-2xl border border-neutral-800/50 backdrop-blur-sm">
                <h7 className="text-xs font-bold text-purple-400 block mb-2 uppercase tracking-wider">Technical Deep Dive</h7>
                <p className="text-sm text-neutral-400 leading-relaxed italic">
                  {project.deepDive}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-neutral-900 border border-neutral-800 px-4 py-1 text-xs font-medium text-neutral-300 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-white bg-neutral-900 px-6 py-3 rounded-full border border-neutral-800 hover:border-pink-500/50 transition-all duration-300"
                >
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">View Repository</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
