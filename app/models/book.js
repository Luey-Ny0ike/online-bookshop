import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  image: DS.attr(),
  pages: DS.attr(),
  synopsis: DS.attr(),
  title: DS.attr()
});
