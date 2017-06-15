import Ember from 'ember';

export default Ember.Component.extend({
  addNewBook: false;
  actions: {
    bookFormShow() {
      this.set('addNewBook', true);
    },

    
  }
});
