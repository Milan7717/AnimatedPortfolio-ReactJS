import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/project/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => {

 
  
  return (
    <div className='bg-zinc-900 text-zinc-100 font-["neo-montreal"] '>
      <Navbar />
      <div className="px-2 sm:px-4 md:px-12 lg:px-16">
        <Introduction />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
