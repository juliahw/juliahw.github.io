import React from 'react';
import { Link } from 'react-router';

class Index extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Link to="/">
            <div className="bounce col-md-offset-1 bg-blue logo-block text-center">
              <i className="logo text-white ion-ios-home" />
            </div>
          </Link>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default Index;
