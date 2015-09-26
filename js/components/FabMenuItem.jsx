import React from 'react';

class FabMenuItem extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick();

    // close the menu
    this.props.toggleFab();
  }

  render() {
    return this.props.visible ? (
      <li>
        <a
          className='btn-floating bg-peach'
          onClick={this.onClick}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
        >
          <i className={"icon " + this.props.iconClass} />
        </a>
      </li>
    ) : null;
  }

}

FabMenuItem.propTypes = {
  toggleFab: React.PropTypes.func.isRequired, // callback to close parent FabMenu
  visible: React.PropTypes.bool.isRequired,
  iconClass: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  onMouseEnter: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func
};

export default FabMenuItem;
