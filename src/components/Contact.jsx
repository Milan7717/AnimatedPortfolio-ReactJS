import React, { useEffect, useState } from "react";
import { LuPointer } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Contact = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <>
      <div
        id="contact"
        className="w-full min-h-screen my-10 grid sm:grid-cols-2 tracking-tighter capitalize text-lg"
      >
        <div className=" flex flex-col justify-between items-center">
          <div className="">
            <h1 className="md:text-5xl text-4xl font-semibold text-center my-5">
              Social Links
            </h1>
            <div className="social flex gap-4">
              <Link
                to="https://github.com/Milan7717"
                className="text-6xl border-[1px] border-blue-500 rounded-full "
              >
                <FaGithub className="p-2 " />
              </Link>
              <Link
                to="#"
                className="text-6xl border-[1px] border-blue-500  rounded-full "
              >
                <FaTwitter className="p-2 " />
              </Link>
              <Link
                to="https://www.linkedin.com/in/milanmishra7/"
                className="text-6xl border-[1px] border-blue-500  rounded-full "
              >
                <FaLinkedinIn className="p-2" />
              </Link>
            </div>
          </div>
          <div className="my-10  flex gap-10 top-1/2 left-1/2  ">
            <div className=" flex  items-center justify-center w-[8vw] h-[8vw] bg-zinc-100 rounded-full">
              <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
                <div
                  style={{ transform: `translate(0%,0%) rotate(${rotate}deg)` }}
                  className="line w-full h-4"
                >
                  <div className="md:w-4 md:h-4 w-3 h-3 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className=" flex  items-center justify-center w-[8vw] h-[8vw] bg-zinc-100 rounded-full">
              <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
                <div
                  style={{ transform: `translate(0%,0%) rotate(${rotate}deg)` }}
                  className="line w-full h-4"
                >
                  <div className="md:w-4 md:h-4 w-3 h-3 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:my-4">
           <a href="/assets/Milan_Resume.pdf" download="MIlanMishraCV"> <motion.button whileHover={{scale:1.2,transition:{repeat:3}}} className="flex gap-2 items-center  bg-zinc-800 p-2 rounded-lg hover:shadow-lg hover:shadow-zinc-700 " >
              Resume <IoMdDownload />
            </motion.button>
            </a>
            <motion.div 
            initial={{scale:1.0}}
            animate={{scale:1.3}}
            transition={{repeat:Infinity,duration:0.3}}
            >
              <LuPointer className="lg:text-4xl text-3xl my-3 text-red-500 " />
            </motion.div>
           
          </div>
        </div>

        <div className="border-[1px] border-zinc-800 bg-zinc-800 rounded-xl p-2 ">
          <h1 className="lg:text-2xl text-xl my-4">Get In touch</h1>
          <h1 className="lg:text-4xl text-3xl font-semibold">Contact Me</h1>
          <div className="flex flex-col mx-4 my-4">
            <label className="my-2">Your Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="bg-zinc-900  rounded-lg p-1 px-4 "
            />
          </div>
          <div className="flex flex-col mx-4 my-4">
            <label className="my-2">Your email</label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="bg-zinc-900 rounded-lg p-1 px-4"
            />
          </div>
          <div className="flex flex-col mx-4 my-4">
            <label className="my-2">Your message</label>
            <textarea
              className="bg-zinc-900 rounded-lg p-1 px-4 resize-none"
              name=""
              id=""
              cols="10"
              rows="6"
            ></textarea>
          </div>
          <motion.button whileHover={{scale:1.2,transition:{repeat:Infinity}}} className="bg-zinc-800 hover:shadow-lg hover:shadow-zinc-700 rounded-xl p-1 mx-4 w-[15%]">
            Send
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Contact;
