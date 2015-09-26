import React from 'react';

class FoodImageDisplay extends React.Component {

  render() {
    return (
      <div className="space-2">
        <img className="space-1" src={this.props.src} />
        <h6 className="text-magenta text-uppercase">
          <b>{this.props.title}</b>
        </h6>
        <div className="text-blue">{this.props.ingredients}</div>
      </div>
    );
  }

}

FoodImageDisplay.propTypes = {
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  ingredients: React.PropTypes.object.isRequired
};

export default FoodImageDisplay;
