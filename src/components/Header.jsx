import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <b>Julia Wang</b>
      </div>
      <nav>
        <NavLink exact to="/">
          About
        </NavLink>
        <NavLink exact to="/projects">
          Projects
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
