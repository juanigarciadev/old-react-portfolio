import React from "react";
import Certificates from "../Certificates/Certificates";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center gap-16 pt-32 px-16">
      <section className="flex flex-col items-center ">
        <h3 className="text-sm w-auto text-neutral-400 pb-2">
          // I am interesting!
        </h3>
        <h3 className="text-center text-title font-bold pb-1.5">About me</h3>
      </section>
      <section className="flex flex-col gap-8 items-center">
        <p className="w-2/4 lg:w-full">
          Curious and creative front-end developer focused in creating useful,
          fun and friendly experiences. Currently studying&nbsp;
          <mark className="text-[#00ff00] bg-transparent">
            Software Development
          </mark>
          .
        </p>
        <p className="w-2/4 lg:w-full">
          Constantly evolving as a person and professional to achieve my goals.
          My objectives are: to be able to enter the programming and design work
          environment, create friendly proposals, always maintaining
          interactivity and inclusion of all audiences, and to be able to create
          tools that contribute to the development area.
        </p>
        <Link
          to="/biography"
          className="secondaryButton"
          onClick={() => scrollTo({ top: 0, behaviour: "smooth" })}
        >
          Read full biography
        </Link>
      </section>
      <div className="flex flex-col items-center">
        <h3 className="text-subtitle font-bold pb-8">My skills</h3>
        <section className="flex flex-col gap-32">
          <div className="flex flex-wrap gap-12 w-[40vw] justify-center items-center lg:w-[100%]">
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-html5-plain text-[70px]"></i>
              <h2 className="text-md">HTML5</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-css3-plain text-[70px]"></i>
              <h2 className="text-md">CSS3</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-javascript-plain text-[70px]"></i>
              <h2 className="text-md">JavaScript</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-react-original text-[70px]"></i>
              <h2 className="text-md">ReactJS</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-tailwindcss-plain text-[70px]"></i>
              <h2 className="text-md">Tailwind CSS</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-sass-original text-[70px]"></i>
              <h2 className="text-md">SASS</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-bootstrap-plain text-[70px]"></i>
              <h2 className="text-md">Bootstrap</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-git-plain text-[70px]"></i>
              <h2 className="text-md">git</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-github-original text-[70px]"></i>
              <h2 className="text-md">Github</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-photoshop-plain text-[70px]"></i>
              <h2 className="text-md">Photoshop</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-illustrator-plain text-[70px]"></i>
              <h2 className="text-md">Illustrator</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-figma-plain text-[70px]"></i>
              <h2 className="text-md">Figma</h2>
            </article>
            <article className="flex flex-col items-center gap-4">
              <i className="devicon-visualstudio-plain text-[70px]"></i>
              <h2 className="text-md">Visual Studio</h2>
            </article>
          </div>
        </section>
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
};

export default AboutMe;
