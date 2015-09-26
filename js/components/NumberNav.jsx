import React from 'react';
import NumberNavItem from './NumberNavItem.jsx';

class NumberNav extends React.Component {

  render() {
    return (
      <ul className="number-nav fade-in">
        {this.props.pages.map((page, index) => {
          return <NumberNavItem key={index} index={index} />;
        })}
      </ul>
    );
  }

}

NumberNav.propTypes = {
  pages: React.PropTypes.array.isRequired
};

export default NumberNav;
