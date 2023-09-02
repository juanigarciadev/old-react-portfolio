import React from "react";

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
          className="logo select-none"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
      <div>
        <ul className="navLinksContainer select-none">
          <li
            className="text-neutral-400 text-md hover:text-inherit duration-300"
            onClick={() => {
              window.scrollTo({ top: 750, behavior: "smooth" });
            }}
          >
            About me
          </li>
          <li className="text-neutral-400 text-md hover:text-[#ecedee] duration-300">
            Skills
          </li>
          <li
            className="text-neutral-400 text-md hover:text-[#ecedee] duration-300"
            onClick={() => {
              window.scrollTo({ top: 1250, behavior: "smooth" });
            }}
          >
            Projects
          </li>
          <li
            className="text-neutral-400 text-md hover:text-[#ecedee] duration-300"
            onClick={() => {
              window.scrollTo({ top: 8000, behavior: "smooth" });
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
