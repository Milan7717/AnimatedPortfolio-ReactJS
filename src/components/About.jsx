import React from "react";

const About = () => {
  return (
    <>
      <div id="about"   className="min-h-screen w-full text-lg ">
        <div className="my-4">
          <div className="border-t-2 border-zinc-500 md:w-[30%]  w-[50%]"></div>
          <h1 className="lg:text-6xl text-4xl uppercase lg:mx-5 mx-2 my-2 font-semibold">
            About Me
          </h1>
          <div className="border-t-2 border-zinc-500 md:w-[30%]  w-[50%]"></div>
        </div>
        <div className="flex flex-wrap-reverse items-center justify-center ">
          <div className="">
            <h1>
              Originating from the picturesque town of Kavre, Panchkhal, I am
              Milan Mishra, a dedicated individual driven by passion,
              discipline, and an unwavering work ethic. My behavior is
              characterized by a disciplined approach, ensuring that I tackle
              challenges with resilience and determination. Currently pursuing
              my education at Texas International College, I carry my childhood
              traits of being a brilliant, obedient, and calm student into my
              academic journey. It is this love for studying that has propelled
              me to pursue excellence in my education. As I navigate through
              life, I am dedicated to creating a meaningful impact through my
              work and experiences.
            </h1>
          </div>
          <div
            id="about-animation"
            className="h-[55vw] w-[50vw] sm:h-[45vw] sm:w-[40vw] md:h-[35vw] md:w-[30vw] lg:h-[30vw] lg:w-[25vw] flex relative justify-center items-center"
          >
            <img
              src="assets/img/milan.jpg"
              alt=""
              className="h-[50vw] w-[50vw] sm:h-[40vw] sm:w-[40vw] md:h-[30vw] md:w-[30vw] lg:h-[25vw] lg:w-[25vw] bg-cover object-cover object-center"
            />
            <span className="circle-spin h-[52vw] w-[52vw] sm:h-[42vw] sm:w-[42vw] md:h-[32vw] lg:w-[27vw] lg:h-[27vw] md:w-[30vw]"></span>
          </div>
        </div>
        <div>
          <h1 className="my-2">Here are the services I can provide :</h1>
        </div>
        <div className="flex flex-wrap gap-6 my-4">
          <div className="bg-zinc-800 border p-4 w-[40%] lg:w-[20%]  sm:w-[30%] rounded-xl flex  flex-col items-center justify-center">
            <img
              src="assets/img/fronendimage.jpg"
              alt=""
              className=" rounded-lg h-[60%]"
            />
            <h1 className="mt-5 border-t-[1px] border-zinc-500 h-[20%] ">Frontend Development</h1>
          </div>
          <div className="bg-zinc-800 border p-4 w-[40%] lg:w-[20%]  sm:w-[30%]  rounded-xl flex  flex-col items-center justify-center">
            <img
              src="assets/img/backendimage.png"
              alt=""
              className=" rounded-lg bg-zinc-300 h-[60%]"
            />
            <h1 className="mt-5 border-t-[1px] border-zinc-500 h-[20%]">Backend Development</h1>
          </div>
        </div>

        <div className="sm:mx-4 mx-2 border-[1px] border-zinc-700 my-10 flex "></div>
      </div>
    </>
  );
};

export default About;
