import React from "react";
import "./Navbar.css";
import { IMG_LOGO_URL } from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <img src={IMG_LOGO_URL} alt="PokeApi" className="navbar-image" />
    </nav>
  );
};

export default Navbar;