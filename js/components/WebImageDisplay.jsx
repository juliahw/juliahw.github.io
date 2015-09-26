import React from 'react';

class WebImageDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  render() {

    const overlay = this.state.hover ? (
      <div>
        <a
          className="overlay btn-floating btn-large bg-grey"
          href={this.props.href}
          onMouseEnter={this.onMouseEnter}
          target="_blank"
        >
          <i className="ion-android-open" />
        </a>
      </div>
    ) : null;

    return (
      <div
        className="img-web-overlay"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {overlay}
        <img className={this.state.hover ? "fade-out" : ""} src={this.props.src} />
      </div>
    );
  }

}

WebImageDisplay.propTypes = {
  src: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired
};

export default WebImageDisplay;
