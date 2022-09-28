import React from "react";
import Hand from "../images/hand.svg";

function Contact() {
  return (
    <div
      id="contact"
      onClick={() => {
        window.open("https://www.linkedin.com/in/juliahw", "_blank").focus();
      }}
    >
      <div id="contact-circle">
        <svg width="100%" height="100%">
          <title>Contact</title>
          <defs>
            <path
              stroke="white"
              fill="none"
              id="contact-path"
              d="M10,60a50,50 0 1,0 100,0a50,50 0 1,0 -100,0"
            />
          </defs>
          <text>
            <textPath href="#contact-path">Say hi! Say hi!</textPath>
          </text>
        </svg>
      </div>

      <div id="contact-hand">
        <img src={Hand} alt="An outline of a hand" />
      </div>
    </div>
  );
}

export default Contact;
