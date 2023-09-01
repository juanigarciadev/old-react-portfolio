import React from "react";
import projects from "../../../projects";
import { RxExternalLink } from "react-icons/rx";

const Projects = () => {
  return (
    <section className="grid grid-cols-2 pb-32 pt-16 px-16 gap-16 lg:flex lg:flex-col lg:gap-18 h-auto">
      {projects.map((project) => {
        return (
          <div
            className="flex flex-col px-8 gap-6 hover:scale-105 duration-300 lg:flex lg:flex-col lg:px-20 md:hover:scale-100"
            key={project.name}
          >
            <div>
              <img src={project.img} className="rounded-xl w-full" alt="" />
            </div>
            <div className="flex flex-col w-full gap-6 justify-top">
              <h3 className="text-sm text-neutral-400">{project.tag}</h3>
              <div>
                {project.logo != null ? (
                  <img src={project.logo} className="w-64" alt="" />
                ) : (
                  <h3 className="text-title font-bold pb-1.5">
                    {project.name}
                  </h3>
                )}
              </div>
              {project.badge ? (
                <h3 className="flex justify-center items-center text-md text-black bg-yellow-400 w-32 h-8 rounded-md">
                  {project.badge}
                </h3>
              ) : null}
              <h3 className="text-md">{project.information}</h3>
              <h3 className="text-md">
                <span className="font-bold">Built with:</span> {project.tools}
              </h3>
              {/* <ul className="flex gap-4 flex-wrap">
                {project.tools.map((tools) => {
                  return (
                    <li key={tools}>
                      <img
                        src={tools[0]}
                        title={tools[1]}
                        className="w-16"
                        alt=""
                      />
                    </li>
                  );
                })}
              </ul> */}
              <div className="flex gap-6 justify-end lg:justify-center">
                <button
                  className="secondaryButton gap-1"
                  onClick={() => window.open(project.repository)}
                >
                  View the code
                  <RxExternalLink />
                </button>
                <button
                  className="button gap-1"
                  onClick={() => window.open(project.url)}
                >
                  Visit the app
                  <RxExternalLink />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
