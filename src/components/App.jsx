import React from "react";
import Contact from "./Contact";

function App() {
  return (
    <div className="container">
      <Contact />

      <div className="copyright">
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path
              id="copyrightPath"
              fill="none"
              stroke="white"
              transform="translate(0, 35) scale(2)"
              d="M1 8C9.33333 -1.33333 17.6667 -1.33333 26 8C34.3333 17.3333 42.6667 17.3333 51 8C59.3333 -1.33333 67.6667 -1.33333 76 8C84.3333 17.3333 92.6667 17.3333 101 8"
            />
          </defs>
          <text>
            <textPath
              href="#copyrightPath"
              startOffset="50%"
              textAnchor="middle"
            >
              <tspan dy="4">©2022 JULIA WANG</tspan>
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default App;
