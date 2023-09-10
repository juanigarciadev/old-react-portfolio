import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ navScroll }) => {
  return (
    <>
      <section
        className={navScroll ? "navbarContainer active" : "navbarContainer"}
      >
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination_zfxqv7.png"
              alt="my logo"
              draggable="false"
              className="logo cursor-pointer select-none"
              onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </Link>
        </div>
        <ul className="flex gap-8">
          <li>
            <Link
              to="/projects"
              onClick={() => scrollTo({ top: 0, behaviour: "smooth" })}
            >
              Projects
            </Link>
          </li>
          <li
            className="hover:text-neutral-400 duration-300 cursor-pointer"
            onClick={() => window.scrollTo({ top: 9000, behavior: "smooth" })}
          >
            Contact
          </li>
          <li
            className="flex items-center gap-1 hover:text-neutral-400 duration-300 cursor-pointer"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1Y21tjUsgCw26h-k5h-EQ0U6f2EIuIz6b/edit?usp=sharing&ouid=111247813899821454897&rtpof=true&sd=true"
              )
            }
          >
            My resume
            <RxExternalLink />
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
};

export default Navbar;
