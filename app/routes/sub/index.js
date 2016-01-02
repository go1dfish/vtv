import Ember from 'ember';

export default Ember.Route.extend({
  videos: Ember.inject.service(),

  afterModel(args) {
    const posts = this.modelFor('sub').filter(post => {
      const url = post.MessageContent || '';
      return url.match(/you/) && this.get('videos').parseTubeId(url);
    });

    this.get('videos').setProperties({
      playlist: posts,
      currentIndex: 0
    });
  }
});
