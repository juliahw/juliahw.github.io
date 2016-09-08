import React from 'react';
import { Link } from 'react-router';

class Design extends React.Component {

  render() {
    return (
      <div className="fade-in va-middle">
        <div className="row space-2">
          <div className="col-xs-20 col-xs-offset-2 col-sm-18 col-sm-offset-3 col-md-8 col-md-offset-8">
            <h2 className="space-2 text-center text-uppercase text-blue text-spaced">
              Design
            </h2>

            <p className="text-justify">
              I've loved traditional art since I was a wee babe, but I find myself picking up a pencil and paper less and less nowadays. Once I got to know the speed and fluidity of digital design, I could never go back.
            </p>

            <p className="text-justify">
              My go-to tools are my trusty Wacom tablet and <span className="text-blue">Adobe Photoshop.</span> If I’m feeling funky, I’ll work with <span className="text-blue">Illustrator</span> and <span className="text-blue">InDesign</span> as well.
            </p>
          </div>
        </div>

        <div className="row text-center">
          <Link className="btn bg-blue" to="/design/1">
            <h4 className="text-uppercase">Explore</h4>
          </Link>
        </div>
      </div>
    );
  }

}

export default Design;
