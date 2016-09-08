import React from 'react';
import WebImageDisplay from '../components/WebImageDisplay.jsx';
import NextButton from '../components/NextButton.jsx';

class CodePt3 extends React.Component {

  render() {
    return (
      <div className="fade-in">
        <h2 className="space-2 text-center text-uppercase text-blue text-spaced">
          I Hate Everyone
        </h2>

        <div className="col-xs-18 col-xs-offset-3 col-md-12 col-md-offset-6">
          <p>
            This is probably my favorite project of all. I made <em>I Hate Everyone</em> as a final project for my computer graphics class at Princeton. IHE is a 2D particle system game in which you play this poor fellow in his battle against the injustices of the world:
          </p>

          <div className="row space-1">
            <div className="col-xs-12 col-xs-offset-6">
              <img src="img/ihedude.png"/>
            </div>
          </div>

          <p>
            I implemented IHE with the help of <a href="//julian.com/research/velocity" target="_blank">Velocity.js</a> for fluid UI animations and <a href="//www.pixijs.com/" target="_blank">PIXI.js</a> as an HTML5 canvas wrapper. The game runs on a simple physics engine I wrote for 2D collision detection, as well as some biologically inspired heuristics for organism growth and evolution.
          </p>

          <p>
            PIXI.js was a real lifesaver on this one. I began with a naive choice of <a href="//paperjs.org" target="_blank">Paper.js</a> as my canvas wrapper, but I soon found that Paper choked the framerate to near zero on particle counts over just a couple hundred. This was because Paper is built for vector graphics, not for large particle systems. PIXI, however, is a hardware-accelerated sprite-based engine, so it performs amazingly well on high particle counts. Check out this crazy demo:
          </p>
          <WebImageDisplay src="img/bunnymark.jpg" href="//www.goodboydigital.com/pixijs/bunnymark" target="_blank"/>

          <p>
            Looking forward, this is likely the last project I will ever write in ES5. I wrestled with prototypes and inheritance for <em>far</em> too long.
          </p>
          <p>
            Go ahead, try playing! Sorry to you Firefox users, but the game has only been tested in Chrome. :(
          </p>
          <WebImageDisplay src="img/ihe.png" href="//juliahw.github.io/i-hate-everyone" target="_blank"/>

          <p>
            For a more in-depth description of the project and implementation, check out my <a href="img/ihe.pdf" target="_blank">final project report</a>.
          </p>
        </div>
      </div>
    );
  }

}

export default CodePt3;
