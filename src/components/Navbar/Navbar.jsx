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
          className="logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
      <div>
        <ul className="navLinksContainer">
          <li
            className="navLink"
            onClick={() => {
              window.scrollTo({ top: 750, behavior: "smooth" });
            }}
          >
            About me
          </li>
          <li className="navLink">Skills</li>
          <li
            className="navLink"
            onClick={() => {
              window.scrollTo({ top: 1250, behavior: "smooth" });
            }}
          >
            Projects
          </li>
          <li className="navLink">Contact</li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
