import React from 'react';
import { Link } from 'react-router';

function ExternalLinks(props) {
  return (
    <div className="row" id="external-links">
      <a href="img/juliawangcv.pdf" target="_blank">
        <i className="ion-clipboard" />
      </a>
      <a href="mailto:juliahw@princeton.edu" target="_top">
        <i className="ion-paper-airplane" />
      </a>
      <a href="//github.com/juliahw" target="_blank">
        <i className="ion-social-github" />
      </a>
      <a href="//linkedin.com/in/juliahw" target="_blank">
        <i
          className="ion-social-linkedin-outline"
          style={{
            fontSize:'2.8rem',
            position:'relative',
            top:'2px'
          }}
        />
      </a>
    </div>
  );
}

function NavLinks(props) {
  return (
    <div className="row space-2 text-blue text-center">
      <Link to="/about">about</Link>
      <span>&nbsp; &middot; &nbsp;</span>
      <Link to="/code">projects</Link>
      <span>&nbsp; &middot; &nbsp;</span>
      <Link to="/design">graphic design</Link>
    </div>
  );
}

function Island(props) {
  return (
    <div className="row" id="island">
      <div className="col-sm-18 col-sm-offset-3 col-md-12 col-md-offset-6">
        <div className="space-3">
          <img className="hover2" src="img/cloud1.png" />
          <img className="hover3" src="img/cloud2.png" />
          <img className="hover" src="img/island.png" />
        </div>
      </div>
    </div>
  );
}

class Home extends React.Component {
  render() {
    return (
      <div className="fade-in">
        <ExternalLinks />

        <h1 className="row space-1">
          Julia Wang.
        </h1>

        <NavLinks />
        <Island />
      </div>
    );
  }
}

export default Home;
