import React from 'react';
import WebImageDisplay from '../components/WebImageDisplay.jsx';
import NextButton from '../components/NextButton.jsx';

class CodePt2 extends React.Component {

  render() {
    return (
      <div className="fade-in">
        <h2 className="space-2 text-center text-uppercase text-blue text-spaced">
          WalkMe
        </h2>

        <div className="col-xs-18 col-xs-offset-3 col-md-12 col-md-offset-6">
          <p>
            WalkMe is a multi-platform app that recommends the safest walking path from A to B. My team made WalkMe as a final project for Princeton's COS 333, taught by Brian Kernighan. I was the primary frontend contributor on this project.
          </p>
          <p>
            After researching different choices for frontend frameworks, we decided on <a href="//ionicframework.com/" target="_blank">Ionic</a>, a hybrid app framework built on <a href="//angularjs.org" target="_blank">Angular</a>. I found the Angular learning curve to be a little steep, and its controller logic to be quite messy; I probably won’t use it again for a future project. Still, using Ionic speeded up our workflow significantly, as it gave us multi-platform functionality and several built-in components and utilities for free.
          </p>
          <p>
            As you can see, we decided to emulate the appearance of Google Maps such that the interface would feel familiar to the user. We used several material design components, such as the floating action button; this played well with the Ionic framework, which is also quite material.
          </p>
          <WebImageDisplay src="img/walkmehome.png" href="//walkme.herokuapp.com"/>
          <p>
            The interface underwent many iterations. After performing usability testing, I ended up implementing many new features that provided extra assurance to the user. These included autocomplete, a larger range of descriptive colors indicating route safety, and infographics displaying more detailed security data.
          </p>
          <div className="row">
            <div className="col-sm-12">
              <img className="img-web" src="img/walkmeabout.png" />
            </div>
            <div className="col-sm-12">
              <img className="img-web" src="img/walkmeroutes.png" />
            </div>
          </div>
          <p>
            Besides my work on the app itself, I also created a product website to go with our presentation deck:
          </p>
          <WebImageDisplay src="img/walkmeweb.jpg" href="//princeton.edu/~eyli/wm"/>
        </div>

        <NextButton to="/code/3" />
      </div>
    );
  }

}

export default CodePt2;
