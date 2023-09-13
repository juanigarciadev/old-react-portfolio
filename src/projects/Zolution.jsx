import React, { useEffect } from "react";
import { RxExternalLink, RxCube } from "react-icons/rx";
import { AiOutlineClockCircle } from "react-icons/ai";
import Contact from "../components/Contact/Contact";
import ReturnButtonContainer from "../components/ReturnButton/ReturnButtonContainer";

const Zolution = () => {
  useEffect(() => {
    document.title = "zolution - juanigarciadev's portfolio";
    scroll({ top: 0 });
  }, []);
  return (
    <>
      <section className="flex flex-col w-screen py-64 px-16 gap-4">
        <ReturnButtonContainer />
        <h1 className="text-title font-bold pb-2">zolution</h1>
        <h3 className="text-subtitle text-neutral-400">
          E-commerce focused on the sale of pre-assembled computers, components
          and peripherals.
        </h3>
        <div className="flex items-center gap-8 lg:flex-col lg:items-start">
          <div className="flex gap-8 text-neutral-400">
            <h3 className="flex items-center gap-2">
              <RxCube />
              HTML, CSS, Bootstrap
            </h3>
            <h3 className="flex items-center gap-2">
              <AiOutlineClockCircle />
              Year 2022
            </h3>
          </div>
          <div className="flex gap-2 md:flex-col lg:w-full">
            <a
              className="secondaryButton gap-1 lg:w-full"
              href="https://github.com/juanigarciadev/TODOTECH-project"
              target="_blank"
            >
              View code
              <RxExternalLink />
            </a>
            <a
              className="button gap-1 lg:w-full"
              href="https://todotech.netlify.app/"
              target="_blank"
            >
              Live site
              <RxExternalLink />
            </a>
          </div>
        </div>
        <div className="bg-neutral-900 rounded-md h-full px-32 pt-32 bg-80% bg-no-repeat bg-[center_bottom] hover:bg-85% duration-300 hover:px-28 hover:pt-28 lg:px-8 lg:pt-8 lg:hover:px-6 lg:hover:pt-6 md:px-4 md:pt-4 md:hover:none md:hover:none">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1693254749/zolution_dhcyxw.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 my-32 pl-[25%] lg:pl-0">
          <h3 className="text-subtitle font-bold">Explanation</h3>
          <p className="text-neutral-400 w-8/12 lg:w-full">
            Own business in creation. It is a project that seeks to unite a team
            of designers and developers from around the world through which
            competent web pages and applications are created that can enter the
            market quickly, professionally and with a competitive price
            accompanying the customer from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 md:flex md:flex-col">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1693254749/zolution_dhcyxw.png"
            className="rounded-md"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694627072/zolution-2_ftx7cl.png"
            className="rounded-md"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694627072/zolution-3_cagmc6.png"
            className="rounded-md"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694627072/zolution-4_ksuh6d.png"
            className="rounded-md"
            alt=""
          />
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Zolution;
