import React from 'react';
import Button from '../components/Button.jsx';

class Code extends React.Component {
  render() {
    return (
      <div className="fade-in va-middle">
        <div className="row space-2">
          <div className="col-xs-20 col-xs-offset-2 col-sm-18 col-sm-offset-3 col-md-8 col-md-offset-8">
            <h2 className="space-2">
              Projects.
            </h2>

            <p className="text-justify">
              I'm first and foremost a web developer, with a special love for UI design. I find
              animation, illustration, and interaction design particularly exciting. I'm especially
              a fan of React.
            </p>
          </div>
        </div>

        <Button text="explore" to="/code/1" />
      </div>
    );
  }

}

export default Code;
