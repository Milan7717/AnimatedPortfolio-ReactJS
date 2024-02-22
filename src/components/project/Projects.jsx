import React, { useEffect } from "react";
import Projectcard from "./Projectcard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projectAPi = [
  {
    image:
      "https://assets.blurb.com/pages/website-assets/portfolio/03_ProductHighlights-portfolio-640x358-graphicdesign-ddf68ca68c528fad5f79746b9634a669b28f20e920a07dc65d98733077ced053.jpg",
    projectname: "Book Store",
    description:
      " E-commerce webapp, where customers can see the book list and admin can add book products",
    link: "www.youtube.com",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j8sg4eqf-WzytGb4C4l5BtV1rtcYpEUiD4_SX4fZ7Q&s",
    projectname: "Shoe Shop",
    description:
      " E-commerce webapp, where customers can see the book list and admin can add book products",
    link: "www.youtube.com",
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
  const[ref,inView]=useInView();
  const controls=useAnimation();

  useEffect(()=>{
    if(inView){
      controls.start("animation")
    }
  },[controls,inView])
  return (
    <div
      id="project"
      className="bg-zinc-900 text-zinc-100 min-h-screen w-full my-4 text-lg"
    >
      <div className="border-t-2 border-zinc-500 md:w-[35%] w-[50%]"></div>
      <h1 className="lg:text-6xl text-4xl uppercase lg:mx-5 mx-2 my-2 font-semibold">
        My Projects
      </h1>
      <div ref={ref} className="border-t-2 border-zinc-500 md:w-[35%] w-[50%]"></div>
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
