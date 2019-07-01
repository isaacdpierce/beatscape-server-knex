function makeTestMusicArray() {
  return [
    {
      soundscape_id: '1',
      soundscape_name: 'Silky Setup',
      kick: {
        kick_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/kick.mp3',
      },
      snare: {
        snare_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/snare.mp3',
      },
      percussion: {
        percussion_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/bass.mp3',
      },
      cymbals: {
        cymbals_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/cymbals.mp3',
      },
      accessory: {
        accessory_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/piano.mp3',
      },
      melody: {
        melody_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/melody.mp3',
      },
      harmony: {
        harmony_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/harmony.mp3',
      },
      instrument: {
        instrument_1:
          'https:/beatscape.s3.ca-central-1.amazonaws.com/instrument.mp3',
      },
      atmosphere: {
        atmosphere_1:
          'https:/beatscape.s3.ca-central-1.amazonaws.com/atmospheric.mp3',
      },
    },
    {
      soundscape_id: '2',
      soundscape_name: 'Tricky Testy',
      kick: {
        kick_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/kick.mp3',
      },
      snare: {
        snare_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/snare.mp3',
      },
      percussion: {
        percussion_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/bass.mp3',
      },
      cymbals: {
        cymbals_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/cymbals.mp3',
      },
      accessory: {
        accessory_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/piano.mp3',
      },
      melody: {
        melody_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/melody.mp3',
      },
      harmony: {
        harmony_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/harmony.mp3',
      },
      instrument: {
        instrument_1:
          'https:/beatscape.s3.ca-central-1.amazonaws.com/instrument.mp3',
      },
      atmosphere: {
        atmosphere_1:
          'https:/beatscape.s3.ca-central-1.amazonaws.com/atmospheric.mp3',
      },
    },
    {
      soundscape_id: '3',
      soundscape_name: 'Fatigued Fakes',
      kick: {
        kick_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/kick.mp3',
      },
      snare: {
        snare_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/snare.mp3',
      },
      percussion: {
        percussion_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/bass.mp3',
      },
      cymbals: {
        cymbals_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/cymbals.mp3',
      },
      accessory: {
        accessory_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/piano.mp3',
      },
      melody: {
        melody_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/melody.mp3',
      },
      harmony: {
        harmony_1: 'https:/beatscape.s3.ca-central-1.amazonaws.com/harmony.mp3',
      },
      instrument: {
        instrument_1:
          'https:/beatscape.s3.ca-central-1.amazonaws.com/instrument.mp3',
      },
      atmosphere: {
        atmosphere_1:
          'https:/beatscape.s3.ca-central-1.amazonaws.com/atmospheric.mp3',
      },
    },
  ];
}

function makeTestSpritesArray() {
  return [
    {
      sprite_id: 1,
      sprite_name: 'cafe-2',
      sprite_url: 'https://www.aws.s3.cafe-2',
      scene: 'City',
    },
    {
      sprite_id: 2,
      sprite_name: 'cafe-3',
      sprite_url: 'https://www.aws.s3.cafe-3',
      scene: 'City',
    },
    {
      sprite_id: 3,
      sprite_name: 'wind-desert-1',
      sprite_url: 'https://www.aws.s3.wind-desert-1',
      scene: 'Nature',
    },
  ];
}

module.exports = {
  makeTestMusicArray,
  makeTestSpritesArray,
};
