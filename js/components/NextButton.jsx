import React from 'react';
import Fab from './Fab.jsx';

import actions from '../actions/PageActions';

class NextButton extends React.Component {

  render() {
    return <Fab iconClass="ion-ios-arrow-thin-right" onClick={this.props.onClick} />;
  }

}

NextButton.propTypes = {
  onClick: React.PropTypes.func
};

NextButton.defaultProps = {
  onClick: actions.nextPage
};

export default NextButton;
