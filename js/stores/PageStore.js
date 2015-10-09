import alt from '../alt.js';
import actions from '../actions/PageActions';

export default alt.createStore(class PageStore {

  constructor() {
    this.bindActions(actions);
    this.pageSet = 'home';
    this.pageIndex = 0;
  }

  // Set the current set of pages (and set index to 0 for safety)
  // set is the name of the page array in PAGE_SETS, e.g. 'home'
  setPageSet(set) {
    if (set === this.pageSet && this.pageIndex === 0) return;

    this.pageSet = set;
    this.setPageIndex(0);
  }

  // Set the current page to index
  // index is the page index in the current page set in PAGE_SETS
  setPageIndex(index) {
    if (index === this.pageIndex) return;

    this.pageIndex = index;
    window.scrollTo(0, 0);
  }

  nextPage() {
    this.setPageIndex(this.pageIndex + 1);
  }

  prevPage() {
    this.setPageIndex(this.pageIndex - 1);
  }

});
