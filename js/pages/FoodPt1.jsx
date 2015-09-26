import React from 'react';
import FoodImageDisplay from '../components/FoodImageDisplay.jsx';
import NextButton from '../components/NextButton.jsx';

class FoodPt1 extends React.Component {

  render() {
    return (
      <div className="fade-in">
        <h2 className="space-2 text-center text-uppercase text-blue text-spaced">
          Humble Beginnings
        </h2>

        <div className="col-xs-18 col-xs-offset-3 col-md-12 col-md-offset-6">
          <p>
            I do not exaggerate: I used to be an <em>awful</em> cook. There was bitterness. There was fire. There was the microwave. But things get better, right?
          </p>

          <p className="space-2">
            These were a few mistakes I made as a naive beginner.
          </p>

          <h4 className="space-1 text-spaced text-blue"><em>1. the “healthy” recipe</em></h4>
          <FoodImageDisplay
            src="img/muffins.jpg"
            title="Low-fat Almond Muffins"
            ingredients={<span>ground almonds &middot; dark chocolate &middot; disappointment</span>}
          />
          <p>
            The only things that saved this batch from the bin were my extreme aversion to food waste and the dark chocolate filling.
          </p>
          <p className="space-3">
            If you’re ever tempted to try out a recipe that claims to be healthy, vegan, low-fat, etc., I have one word for you: <b>don’t</b>. No matter how much the recipe brags that it “tastes just like the real thing,” it will without a doubt make you very sad. After all, dessert is about indulgence. Why eat something with 75% of the calories and 0% of the tastiness when you could satisfy yourself longer with something good?
          </p>

          <h4 className="space-1 text-spaced text-blue"><em>2. the blowtorch</em></h4>
          <FoodImageDisplay
            src="img/crumble.jpg"
            title="Apple Crumble"
            ingredients={<span>granny smith apples &middot; brown sugar &middot; burnt fingers</span>}
          />
          <p>
            I don’t own a blowtorch at home, so I decided it would be a great idea to try using a lighter to caramelize the topping instead. It was not a great idea.
          </p>
          <p className="space-3">
            The only substitute for a blowtorch is the broiler. Throw your crumble, cr&egrave;me br&ucirc;l&eacute;e, etc. into broiler for a few minutes until it browns the way you want. Careful though &mdash; things burn fast on broil! I know from many sad experiences&hellip;but that’s a story for another time.
          </p>

          <h4 className="space-1 text-spaced text-blue"><em>3. the authorities</em></h4>
          <FoodImageDisplay
            src="img/lemoncake.jpg"
            title="Lemon Pudding Cake"
            ingredients={<span>meyer lemons &middot; egg white &middot; powdered sugar &middot; tears</span>}
          />
          <p>
            This cake received twice the amount of lemon juice than it should have. Maybe three times. It was still good, but it was just a little bit painful to eat the filling. I now always take recipes with a grain of salt. Chances are, if something looks off to, it is off. Recipe writers aren’t the ultimate authorities &mdash; typos and mistakes happen all the time.
          </p>
          <p>
            What I do nowadays is to read through several recipes for the same thing, then construct my own recipe from average measurements and reviewers’ suggestions.
          </p>
        </div>

        <NextButton />
      </div>
    );
  }

}

export default FoodPt1;
