import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['media-list', 'video-playlist', 'list-group'],
  videos: Ember.inject.service(),

  actions: {
    playItem(item) {
      this.get('videos').playVideo(item);
    }
  }
});
