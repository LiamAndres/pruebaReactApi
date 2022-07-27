// Componentes
import React from "react";

// Utils
import { IMG_LOGO_URL } from "../../constants";

// Styles
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={IMG_LOGO_URL} alt="PokeApi" className="navbar-image" />
    </nav>
  );
};

export default Navbar;