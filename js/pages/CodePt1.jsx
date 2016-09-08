import React from 'react';
import WebImageDisplay from '../components/WebImageDisplay.jsx';
import NextButton from '../components/NextButton.jsx';

class CodePt1 extends React.Component {

  render() {
    return (
      <div className="fade-in">
        <h2 className="space-2 text-center text-uppercase text-blue text-spaced">
          Julia’s Pies
        </h2>

        <div className="col-xs-18 col-xs-offset-3 col-md-12 col-md-offset-6">
          <p>
            I was still learning HTML, CSS, and JS when I made this website for my pie catering business. It was a great starter project: just a static page with some basic animations. My first step was to create some branding around which I could base the design of the website:
          </p>

          <div className="row space-1">
            <div className="col-xs-12 col-xs-offset-6">
              <img src="img/juliaspieslogo.png"/>
            </div>
          </div>

          <p>
            Then I started coding. My first attempt resulted in this emabarrassingly monotonous but generally functional page:
          </p>
          <img className="img-web" src="img/juliaspiesold.png" />
          <p>
            Thankfully I overhauled it pretty quickly. As I got to know JavaScript a little bit better, I decided to make the page more fresh and informative with some tabs and photographs. I used Bootstrap for a quick grid solution in the finished product.
          </p>
          <WebImageDisplay src="img/juliaspiesnew.png" href="//juliaspies.me"/>
        </div>

        <NextButton to="/code/2" />
      </div>
    );
  }

}

export default CodePt1;
