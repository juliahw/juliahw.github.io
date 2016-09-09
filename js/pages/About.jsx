import React from 'react';

class About extends React.Component {

  render() {
    return (
      <div className="fade-in va-middle">
        <div className="row">
          <div className="col-xs-20 col-xs-offset-2 col-sm-18 col-sm-offset-3 col-md-8 col-md-offset-8">
            <h2 className="space-2">
              A Winter's Tale.
            </h2>

            <p className="text-justify">
              For many years Julia wandered through life, aimless and confused. Then one fateful
              wintry evening, she ate a slice of gooey, delicious, homemade apple pie. From that
              moment forth, she lived with a newfound purpose: to achieve excellence in pie-making.
            </p>

            <p className="text-justify">
              Julia is now a senior studying computer science at Princeton University. When she’s
              not studying, sleeping, or making this website, she writes poetry and illustrates
              posters - and of course, she loves to pass the time baking scrumptious apple pie.
            </p>
          </div>
        </div>
      </div>
    );
  }

}

export default About;
