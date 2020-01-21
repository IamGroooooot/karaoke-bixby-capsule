var http = require('http')
var console = require('console')
var config = require('config')
module.exports.function = function findMusicCode (musicTitle, karaokeCompany) {
  console.log("Find Music by a title")
  var options = { 
    format: 'json',
    query: {
      MusicTitle: musicTitle,
      Karaokecompany: karaokecompany
    }
  };
  // If type is "Formal", then this makes a GET call to /musics?type=Formal
  var response = http.getUrl(config.get('remote.url') + '/musics', options);
  return response;
}
