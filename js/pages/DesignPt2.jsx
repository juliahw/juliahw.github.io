import React from 'react';
import ImageDisplay from '../components/ImageDisplay.jsx';
import NextButton from '../components/NextButton.jsx';

class DesignPt2 extends React.Component {

  render() {
    return (
      <div className="fade-in">
        <h2 className="space-2 text-center text-uppercase text-blue text-spaced">
          The Fun Stuff
        </h2>

        <div className="col-xs-18 col-xs-offset-3 col-md-12 col-md-offset-6">
          <p className="space-2">
            Personal projects are a great way to let my imagination run wild. The most common
            motifs you’ll see in my personal work are pies and pigeons, both of which I love
            unashamedly.
          </p>
        </div>

        <ImageDisplay
          src="img/pigeon.png"
          title="pigeon"
          description='The new summer blockbuster.'
          dimensions="20.25 in x 30 in"
          software="Adobe Photoshop"
        />

        <ImageDisplay
          src="img/troubleshooting.png"
          title="troubleshooting apple pie"
          description='An aggregation of all the pieous lessons I’ve learned over the years.'
          dimensions="9.75 in x 16.5 in"
          software="Adobe Photoshop"
        />

        <ImageDisplay
          src="img/nothing.png"
          title="a slice"
          description='A quick study in a one-color palette.'
          software="Adobe Photoshop"
        />
      </div>
    );
  }

}

export default DesignPt2;
