import React from "react";
import Certificates from "../Certificates/Certificates";

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center gap-16 py-16 px-16">
      <div className="flex flex-col items-center">
        <h3 className="text-sm w-auto text-neutral-400 pb-2">
          // I am interesting!
        </h3>
        <h3 className="text-title font-bold pb-1.5">About me</h3>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <p className="w-2/4 lg:w-full">
          My name is Juan Ignacio García, I am 19 years old, I was born and
          raised in Mendoza, Argentina. Currently studying{" "}
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
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-subtitle font-bold pb-8">My skills</h3>
        <div className="flex flex-col gap-32">
          <div className="flex flex-wrap gap-12 w-[40vw] justify-center items-center lg:w-[100%]">
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-html5-plain text-[70px]"></i>
              <h3 className="text-md">HTML5</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-css3-plain text-[70px]"></i>
              <h3 className="text-md">CSS3</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-javascript-plain text-[70px]"></i>
              <h3 className="text-md">JavaScript</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-react-original text-[70px]"></i>
              <h3 className="text-md">ReactJS</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-tailwindcss-plain text-[70px]"></i>
              <h3 className="text-md">Tailwind</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-sass-original text-[70px]"></i>
              <h3 className="text-md">SASS</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-bootstrap-plain text-[70px]"></i>
              <h3 className="text-md">Bootstrap</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-git-plain text-[70px]"></i>
              <h3 className="text-md">git</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-github-original text-[70px]"></i>
              <h3 className="text-md">Github</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-photoshop-plain text-[70px]"></i>
              <h3 className="text-md">Photoshop</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-illustrator-plain text-[70px]"></i>
              <h3 className="text-md">Illustrator</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-figma-plain text-[70px]"></i>
              <h3 className="text-md">Figma</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i className="devicon-visualstudio-plain text-[70px]"></i>
              <h3 className="text-md">Visual Studio</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-subtitle font-bold pb-8">My certification</h3>
        <Certificates />
      </div>
    </div>
  );
};

export default AboutMe;
