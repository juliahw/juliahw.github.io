import React from 'react';
import { Link } from 'react-router';

class NextButton extends React.Component {

  render() {
    return (
      <Link to={this.props.to}>
        <div className="fixed-action-btn">
          <div className="btn-floating btn-large bg-blue">
            <i className="icon ion-arrow-right-c" />
          </div>
        </div>
      </Link>
    );
  }

}

export default NextButton;
