import { motion } from 'framer-motion';
import React from 'react'

interface Project {
  srcImg: string;
  title: string;
}

type Props = {
  project: Project;
  children: React.ReactNode;
};

function Project({ project, children }: Props) {
  return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-creen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[400px] rounded-lg md:w-[700px]"
            src={project.srcImg}
            alt=""
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center underline decoration-[#1DA4AD]">
              {project.title}
            </h4>

            <p className="text-lg text-center md:text-left max-w-3xl">
              {children}
            </p>
          </div>
        </motion.div>
  )
}

export default Project