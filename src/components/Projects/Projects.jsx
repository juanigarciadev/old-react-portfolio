import React from "react";
import projects from "../../../projects";

const Projects = () => {
  return (
    <section className="flex flex-col pb-32 pt-16 gap-32 lg:gap-16 h-auto">
      {projects.map((project) => {
        return (
          <div
            className="grid grid-cols-2 justify-center items-top px-24 gap-6 hover:scale-105 duration-300 lg:flex lg:flex-col lg:px-20 md:hover:scale-100"
            key={project.name}
          >
            <div>
              <img src={project.img} className="rounded-xl w-full" alt="" />
            </div>
            <div className="flex flex-col w-full gap-6 justify-top">
              <div>
                <img src={project.logo} className="w-64" alt="" />
              </div>
              {project.badge ? (
                <h3 className="flex justify-center items-center text-md text-black bg-yellow-400 w-32 h-8 rounded-md">
                  {project.badge}
                </h3>
              ) : null}
              <h3>{project.information}</h3>
              <ul className="flex gap-4 flex-wrap">
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
              </ul>
              <div className="flex gap-6 justify-end lg:justify-center">
                <button
                  className="secondaryButton"
                  onClick={() => window.open(project.repository)}
                >
                  View repository
                </button>
                <button
                  className="button"
                  onClick={() => window.open(project.url)}
                >
                  Visit website
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
