const MusicBrainzApi = require('musicbrainz-api').MusicBrainzApi;

const mbApi = new MusicBrainzApi({
  appName: 'fidis',
  appVersion: '0.1.0',
  appContactInfo: 'annancastic@gmail.com'
});

module.exports = mbApi;