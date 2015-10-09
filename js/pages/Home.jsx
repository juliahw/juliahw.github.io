import React from 'react';

import actions from '../actions/PageActions';

class Home extends React.Component {

  render() {
    return (
      <div className="fade-in" id="home-wrapper">
        <div className="external-links row text-center">
          <a href="//github.com/juliahw" target="_blank">
            <i className="ion-social-octocat" />
          </a>
          <a href="img/juliawangcv.pdf" target="_blank">
            <i className="ion-paper-airplane" />
          </a>
          <a href="//linkedin.com/in/juliahw" target="_blank">
            <i className="ion-social-linkedin" />
          </a>
          <a href="mailto:juliahw@princeton.edu" target="_top">
            <i className="ion-at" />
          </a>
        </div>

        <h1 className="row space-1 text-center text-uppercase text-magenta text-spaced">
          Julia Wang
        </h1>

        <div className="nav-links row space-2 text-center text-spaced">
          <a
            className="visible-xs-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block"
            onClick={() => {actions.setPageSet('about')}}
          >
            <em>about</em>
          </a>
          <span className="hidden-xs">&nbsp;&middot;&nbsp;</span>
          <a onClick={() => {actions.setPageSet('design')}}><em>design</em></a>
          <span>&nbsp;&middot;&nbsp;</span>
          <a onClick={() => {actions.setPageSet('code')}}><em>code</em></a>
          <span>&nbsp;&middot;&nbsp;</span>
          <a onClick={() => {actions.setPageSet('food')}}><em>food</em></a>
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
