import React from "react";
import projects from "../../../projects";

const Projects = () => {
  return (
    <section className="flex flex-col pb-32 gap-36 lg:gap-16">
      {projects.map((project) => {
        return (
          <div
            className="grid grid-cols-2 justify-center items-center px-24 gap-6 lg:grid-cols-1 lg:grid-rows-2 lg:px-20"
            key={project.name}
          >
            <div>
              <img src={project.img} className="rounded-xl w-full" alt="" />
            </div>
            <div className="flex flex-col gap-6 justify-top">
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
              <div className="flex gap-6 justify-center">
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
