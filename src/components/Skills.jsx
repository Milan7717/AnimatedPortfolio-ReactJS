import React, { useEffect } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiTypescript } from "react-icons/si";
import {TbBrandRedux} from "react-icons/tb";

const parentVariants = {
  initially: {
    opacity: 0,
    y: "-50vw",
  },
  animation: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 4,
      staggerChildren: 0.5,
    },
  },
};

const skillVariants = {
  initially: {
    y: "-50vw",
    opacity: 0,
  },
  animation: {
    opacity: 1,
    y: 0,
  },
};

const superchild = {
  initially: {},
  animation: {
    opacity: 1,
    scale: 1.1,
    rotate: [7, -7, 7],
    transition: {
      ease: "easeInOut",
      duration: 1.5,
      x: { duration: 1.2 },
      repeat: Infinity,
    },
  },
};

const Skills = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("animation");
    }
  }, [controls, inView]);

  return (
    <>
      <div id="skill" className="bg-zinc-900 text-zinc-100 min-h-screen w-full">
        <div className="border-t-2 border-zinc-500 md:w-[30%]  w-[50%]"></div>
        <h1 className="lg:text-6xl text-4xl uppercase lg:mx-5 mx-2 my-2 font-semibold">
          My Skills
        </h1>

        <div
          ref={ref}
          className="border-t-2 border-zinc-500 md:w-[30%]  w-[50%]"
        ></div>

        <div className="w-full flex items-center justify-center my-10">
          <motion.div
            variants={parentVariants}
            initial="initially"
            animate={controls}
            className="flex flex-wrap lg:gap-10 gap-4 w-[100%]  sm:w-[70%] lg:w-[50%] md:w-[60%] "
          >
            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
                <FaHtml5 className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">HTML</h1>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
                <FaCss3Alt className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">CSS</h1>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
                <SiTailwindcss className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">Tailwind CSS</h1>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
                <TbBrandJavascript className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">Javascript</h1>
            </motion.div>
            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
                <SiTypescript className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">Typescript</h1>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
                <RiReactjsLine className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">ReactJS</h1>
            </motion.div>
            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
              
                <TbBrandRedux className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">Redux Toolkit</h1>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
                <TbBrandNodejs className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">NodeJS</h1>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
                <DiMongodb className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">MongoDB</h1>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
                <SiExpress className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">ExpressJS</h1>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className=" flex flex-col items-center bg-zinc-800 lg:p-4 p-2  border-[1px] border-zinc-800 rounded-xl"
            >
              <motion.div variants={superchild}>
                <FaGithub className="bg-zinc-900 border-[1px] border-red-500 rounded-full p-2 md:text-8xl sm:text-7xl text-6xl" />
              </motion.div>
              <h1 className="md:text-2xl mt-2">GitHub</h1>
            </motion.div>
          </motion.div>
        </div>

        <div className="sm:mx-4 mx-2 border-[1px] border-zinc-700 my-10 flex "></div>
      </div>
    </>
  );
};

export default Skills;
