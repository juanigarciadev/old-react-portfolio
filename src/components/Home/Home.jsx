import React from "react";
import { BsGithub, BsLinkedin, BsBehance } from "react-icons/bs";

const Home = () => {
  return (
    <section className="h-screen grid grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 grid-rows-1 px-24 lg:flex lg:items-center lg:px-0 md:flex md:items-center md:px-0 sm:flex sm:items-center sm:px-0">
      <div className="flex justify-center flex-col gap-10">
        <h3 className="text-title font-bold tracking-tight lg:flex lg:flex-col lg:items-center md:flex md:flex-wrap md:flex-col md:items-center md:text-center sm:flex sm:flex-wrap sm:flex-col sm:items-center sm:px-6 sm:text-center">
          <span className="text-title font-bold tracking-tight text-lime-500">
            Original&nbsp;
          </span>
          and
          <span className="text-title font-bold tracking-tight text-lime-500">
            &nbsp;modern&nbsp;
          </span>
          design at your fingertips.
        </h3>
        <h3 className="text-subtitle text-neutral-400 w-3/4 lg:flex lg:text-center lg:w-full lg:px-48 lg:justify-center md:flex md:text-center md:w-full md:px-8 md:justify-center sm:flex sm:text-center sm:w-full sm:px-8 sm:justify-center">
          Improving every day to be the best version of myself. Imagining,
          designing and developing with love.
        </h3>
        <div className="flex gap-6 lg:items-center lg:flex-col md:items-center md:flex-col sm:items-center sm:flex-col">
          <button
            className="secondaryButton lg:w-3/6"
            onClick={() => window.open("https://github.com/juanigarciadev")}
          >
            <BsGithub />
            Github
          </button>
          <button
            className="secondaryButton lg:w-3/6"
            onClick={() =>
              window.open("https://www.linkedin.com/in/juanigarciadev")
            }
          >
            <BsLinkedin />
            LinkedIn
          </button>
          <button
            className="secondaryButton lg:w-3/6"
            onClick={() =>
              window.open("https://www.behance.net/juanigarciadev")
            }
          >
            <BsBehance />
            Behance
          </button>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Home;
