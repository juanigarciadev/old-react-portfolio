import React, { useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [navScroll, setNavScroll] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 80 ? setNavScroll(true) : setNavScroll(false);
  };

  window.addEventListener("scroll", changeBackground);

  return <Navbar navScroll={navScroll} />;
};

export default NavbarContainer;
