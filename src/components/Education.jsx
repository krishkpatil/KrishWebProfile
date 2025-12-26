import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'
            >
                Education
            </motion.h1>
            <div className="relative">
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-neutral-800"></div>
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="mb-12 flex flex-wrap lg:justify-center items-center relative">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-12 px-4 mb-4 lg:mb-0"
                        >
                            <div className="text-right">
                                <p className="text-sm font-bold text-purple-400 mb-1">{edu.year}</p>
                                <h6 className="text-lg font-semibold text-neutral-200">{edu.institution}</h6>
                            </div>
                        </motion.div>

                        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-neutral-950 z-10"></div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/2 lg:pl-12 px-4"
                        >
                            <h6 className="mb-2 font-semibold text-neutral-200">
                                {edu.degree}
                            </h6>
                            <p className="mb-4 text-sm text-neutral-400 leading-relaxed text-justify">
                                {edu.description}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
