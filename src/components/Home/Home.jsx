import React from "react";
import { BsGithub, BsLinkedin, BsBehance } from "react-icons/bs";

const Home = () => {
  return (
    <section className="h-screen hero flex justify-center text-center px-24 lg:flex lg:items-center lg:px-0 md:flex md:items-center md:px-0 sm:flex sm:items-center sm:px-0">
      <div className="flex justify-center items-center flex-col gap-10">
        <h3 className="text-title pb-2 font-bold tracking-tight lg:flex lg:flex-col lg:items-center md:flex md:flex-wrap md:flex-col md:items-center md:text-center sm:flex sm:flex-wrap sm:flex-col sm:items-center sm:px-6 sm:text-center">
          <span className="text-title font-bold tracking-tight lg:pb-1.5 titleGradient">
            Original&nbsp;
          </span>
          and
          <span className="text-title font-bold tracking-tight lg:pb-1.5 titleGradient">
            &nbsp;modern&nbsp;
          </span>
          design at your fingertips.
        </h3>
        <h3 className="text-subtitle text-neutral-400 w-8/12">
          Improving every day to be the best version of myself. Imagining,
          designing and developing with love.
        </h3>
        <div className="flex gap-6 w-full justify-center lg:flex-col lg:items-center md:items-center md:flex-col sm:items-center sm:flex-col">
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
