import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'video-player',
  videos: Ember.inject.service(),

  actions: {
    playNext() {
      this.get('videos').nextVideo();
    },

    playPrevious() {
      this.get('videos').previousVideo();
    }
  }
});
