import React from 'react';
import FabMenuItem from './FabMenuItem.jsx';

class FabMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };

    this.toggleFab = this.toggleFab.bind(this);
  }

  toggleFab() {
    this.setState({
      open: !this.state.open
    }, () => {
      const menuItems = document.getElementsByClassName('fab-menu')[0];
      const transitionName = this.state.open ? 'transition.fadeIn' : 'transition.fadeOut';
      Velocity(menuItems, transitionName, 500);
    });
  }

  render() {
    let iconClass = 'icon ';
    iconClass += this.state.open ? 'ion-android-close' : this.props.menu.iconClass;

    return (
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large bg-blue" onClick={this.toggleFab}>
          <i className={iconClass} />
        </a>
        <ul className="fab-menu">
          {this.props.menu.menuItems.map((item, index) => {
            return (
              <FabMenuItem
                key={item.iconClass}
                toggleFab={this.toggleFab}
                visible={this.state.open}
                iconClass={item.iconClass}
                onClick={item.onClick}
                onMouseEnter={item.onMouseEnter}
                onMouseLeave={item.onMouseLeave}
              />
            );
          })}
        </ul>
      </div>
    );
  }

}

FabMenu.propTypes = {
  menu: React.PropTypes.object
};

export default FabMenu;
