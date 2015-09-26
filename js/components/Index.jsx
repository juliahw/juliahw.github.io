import React from 'react';
import NumberNav from './NumberNav.jsx';

import connectToStores from 'alt/utils/connectToStores';
import actions from '../actions/PageActions';
import store from '../stores/PageStore';

import {PAGE_SETS} from '../pageSets.jsx';

class Index extends React.Component {

  static getStores() {
    return [store];
  }

  static getPropsFromStores() {
    return store.getState();
  }

  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    if (this.props.pageSet === 'home' && this.props.pageIndex === 0) return;
    actions.setPageSet('home');
  }

  render() {
    const pageSet = PAGE_SETS[this.props.pageSet];
    const page = pageSet[this.props.pageIndex];

    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-offset-1 bg-magenta logo-block text-center"
            onClick={this.goHome}
          >
            <i className="icon ion-ios-home logo text-white" />
          </div>
        </div>

        <div className="hidden-xs">
          <NumberNav pages={pageSet} />
        </div>

        {page.element}
      </div>
    );
  }
}

export default connectToStores(Index);
