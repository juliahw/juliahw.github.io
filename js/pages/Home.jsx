import React from 'react';
import FabMenu from '../components/FabMenu.jsx';

import store from '../stores/PageStore';
import connectToStores from 'alt/utils/connectToStores';

import {homeMenu} from '../menuSets';

class Home extends React.Component {

  static getStores() {
    return [store];
  }

  static getPropsFromStores() {
    return store.getState();
  }

  render() {
    return (
      <div className="fade-in">
        <h1 className="text-center text-uppercase text-magenta text-spaced">
          Julia Wang
        </h1>

        <div className="row island">
	        <div className="col-sm-20 col-sm-offset-2 col-md-12 col-md-offset-6">
            <div className="space-3">
              <img className="hover2" src="img/cloud1.png" />
              <img className="hover3" src="img/cloud2.png" />
              <img className="hover" src="img/island.png" />
            </div>
            <div className="text-center text-spaced text-blue">
              <h4>
                {this.props.fabHoverState ? (
                  <em className="fade-in">{this.props.fabHoverState}</em>
                  ) : <span>&nbsp;</span>
                }
              </h4>
            </div>
          </div>
        </div>

        <FabMenu menu={homeMenu} />
      </div>
    );
  }

}

export default connectToStores(Home);
