import alt from '../alt.js';

const actions = alt.createActions(class PageActions {

  constructor() {
    this.generateActions(
      'setFabHoverState',
      'setPageSet',
      'setPageIndex',
      'nextPage',
      'prevPage'
    );
  }

});

export default actions;
