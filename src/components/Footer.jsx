import React from "react";
import { NavLink } from "react-router-dom";
import PieHand from "../images/pie-hand.png";

function Footer() {
  return (
    <footer>
      <div>
        <b>© 2021 Julia Wang</b>
      </div>
      <img src={PieHand} alt="Hand pointing at slice of pie" />
    </footer>
  );
}

export default Footer;
