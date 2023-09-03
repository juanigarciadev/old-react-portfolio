import React from "react";
import { RxExternalLink } from "react-icons/rx";

const Navbar = ({ navScroll }) => {
  return (
    <section
      className={navScroll ? "navbarContainer active" : "navbarContainer"}
    >
      <div>
        <img
          src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination_zfxqv7.png"
          alt="my logo"
          draggable="false"
          className="logo cursor-pointer select-none"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
      <div className="flex gap-8">
        <h3
          className="hover:text-neutral-400 duration-300 cursor-pointer"
          onClick={() => window.scrollTo({ top: 9000, behavior: "smooth" })}
        >
          Contact
        </h3>
        <h3
          className="flex items-center gap-1 hover:text-neutral-400 duration-300 cursor-pointer"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1Y21tjUsgCw26h-k5h-EQ0U6f2EIuIz6b/edit?usp=sharing&ouid=111247813899821454897&rtpof=true&sd=true"
            )
          }
        >
          My resume
          <RxExternalLink />
        </h3>
      </div>
    </section>
  );
};

export default Navbar;
