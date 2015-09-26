import React from 'react';
import FoodImageDisplay from '../components/FoodImageDisplay.jsx';

class FoodPt2 extends React.Component {

  render() {
    return (
      <div className="fade-in">
        <h2 className="space-2 text-center text-uppercase text-blue text-spaced">
          Bread
        </h2>

        <div className="col-xs-18 col-xs-offset-3 col-md-12 col-md-offset-6">
          <p className="space-2">
            I decided to learn breadmaking after one too many years of failing to make anything remotely bread-like in our old breadmaker. My favorite part is the kneading. I don’t own a stand mixer, so I hand knead all of my doughs. It might take longer than the machine, but it’s amazing stress relief.
          </p>

          <FoodImageDisplay
            src="img/bread.jpg"
            title="French Bread"
            ingredients={<span>flour &middot; water &middot; yeast &middot; salt</span>}
          />
          <p>
            The amazing thing about French bread is the simplicity of its ingredients. The complexity of flavor in a well-made loaf of bread is just plain magical.
          </p>
          <p>
            Making bread is a skill that I’m not even close to mastering. There are a lot of subtleties to the process. The dough is very wet, but has to be worked considerably until it is smooth and pliable &mdash; I ended up with many a sticky, doughy hand. The proving time must also be balanced such that the bread develops a rich, complex flavor but doesn’t develop a beery taste. The same goes for the kneading process; overworked dough will be too tough, but underworked dough will fall flat with too little structure to support a good, open crumb.
          </p>
          <p className="space-3">
            To make things even more complicated, steam is widely recommended for the first 5 to 10 minutes of baking time to improve crust texture. Industrial bread ovens come built with steam injection systems, but for my humble home oven I resorted to a spray bottle and a pan of water in the bottom of the oven. My oven is electric. Needless to say, it wasn’t too happy about all of this.
          </p>

          <FoodImageDisplay
            src="img/pearloaf.jpg"
            title="Poached Pear Loaf Cake"
            ingredients={<span>d'anjou pears &middot; coconut oil &middot; brown sugar</span>}
          />
          <p className="space-3">
            It wasn’t long before I started experimenting with different breads. Adding oil, sugar, or dairy to a dough achieves very different effects; learning how to balance them opens up a whole new world of deliciousness.
          </p>

          <FoodImageDisplay
            src="img/bagels.jpg"
            title="Sesame Bagels"
            ingredients={<span>flour &middot; black sesame &middot; baking soda</span>}
          />
          <p className="space-3">
            As of late, I’ve been especially enjoying making bagels. Putting your lovely risen dough into boiling soda water is pretty alien at first, but the result is a chewy, distinctively flavored bread. I have one of my favorite food blogs, <a href="//smittenkitchen.com/blog/2009/05/cinnamon-raisin-bagels/" target="_blank">Smitten Kitchen</a>, to thank for the recipe.
          </p>
        </div>
      </div>
    );
  }

}

export default FoodPt2;
