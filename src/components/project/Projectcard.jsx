import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Projectcard = (props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`${
        isHover
          ? "bg-cover bg-center rounded-lg lg:w-[20%] lg:h-[24vw] w-[40%] h-[60vw] md:w-[20%] md:h-[32vw] sm:w-[25%] sm:h-[40vw] relative "
          : "bg-cover bg-center rounded-lg lg:w-[12%] lg:h-[24vw] w-[40%] h-[60vw] md:w-[14%] md:h-[32vw] sm:w-[20%] sm:h-[40vw] relative"
      }`}
      style={{
        backgroundImage: `url(${props.image})`,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`${
          isHover
            ? "hidden"
            : "absolute bottom-10 -right-6 bg-zinc-800 rounded-lg p-3 text-center text-lg transform -rotate-90 "
        }`}
      >
        <h1>{props.projectname}</h1>
      </div>
      <AnimatePresence>
        {isHover && (
          <motion.div
            key="content"
            className="absolute bottom-0 bg-zinc-900 opacity-75 h-[50%] flex flex-col gap-2 justify-end items-start p-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>{props.projectname}</h1>
            <h1 className="line-clamp-4 text-sm">{props.description}</h1>
            <button>
              <Link to={props.link} className="bg-zinc-700 rounded-full p-2">
                See More
              </Link>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projectcard;
