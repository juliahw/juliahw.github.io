import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import Index from './components/Index.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

import Design from './pages/Design.jsx';
import DesignPt1 from './pages/DesignPt1.jsx';
import DesignPt2 from './pages/DesignPt2.jsx';

import Code from './pages/Code.jsx';
import CodePt1 from './pages/CodePt1.jsx';
import CodePt2 from './pages/CodePt2.jsx';
import CodePt3 from './pages/CodePt3.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="design" component={Design} />
      <Route path="/design/1" component={DesignPt1} />
      <Route path="/design/2" component={DesignPt2} />
      <Route path="code" component={Code} />
      <Route path="/code/1" component={CodePt1} />
      <Route path="/code/2" component={CodePt2} />
      <Route path="/code/3" component={CodePt3} />
    </Route>
  </Router>
), document.getElementById('react-root'));
