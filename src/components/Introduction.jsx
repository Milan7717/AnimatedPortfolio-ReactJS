import { motion } from "framer-motion";
import React from "react";


const Introduction = () => {
  return (
    <div id="introduction" className="pt-20 ">
      <div className=" min-h-screen w-[100%] flex flex-wrap-reverse justify-center">
        <div className="mt-4 w-[100%] sm:w-[50%] uppercase font-semibold lg:tracking-tight leading-none sm:items-end flex flex-col sm:justify-center">
          <div className="flex sm:text-2xl md:text-3xl text:xl gap-2">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 40 }}
              className="capitalize"
            >
              hi
            </motion.h1>
            <motion.span
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 40 }}
              className="text-blue-600"
            >
              I am
            </motion.span>
          </div>
          <motion.h1 initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 40 }} className="sm:text-4xl text-2xl">Milan</motion.h1>
          <motion.h1 initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 40 }} className="sm:text-5xl text-3xl">Mishra</motion.h1>
          <motion.div initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 40 }} className="text-animation ">
            <h2 className="font-bold text-4xl sm:text-3xl lg:text-5xl ">
              Fullstack Developer
            </h2>
          </motion.div>
        </div>

        <div className=" sm:p-4 lg:p-0 sm:w-[50%] flex justify-center">
          <img
            src="assets/img/daurasuruwal.jpg"
            alt=""
            className="rounded-lg md:w-[80%] w-[50%] sm:w-[100%]  bg-cover object-cover object-center"
          />
        </div>
      </div>
      <div className="sm:mx-4 mx-2 border-[1px] border-zinc-700 my-10 flex "></div>
    </div>
  );
};

export default Introduction;
