// app/routes/applicaton.js
export default Ember.Route.extend({
  moment: Ember.inject.service(),
  beforeModel() {
    this.get('moment').changeTimeZone('UTC');
  },

  redirect() {
    this.transitionTo('sub.index', 'videos');
  }
});
