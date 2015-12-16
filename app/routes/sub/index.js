import Ember from 'ember';

export default Ember.Route.extend({
  videos: Ember.inject.service(),

  model(args) {
    const posts = this.modelFor('sub').filter(post => {
      return post.MessageContent.match(/you/);
    });

    this.get('videos').setProperties({
      playlist: posts,
      currentIndex: 0
    });
  }
});
