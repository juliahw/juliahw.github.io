import actions from './actions/PageActions';

const designButton = {
  iconClass: 'ion-ios-flower',
  onClick: function() {
    actions.setFabHoverState(null);
    actions.setPageSet('design');
  },
  onMouseEnter: function() {
    actions.setFabHoverState('design');
  },
  onMouseLeave: function() {
    actions.setFabHoverState(null);
  }
};

const codeButton = {
  iconClass: 'ion-code-working',
  onClick: function() {
    actions.setFabHoverState(null);
    actions.setPageSet('code');
  },
  onMouseEnter: function() {
    actions.setFabHoverState('code');
  },
  onMouseLeave: function() {
    actions.setFabHoverState(null);
  }
};

const foodButton = {
  iconClass: 'ion-fork',
  onClick: function() {
    actions.setFabHoverState(null);
    actions.setPageSet('food');
  },
  onMouseEnter: function() {
    actions.setFabHoverState('food');
  },
  onMouseLeave: function() {
    actions.setFabHoverState(null);
  }
};

const aboutButton = {
  iconClass: 'ion-ios-person',
  onClick: function() {
    actions.setFabHoverState(null);
    actions.setPageSet('home');
    actions.setPageIndex(1);
  },
  onMouseEnter: function() {
    actions.setFabHoverState('about');
  },
  onMouseLeave: function() {
    actions.setFabHoverState(null);
  }
}

export const homeMenu = {
  iconClass: 'ion-map',
  menuItems: [designButton, codeButton, foodButton, aboutButton]
};
