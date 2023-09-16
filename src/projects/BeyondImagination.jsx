import React, { useEffect } from "react";
import { RxExternalLink, RxCube } from "react-icons/rx";
import { AiOutlineClockCircle } from "react-icons/ai";
import Contact from "../components/Contact/Contact";
import ReturnButtonContainer from "../components/ReturnButton/ReturnButtonContainer";

const BeyondImagination = () => {
  useEffect(() => {
    document.title = "BEYOND IMAGINATION - juanigarciadev's portfolio";
    scroll({ top: 0 });
  }, []);
  return (
    <>
      <div className="flex flex-col w-screen py-40 px-16 gap-4">
        <ReturnButtonContainer />
        <h1 className="text-title font-bold pb-2">BEYOND IMAGINATION</h1>
        <h3 className="text-subtitle text-neutral-400 w-2/4 lg:w-full">
          E-commerce of an online learning academy related to programming.
          Selected courses can be purchased and the stock is updated in real
          time upon purchase, subtracting the product from a Firebase database.
        </h3>
        <section className="flex items-center gap-8 lg:flex-col lg:items-start lg:gap-4">
          <section className="flex gap-8 text-neutral-400">
            <h3 className="flex items-center gap-2 md:flex-col md:items-start">
              <RxCube />
              ReactJS, Firebase, SASS
            </h3>
            <h3 className="flex items-center gap-2 md:flex-col md:items-start">
              <AiOutlineClockCircle />
              Year 2023
            </h3>
          </section>
          <section className="flex gap-2 md:flex-col lg:w-full">
            <a
              className="secondaryButton gap-1 lg:w-full"
              href="https://github.com/juanigarciadev/beyond-imagination"
              target="_blank"
            >
              View code
              <RxExternalLink />
            </a>
            <a
              className="button gap-1 lg:w-full"
              href="https://beyond-imagination.vercel.app/"
              target="_blank"
            >
              Live site
              <RxExternalLink />
            </a>
          </section>
        </section>
        <section className="bg-neutral-900 rounded-md h-full px-32 pt-32 bg-80% bg-no-repeat bg-[center_bottom] hover:bg-85% duration-300 hover:px-28 hover:pt-28 lg:px-8 lg:pt-8 lg:hover:px-6 lg:hover:pt-6 md:px-4 md:pt-4 md:hover:none md:hover:none">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1693254750/beyond-imagination_p25riu.png"
            alt=""
          />
        </section>
        <section className="flex flex-col gap-2 my-32 pl-[25%] lg:pl-0 md:my-20">
          <h3 className="text-subtitle font-bold">Explanation</h3>
          <p className="text-neutral-400 w-8/12 lg:w-full">
            My first application applying ReactJS as a framework. It is an
            online learning academy based on an e-commerce hosted on Firebase,
            with an interactive catalog and purchase number. Soon the platform
            of the academy will be added in which you can register a new account
            or log in to an already created one, view the courses purchased and
            their contents.
          </p>
        </section>
        <section className="grid grid-cols-2 grid-rows-2 gap-4 md:flex md:flex-col">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694569896/beyond-imagination-2_rpy0nw.png"
            className="rounded-md"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694569896/beyond-imagination-3_i4nbd1.png"
            className="rounded-md"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694569895/beyond-imagination-4_g82lus.png"
            className="rounded-md"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694569896/beyond-imagination-5_vxlsdw.png"
            className="rounded-md"
            alt=""
          />
        </section>
      </div>
      <Contact />
    </>
  );
};

export default BeyondImagination;
