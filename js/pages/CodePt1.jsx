import React from 'react';
import Button from '../components/Button.jsx';
import WebImageDisplay from '../components/WebImageDisplay.jsx';

class CodePt1 extends React.Component {
  render() {
    return (
      <div className="fade-in">
        <h2 className="row space-2">
          Julia’s Pies.
        </h2>

        <div className="row">
          <div className="col-xs-18 col-xs-offset-3 col-md-12 col-md-offset-6">
            <p>
              I was still learning HTML, CSS, and JS when I made this website for my pie catering business. It was a great starter project: just a static page with some basic animations. My first step was to create some branding around which I could base the design of the website:
            </p>

            <div className="row space-1">
              <div className="col-xs-12 col-xs-offset-6">
                <img src="img/projects/juliaspieslogo.png"/>
              </div>
            </div>

            <p>
              Then I started coding. My first attempt resulted in this emabarrassingly monotonous but generally functional page:
            </p>

            <img className="img-web" src="img/projects/juliaspiesold.png" />

            <p>
              Thankfully I overhauled it pretty quickly. As I got to know JavaScript a little bit better, I decided to make the page more fresh and informative with some tabs and photographs. I used Bootstrap for a quick grid solution in the finished product.
            </p>

            <WebImageDisplay src="img/projects/juliaspiesnew.png" href="//juliaspies.me"/>
          </div>
        </div>

        <Button text="next" to="/code/2" />
      </div>
    );
  }
}

export default CodePt1;
