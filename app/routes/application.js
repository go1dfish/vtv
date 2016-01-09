import Ember from 'ember';

export default Ember.Route.extend({
  moment: Ember.inject.service(),
  beforeModel() {
    moment.tz.add("Etc/UTC|UTC|0|0|");
    this.get('moment').changeTimeZone('Etc/UTC');
  },

  actions: {
    navToSub(sub) {
      this.replaceWith('sub', sub);
    }
  }
});
