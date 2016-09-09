import React from 'react';
import { Link } from 'react-router';
import Button from '../components/Button.jsx';

class Design extends React.Component {
  render() {
    return (
      <div className="fade-in va-middle">
        <div className="row space-2">
          <div className="col-xs-20 col-xs-offset-2 col-sm-18 col-sm-offset-3 col-md-8 col-md-offset-8">
            <h2 className="space-2">
              Graphic Design.
            </h2>

            <p className="text-justify">
              Growing up, my favorite activity was to draw spaceships in the shape of wedding cakes,
              inhabited by all manner of strange creatures. That love for the whimsical has stayed
              with me. Today, it's a defining aesthetic of my designs.
            </p>
          </div>
        </div>

        <Button text="explore" to="/design/1" />
      </div>
    );
  }

}

export default Design;
