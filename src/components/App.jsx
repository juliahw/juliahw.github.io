import React, { Component } from "react";

import About from "../posts/About";

const App = (_) => (
  <div>
    <div className="header-container">
      <div className="header">
        <div>▧</div>
        <div>
          <a href="">About</a>
        </div>
      </div>
    </div>
    <div className="content">
      <About />
    </div>
  </div>
);

export default App;
