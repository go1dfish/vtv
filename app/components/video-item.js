import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'video-item',
  classNameBindings: ['isPlaying'],
  videos: Ember.inject.service(),

  video: null,

  isPlaying: Ember.computed('videos.currentItem', 'video', {
    get() {
      return this.get('videos.currentItem') === this.get('video');
    }
  }),

  actions: {
    play() {
      this.get('videos').playVideo(this.get('video'));
    }
  }
});
