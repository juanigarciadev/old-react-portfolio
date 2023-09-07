import React from "react";
import Certificates from "../Certificates/Certificates";

const Biography = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center pt-32 ">
      <div className="flex flex-col justify-center items-center w-screen">
        <h3 className="text-subtitle font-bold pb-8">My certification</h3>
        <Certificates />
      </div>
    </section>
  );
};

export default Biography;
