import React from 'react';
import NextButton from '../components/NextButton.jsx';
import ImageDisplay from '../components/ImageDisplay.jsx';

class DesignPt1 extends React.Component {

  render() {
    return (
      <div className="fade-in">
        <h2 className="space-2 text-center text-uppercase text-blue text-spaced">
          The Serious Stuff
        </h2>

        <div className="col-xs-18 col-xs-offset-3 col-md-12 col-md-offset-6 space-1">
          <p>
            When I first started designing posters for the Princeton Chinese Students’ Association, I had almost no experience in Photoshop. It was rough at first, but learning by painful experience flattened the learning curve pretty quickly. Because I'd drawn in traditional media long before I started digital design, my first posters tended to be illustration-heavy:
          </p>
        </div>

        <ImageDisplay
          src="img/aroundtheworld.png"
          title="around the world"
          description='This was for a multicultural fair that happens every fall at Princeton. I clearly remember this was the first poster I made that I wasn’t ashamed of.'
          dimensions="8.5 in x 11 in"
          software="Adobe Photoshop"
        />

        <ImageDisplay
          src="img/newyear.png"
          title="lunar new year"
          description='The Princeton Chinese Students’ Association holds a Chinese New Year banquet every year. I started to really have fun with Photoshop brushes for this one.'
          dimensions="11 in x 17 in"
          software="Adobe Photoshop"
        />

        <ImageDisplay
          src="img/moon.png"
          title="moon festival"
          description='I wanted to come up with a color scheme less trite than the usual red or blue/white. The pop of pink ended up being a nice callout to passersby.'
          dimensions="11 in x 17 in"
          software="Adobe Photoshop"
        />

        <div className="col-xs-18 col-xs-offset-3 col-md-12 col-md-offset-6 space-1">
          <p>
            As a sophomore I joined the Student Design Agency. Feedback was quite a bit easier to come by with a closer design community around, so I got to play with some different design styles. I also became more familiar with making vector graphics in Illustrator.
          </p>
        </div>

        <ImageDisplay
          src="img/hamilton.png"
          title="hamilton lecture"
          description='I took on this project from the physics department with the goal of working with more typographical elements. In the end, I regret breaking up the canvas into so many sections; a cleaner poster may have looked better.'
          dimensions="24 in x 34 in"
          software="Adobe Photoshop"
        />

        <ImageDisplay
          src="img/math.png"
          title="math club shirt"
          description='This one was a real struggle. I can’t count how many iterations it went through, but I came away from it with more confidence in my creative process and much better knowledge of Illustrator.'
          software="Adobe Illustrator"
        />

        <NextButton />
      </div>
    );
  }

}

export default DesignPt1;
