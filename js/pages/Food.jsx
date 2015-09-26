import React from 'react';

import actions from '../actions/PageActions';

class Food extends React.Component {

  render() {
    return (
      <div className="fade-in va-middle">
        <div className="row space-2">
          <div className="col-xs-20 col-xs-offset-2 col-sm-18 col-sm-offset-3 col-md-8 col-md-offset-8">
            <h2 className="space-2 text-center text-uppercase text-blue text-spaced">
              Food
            </h2>

            <p className="text-justify">
              There’s nothing I’d rather do in the morning than watch breakfast bake in the oven. Over the years, baking and cooking have become my ultimate therapy.
            </p>

            <p className="text-justify">
              Other than <span className="text-blue">pie</span>, the exalted dessert, I get particularly excited about <span className="text-blue">mousse</span>, classic <span className="text-blue"> French bread</span>, and <span className="text-blue">Japanese donburi</span>.
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

export default Food;
