import React, { useEffect } from "react";
import Projectcard from "./Projectcard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projectAPi = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrWMqsVhMGYKtZo9Dzuu3h04VmV1ybGXWPA&s",
    projectname: "NepaliGPT",
    description:
      "NepaliGPT is an innovative project currently under development, designed to empower Nepali speakers to interact with AI in their native language.",
    link: "https://new-nepali-gpt.vercel.app/",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdHNCuyuMqlpNPxwV-mDVF14NAs1xw8wRFhQ&s",
    projectname: "UniversalMl",
    description:
      "A tutor site where users can learn to build the sites with the help of AI.",
    link: "https://www.universalml.ai/",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/03/21/87/17/240_F_321871791_I6DdiEL6qXp5iOxCaDHhuMcAS7oT2vHB.jpg",
    projectname: "Virtual Reality",
    description: "Virual reality is a animated website about VR products",
    link: "https://virtualrelaitysite.netlify.app/",
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j8sg4eqf-WzytGb4C4l5BtV1rtcYpEUiD4_SX4fZ7Q&s",
    projectname: "Shoe Shop",
    description:
      " E-commerce webapp, where customers can see the shoes category list and admin can add shoes products",
    link: "https://myshoeshop.netlify.app/",
  },
];

const parentAnimation = {
  initially: {},
  animation: {
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 4,
      staggerChildren: 0.5,
    },
  },
};

const childAnimation = {
  initially: {
    opacity: 0,
    y: -20,
  },
  animation: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Projects = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("animation");
    }
  }, [controls, inView]);
  return (
    <div
      id="project"
      className="bg-zinc-900 text-zinc-100 min-h-screen w-full my-4 text-lg"
    >
      <div className="border-t-2 border-zinc-500 md:w-[35%] w-[50%]"></div>
      <h1 className="lg:text-6xl text-4xl uppercase lg:mx-5 mx-2 my-2 font-semibold">
        My Projects
      </h1>
      <div
        ref={ref}
        className="border-t-2 border-zinc-500 md:w-[35%] w-[50%]"
      ></div>
      <h1 className="my-10">
        These projects showcase my proficiency, providing tangible examples of
        my skills. I offer concise explanations and include links to view the
        actual work. It's a way of demonstrating my ability to tackle complex
        challenges, utilize various tools, and ensure the successful completion
        of tasks.
      </h1>
      <motion.div
        variants={parentAnimation}
        initial="initially"
        animate={controls}
      >
        <motion.div
          variants={childAnimation}
          className="flex flex-wrap gap-10 my-10 "
        >
          {projectAPi.map((data, index) => {
            return (
              <Projectcard
                key={index}
                image={data.image}
                projectname={data.projectname}
                description={data.description}
                link={data.link}
              />
            );
          })}
        </motion.div>
      </motion.div>
      <div className="sm:mx-4 mx-2 border-[1px] border-zinc-700 my-10 flex "></div>
    </div>
  );
};

export default Projects;
