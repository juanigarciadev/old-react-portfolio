import React from "react";
import projects from "../../../projects";

const Projects = () => {
  return (
    <section className="flex flex-col pb-32 gap-28 lg:gap-16 h-auto">
      {projects.map((project) => {
        return (
          <div
            className="grid grid-cols-2 justify-center items-top px-24 py-8 gap-6 lg:flex lg:flex-col lg:px-20 hover:scale-105 duration-300"
            key={project.name}
          >
            <div>
              <img src={project.img} className="rounded-xl w-full" alt="" />
            </div>
            <div className="flex flex-col w-full gap-6 justify-top">
              <div>
                <img src={project.logo} className="w-64" alt="" />
              </div>
              <h3>{project.information}</h3>
              <ul className="flex gap-4 flex-wrap">
                {project.tools.map((tools) => {
                  return (
                    <li key={tools}>
                      <img src={tools} className="w-16" alt="" />
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
