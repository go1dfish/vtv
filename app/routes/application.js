import Ember from 'ember';

export default Ember.Route.extend({
  moment: Ember.inject.service(),
  beforeModel() {
    this.get('moment').changeTimeZone('UTC');
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
