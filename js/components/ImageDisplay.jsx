import React from 'react';

import actions from '../actions/PageActions';

class ImageDisplay extends React.Component {

  render() {
    return (
      <div className="row image-display-container">
        <div className="col-xs-18 col-xs-offset-3 col-md-7 col-md-offset-6">
          <img src={this.props.src} />
        </div>

        <div className="col-xs-18 col-xs-offset-3 col-md-4 col-md-offset-1">
          <br />
          <p className="no-indent text-blue">{this.props.title}</p>

          <br />
          <p className="no-indent">{this.props.description}</p>

          <br />
          <p className="no-indent text-blue">
            {this.props.dimensions}
            {this.props.dimensions ? <br /> : null}
            {this.props.software}
          </p>
        </div>
      </div>
    );
  }

}

ImageDisplay.propTypes = {
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  dimensions: React.PropTypes.string,
  software: React.PropTypes.string
};

export default ImageDisplay;
