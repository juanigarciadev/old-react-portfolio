import React from "react";
import projects from "../../../projects";
import { RxExternalLink } from "react-icons/rx";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center px-16">
        <h3 className="text-sm w-auto text-neutral-400 pb-2">
          // Made with love {"<3"}
        </h3>
        <h3 className="text-title text-center font-bold pb-1.5">
          Stuff I’ve worked on
        </h3>
      </div>
      <section className="flex flex-col items-center pb-32 pt-8 px-16 gap-16 lg:gap-18 h-auto">
        {projects.map((project) => {
          return (
            <div
              className="flex flex-col w-2/4 gap-6 hover:scale-102 duration-300 lg:w-full lg:px-0 md:hover:scale-100"
              key={project.name}
            >
              <div>
                <img
                  src={project.img}
                  draggable="false"
                  className="rounded-xl w-full select-none"
                  alt=""
                />
              </div>
              <div className="flex flex-col w-full gap-6 justify-top">
                <h3 className="text-sm text-neutral-400">{project.tag}</h3>
                <div>
                  {project.logo != null ? (
                    <img
                      src={project.logo}
                      draggable="false"
                      className="w-64 select-none"
                      alt=""
                    />
                  ) : (
                    <h3 className="text-title font-bold pb-1.5">
                      {project.name}
                    </h3>
                  )}
                </div>
                {project.badge ? (
                  <h3 className="flex justify-center items-center text-md text-black bg-yellow-400 w-32 h-8 rounded-md select-none">
                    {project.badge}
                  </h3>
                ) : null}
                <h3 className="text-md">{project.information}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tools.map((tool) => {
                    return (
                      <h3 className="border-1 border-neutral-500 p-2 rounded-md hover:border-[#00ff00] duration-300 cursor-default">
                        {tool}
                      </h3>
                    );
                  })}
                </div>
                <div className="flex gap-6 justify-end lg:justify-center xs:flex-col xs:items-center">
                  <button
                    className="secondaryButton gap-1"
                    onClick={() => window.open(project.repository)}
                  >
                    View the code
                    <RxExternalLink />
                  </button>
                  {project.name != "My portfolio" ? (
                    <button
                      className="button gap-1"
                      onClick={() => window.open(project.url)}
                    >
                      Visit the site
                      <RxExternalLink />
                    </button>
                  ) : (
                    <button
                      disabled
                      className="disabledButton gap-1"
                      onClick={() => window.open(project.url)}
                    >
                      Already here
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
