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

  didChangeIsPlaying: Ember.observer('isPlaying', function() {
    const element = this.get('element');

    if (this.get('isPlaying') && this.get('tagName') === 'li' && element) {
      Ember.$(element).scrollintoview();
    }
  }),

  actions: {
    play() {
      this.get('videos').playVideo(this.get('video'));
    }
  }
});
