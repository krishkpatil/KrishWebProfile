import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiMysql, SiPowerbi, SiTensorflow, SiPandas, SiNumpy } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: 0,
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-10 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='flex flex-col items-center'>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            <FaPython className="text-5xl text-yellow-400" />
          </motion.div>
          <span className="mt-2 text-sm text-white">Python</span>
        </div>
        <div className='flex flex-col items-center'>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            <SiPandas className="text-5xl text-blue-400" />
          </motion.div>
          <span className="mt-2 text-sm text-white">Pandas</span>
        </div>
        <div className='flex flex-col items-center'>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            <SiNumpy className="text-5xl text-blue-500" />
          </motion.div>
          <span className="mt-2 text-sm text-white">NumPy</span>
        </div>
        <div className='flex flex-col items-center'>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            <SiTensorflow className="text-5xl text-orange-500" />
          </motion.div>
          <span className="mt-2 text-sm text-white">TensorFlow</span>
        </div>
        <div className='flex flex-col items-center'>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            <SiMysql className="text-5xl text-blue-600" />
          </motion.div>
          <span className="mt-2 text-sm text-white">MySQL</span>
        </div>
        <div className='flex flex-col items-center'>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            <SiPowerbi className="text-5xl text-yellow-500" />
          </motion.div>
          <span className="mt-2 text-sm text-white">Power BI</span>
        </div>
        <div className='flex flex-col items-center'>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            <FaNodeJs className="text-5xl text-green-500" />
          </motion.div>
          <span className="mt-2 text-sm text-white">Node.js</span>
        </div>
        <div className='flex flex-col items-center'>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            <RiReactjsLine className="text-5xl text-cyan-400" />
          </motion.div>
          <span className="mt-2 text-sm text-white">React.js</span>
        </div>
        <div className='flex flex-col items-center'>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            <FaJsSquare className="text-5xl text-yellow-500" />
          </motion.div>
          <span className="mt-2 text-sm text-white">JavaScript</span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
