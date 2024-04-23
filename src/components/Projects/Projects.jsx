import React from "react";
import projects from "../../maps/projects";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <section className="flex flex-col items-center px-16 pt-32">
        <h3 className="text-sm w-auto text-neutral-400 pb-2">
          // Made with love {"<3"}
        </h3>
        <h3 className="text-title text-center font-bold pb-1.5">
          Stuff I’ve worked on
        </h3>
      </section>
      <section className="grid grid-cols-2 w-full items-center pb-32 pt-8 px-96 gap-8 lg:gap-18 lg:flex lg:flex-col lg:px-16">
        {projects.map((project) => {
          const style = {
            backgroundImage: `url(${project.img})`,
          };
          return (
            <article
              className="w-full relative gap-6 hover:scale-102 duration-300 group md:hover:scale-100"
              key={project.name}
            >
              <section
                className="rounded-2xl bg-cover w-full h-[300px] duration-[1000ms] hover:bg-bottom"
                style={style}
              ></section>
              <section className="flex flex-col items-end gap-2 absolute bottom-4 right-4">
                <Link to={project.url} target="_blank" className="flex items-center justify-center w-8 h-8 gap-[3px] bg-white shadow-md border rounded-full group-hover:w-24 group-hover:justify-center duration-300 cursor-pointer">
                  <span className="w-fit h-4 pl-1 absolute opacity-0 text-sm text-black overflow-hidden group-hover:relative group-hover:opacity-100 group-hover:duration-400">Visit site</span>
                  <svg width="0.8em" height="0.8em" viewBox="0 0 24 24"><path fill="black" d="m13 3l3.293 3.293l-7 7l1.414 1.414l7-7L21 11V3z"/><path fill="black" d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2z"/></svg>
                </Link>
                <Link to={project.moreInfo} className="flex items-center justify-center w-8 h-8 bg-[#00ff00] shadow-md border border-[#56db3e] rounded-full group-hover:w-36 group-hover:justify-center duration-300 cursor-pointer">
                  <span className="w-fit h-4 pl-1 absolute opacity-0 text-sm text-black overflow-hidden group-hover:relative group-hover:opacity-100 group-hover:duration-400">More information</span>
                  <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"/></svg>
                </Link>
              </section>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
