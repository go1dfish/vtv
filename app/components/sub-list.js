import Ember from 'ember';

const computed = Ember.computed;

export default Ember.Component.extend({
  classNames: ['btn-group', 'sub-list'],
  classNameBindings: 'open',
  open: false,

  label: computed('verse', {
    get() {
      return this.get('verse');
    },

    set(key, value) {
      return value;
    }
  }),

  click() {
    this.$('input').focus().select();

  },

  focusIn() {
    this.set('open', true);
  },

  focusOut() {
    Ember.run.later(() => {
      this.set('open', false);
      this.notifyPropertyChange('label');
    }, 300);
  },

  isFiltering: computed('verse', 'label', {
    get() {
      return this.get('verse') !== this.get('label');
    }
  }),

  _subs: computed('isFiltering', {
    get() {
      const isFiltering = this.get('isFiltering');
      const label = this.get('label');
      const re = new RegExp(label, 'i');

      if (!isFiltering) {
        return this.get('allSubs');
      }

      return Ember.ArrayProxy.extend({
        subs: this.get('allSubs'),
        content: computed.filter('subs', function(sub) {
          return sub.match(re);
        })
      }).create();
    }
  }),

  subs: computed.sort('_subs', (a, b) => Ember.compare(a, b)),

  allSubs: [
    'Videos',
    'Documentaries',
    'Gaming',
    'Politicalhumor',
    'Music',
    'ListenToThis',
    'MusicVideos',
    'OriginalMusic',
    'Underground',
    'Instrumentals',
    'MakeSomeNoise',
    'UnderratedMusic',
    'Soundtracks',
    'WhoaTunes',
    'GuitarSolos',
    'ChillMusic',
    'TreeMusic',
    'Guitar',
    'Piano',
    'Blues',
    'ClassicalMusic',
    'HipHopHeads',
    'GameMusic',
    'MetalCore',
    'IndieMusic',
    'ProgMetal',
    'MathRock',
    'Shoegaze',
    'Industrial',
    'Jazz',
    'EDM',
    'Punk',
    'HipHop',
    'Bluegrass',
    'ElectroHouse',
    'ElectronicHouse',
    'ElectronicMusic',
    'CyberpunkMusic',
    'AvantGardeMusic',
    'ProgressiveTrance',
    'VideoGameSoundtracks'
  ],

  actions: {
    navToSub() {
      this.sendAction('navToSub', this.get('label'));
    }
  }
});
