import React from "react";
import { BsBehance, BsGithub, BsLinkedin } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <footer className="flex flex-col w-full">
      <div className="flex flex-col pb-16 md:pb-12">
        <h3 className="text-sm text-neutral-400 pl-16 pb-2">
          // Do you have an idea?
        </h3>
        <h3 className="text-title font-bold pb-1.5 px-16">Contact Me</h3>
      </div>
      <div className="flex justify-between px-16 pb-24 h-auto gap-32 md:flex-col md:gap-8">
        <div className="flex gap-32 md:flex-col md:gap-8">
          <div>
            <h3 className="text-sm text-neutral-400">// Email</h3>
            <h3
              className="flex items-center gap-1.5 text-subtitle font-bold cursor-pointer hover:text-neutral-300 duration-300"
              onClick={() => {
                window.location = "mailto:juanigarciadev@gmail.com";
              }}
            >
              juanigarciadev@gmail.com
              <RxExternalLink />
            </h3>
          </div>
          <div>
            <h3 className="text-sm text-neutral-400">// Phone number</h3>
            <h3 className="text-subtitle font-bold">+(54) 9 261 597-1527</h3>
          </div>
        </div>
        <div className="flex gap-20 justify-bottom items-center lg:gap-4 md:gap-16">
          <BsGithub
            className="text-[30px] cursor-pointer"
            title="Github"
            onClick={() => window.open("https://github.com/juanigarciadev")}
          />
          <BsLinkedin
            className="text-[30px] cursor-pointer"
            title="LinkedIn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/juanigarciadev")
            }
          />
          <BsBehance
            className="text-[30px] cursor-pointer"
            title="Behance"
            onClick={() =>
              window.open("https://www.behance.net/juanigarciadev")
            }
          />
        </div>
      </div>
      <div className="w-full h-1 bg-[#00ff00]"></div>
    </footer>
  );
};

export default Contact;
