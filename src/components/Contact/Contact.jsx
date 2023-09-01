import React from "react";
import { BsBehance, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="flex flex-col gap-16 md:gap-12">
      <div className="flex flex-col">
        <h3 className="text-sm text-neutral-400 pl-16 pb-2">
          // Do you have an idea?
        </h3>
        <h3 className="text-title font-bold pb-1.5 px-16">Contact Me</h3>
      </div>
      <div className="flex justify-between px-16 pb-24 h-auto gap-32 md:flex-col md:gap-8">
        <div className="flex gap-32 md:flex-col md:gap-8">
          <div>
            <h3 className="text-sm text-neutral-400">Email</h3>
            <h3 className="text-subtitle font-bold">
              juanigarciadev@gmail.com
            </h3>
          </div>
          <div>
            <h3 className="text-sm text-neutral-400">Phone number</h3>
            <h3 className="text-subtitle font-bold">+(54) 9 261 597-1527</h3>
          </div>
        </div>
        <div className="flex gap-6 justify-bottom items-center">
          <BsGithub
            className="text-[30px]"
            title="Github"
            onClick={() => window.open("https://github.com/juanigarciadev")}
          />
          <BsLinkedin
            className="text-[30px]"
            title="LinkedIn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/juanigarciadev")
            }
          />
          <BsBehance
            className="text-[30px]"
            title="Behance"
            onClick={() =>
              window.open("https://www.behance.net/juanigarciadev")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
