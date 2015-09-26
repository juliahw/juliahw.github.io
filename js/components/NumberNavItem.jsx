import React from 'react';

import connectToStores from 'alt/utils/connectToStores';
import actions from '../actions/PageActions';
import store from '../stores/PageStore';

import {PAGE_SETS} from '../pageSets.jsx';

class NumberNavItem extends React.Component {

  static getStores() {
    return [store];
  }

  static getPropsFromStores() {
    return store.getState();
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e) e.preventDefault();
    actions.setPageIndex(this.props.index);
  }

  render() {
    const linkClass = this.props.pageIndex === this.props.index ? 'text-pink' : 'text-peach';
    return (
      <li>
        <a className={linkClass} onClick={this.handleClick}>{this.props.index + 1}</a>
      </li>
    );
  }

}

export default connectToStores(NumberNavItem);
