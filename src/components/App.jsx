import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import Projects from "../pages/Projects";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <main>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
            </Switch>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
