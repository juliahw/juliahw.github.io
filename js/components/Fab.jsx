import React from 'react';

class Fab extends React.Component {

  render() {
    return (
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large bg-blue" onClick={this.props.onClick}>
          <i className={`icon ${this.props.iconClass}`} />
        </a>
      </div>
    );
  }

}

Fab.propTypes = {
  iconClass: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Fab;
