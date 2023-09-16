import React from "react";
import Certificates from "../Certificates/Certificates";
import biography from "../../maps/biography";
import Contact from "../Contact/Contact";

const Biography = () => {
  return (
    <>
      <article className="flex flex-col min-h-screen pt-32 px-80 lg:px-12 pb-32">
        <section>
          <h1 className="text-subtitle font-bold pb-4">My biography</h1>
          {biography.map((item) => {
            return (
              <section className="pb-4">
                <h3 className="text-subtitle font-bold">{item.date}&nbsp;—</h3>
                <p>{item.bio}</p>
              </section>
            );
          })}
        </section>
        <section className="flex flex-col">
          <h2 className="text-subtitle font-bold pb-8">My certification</h2>
          <Certificates />
        </section>
      </article>
      <Contact />
    </>
  );
};

export default Biography;
