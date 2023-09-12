import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-col items-center">
      <section className="bg-[#0f0f0f] flex justify-center items-center gap-10 h-16 w-2/4 mt-8 rounded-xl fixed shadow-[#0f0f0fa4] shadow-md z-20">
        <nav>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination_zfxqv7.png"
              alt="my logo"
              draggable="false"
              className="w-8 cursor-pointer select-none"
              onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </Link>
        </nav>
        <nav className="flex gap-8 md:hidden">
          <a>
            <Link
              to="/projects"
              onClick={() => scrollTo({ top: 0, behaviour: "smooth" })}
            >
              Projects
            </Link>
          </a>
          <a
            className="hover:text-neutral-400 duration-300 cursor-pointer"
            onClick={() => window.scrollTo({ top: 9000, behavior: "smooth" })}
          >
            Contact
          </a>
          <a
            className="flex items-center gap-1 hover:text-neutral-400 duration-300 cursor-pointer"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1Y21tjUsgCw26h-k5h-EQ0U6f2EIuIz6b/edit?usp=sharing&ouid=111247813899821454897&rtpof=true&sd=true"
              )
            }
          >
            My resume
            <RxExternalLink />
          </a>
        </nav>
      </section>
      <Outlet />
    </header>
  );
};

export default Navbar;
