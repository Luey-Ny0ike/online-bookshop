import Ember from 'ember';

export default Ember.Component.extend({
  addNewBook: false,
  actions: {
    bookFormShow() {
      this.set('addNewBook', true);
    },

  saveBook1() {
    var params = {
      author: this.get('author'),
      title: this.get('title'),
      synopsis: this.get('synopsis'),
      pages: this.get('pages'),
      price: this.get('price'),
      image: this.get('image'),
    };
    this.set('addNewBook', false);
    this.sendAction('saveBook2', params);
  }

  }
});
