import React from "react";
import Certificates from "../Certificates/Certificates";
import biography from "../../maps/biography";
import Contact from "../Contact/Contact";

const Biography = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen pt-32 px-80 lg:px-12 pb-32">
        <div>
          <h3 className="text-subtitle font-bold pb-4">My biography</h3>
          {biography.map((item) => {
            return (
              <div className="pb-4">
                <h3 className="text-subtitle font-bold">{item.date}&nbsp;—</h3>
                <p>{item.bio}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h3 className="text-subtitle font-bold pb-8">My certification</h3>
          <Certificates />
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Biography;
