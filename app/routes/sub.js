import Ember from 'ember';

export default Ember.Route.extend({
  model(args) {
    const url = `https://crossorigin.me/https://voat.co/api/subversefrontpage?subverse=${args.verse}`;
    return Ember.RSVP.resolve(Ember.$.ajax(url));
  }
});
