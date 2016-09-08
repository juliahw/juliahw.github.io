import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

  render() {
    return (
      <div className="fade-in" id="home-wrapper">
        <div className="external-links row text-center">
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
            <i className="ion-social-linkedin-outline" />
          </a>
        </div>

        <h1 className="row space-1 text-center text-uppercase text-magenta text-spaced">
          Julia Wang
        </h1>

        <div className="nav-links row space-2 text-center text-spaced">
          <Link to="/about">
            <em>about</em>
          </Link>
          <span>&nbsp;&middot;&nbsp;</span>
          <Link to="/design">
            <em>design</em>
          </Link>
          <span>&nbsp;&middot;&nbsp;</span>
          <Link to="/code">
            <em>code</em>
          </Link>
        </div>

        <div className="island row">
	        <div className="col-sm-18 col-sm-offset-3 col-md-12 col-md-offset-6">
            <div className="space-3">
              <img className="hover2" src="img/cloud1.png" />
              <img className="hover3" src="img/cloud2.png" />
              <img className="hover" src="img/island.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
