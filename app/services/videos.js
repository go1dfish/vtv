import Ember from 'ember';

const computed = Ember.computed;

export default Ember.Service.extend({
  currentIndex: -1,

  playlist: computed({
    get() {
      return [];
    },

    set(key, value) {
      return (value || []).slice();
    }
  }),

  currentItem: computed('currentIndex', 'playlist.[]', {
    get() {
      return this.get('playlist').objectAt(this.get('currentIndex'));
    }
  }),

  currentItemYtId: computed('currentItem.MessageContent', {
    get() {
      const url = this.get('currentItem.MessageContent');
      return this.parseTubeId(url);
    }
  }),

  parseTubeId: function(url) {
    var id = getParamByName(url, 'v');

    if (!id && url.match(/youtu\.be/)) {
      id = url.split('youtu.be/').pop();
      id = id.split(/(#|\?)/)[0];
    }

    id = id.split(/[ \n\)]/)[0];

    if (id && id.length < 7) {
      return;
    }

    return id;
  },

  playVideo(video) {
    const index = this.get('playlist').indexOf(video);
    this.set('currentIndex', index);
  },

  nextVideo() {
    const length = this.get('playlist.length');
    let index = this.get('currentIndex') + 1;

    if (!length) {
      return this.set('currentIndex', -1);
    }

    if (index >= length) {
      index = 0;
    }

    return this.set('currentIndex', index);
  },

  previousVideo() {
    const length = this.get('playlist.length');
    let index = this.get('currentIndex') - 1;

    if (!length) {
      return this.set('currentIndex', -1);
    }

    if (index < 0) {
      index = length - 1;
    }

    return this.set('currentIndex', index);
  }
});

function getParamByName(url, name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(url);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
