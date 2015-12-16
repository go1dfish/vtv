import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'video-playlist',
  videos: Ember.inject.service(),

  actions: {
    playItem(item) {
      this.get('videos').playVideo(item);
    }
  }
});
