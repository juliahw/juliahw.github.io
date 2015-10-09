import React from 'react';
import NumberNav from './NumberNav.jsx';

import cx from 'classnames';

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

  render() {
    const pageSet = PAGE_SETS[this.props.pageSet];
    const page = pageSet.pages[this.props.pageIndex];

    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-offset-1 bg-magenta logo-block text-center"
            onClick={() => actions.setPageSet('home')}
          >
            <i className={cx('logo', 'text-white', 'ion-ios-home')} />
          </div>
        </div>

        {page}
      </div>
    );
  }
}

export default connectToStores(Index);
