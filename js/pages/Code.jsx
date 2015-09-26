import React from 'react';

import actions from '../actions/PageActions';

class Code extends React.Component {

  render() {
    return (
      <div className="fade-in va-middle">
        <div className="row space-2">
          <div className="col-xs-20 col-xs-offset-2 col-sm-18 col-sm-offset-3 col-md-8 col-md-offset-8">
            <h2 className="space-2 text-center text-uppercase text-blue text-spaced">
              Code
            </h2>

            <p className="text-justify">
              I’ve done full-stack work, but in the end frontend development is my biggest passion. Who doesn’t like some good JavaScript wrangling?
            </p>

            <p className="text-justify">
              I find <span className="text-blue">UI animation</span> and <span className="text-blue">interaction design</span> particularly exciting. As of late, I’ve also fallen in love with <span className="text-blue">React</span> and <span className="text-blue">Flux</span> architecture.
            </p>
          </div>
        </div>

        <div className="row text-center">
          <a className="btn bg-blue" onClick={actions.nextPage}>
            <h4 className="text-uppercase">Explore</h4>
          </a>
        </div>
      </div>
    );
  }

}

export default Code;
