import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'
            >
                Certifications
            </motion.h1>
            <div className="flex flex-col items-center">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-8 flex flex-wrap lg:justify-center w-full max-w-2xl bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800 hover:border-purple-500/50 transition-colors group"
                    >
                        <div className="w-full lg:w-1/4">
                            <p className="text-sm font-bold text-purple-400 mb-2 lg:mb-0">{cert.date}</p>
                        </div>
                        <div className="w-full lg:w-3/4">
                            <h6 className="font-semibold text-neutral-200 group-hover:text-purple-300 transition-colors">
                                {cert.title}
                            </h6>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Certifications;
