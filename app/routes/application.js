import Ember from 'ember';

export default Ember.Route.extend({
  moment: Ember.inject.service(),
  beforeModel() {
    moment.tz.add("Etc/UTC|UTC|0|0|");
    this.get('moment').changeTimeZone('Etc/UTC');
  },

  model() {
    return [
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
    ]
  }
});
