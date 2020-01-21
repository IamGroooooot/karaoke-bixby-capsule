var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findMusicCode (songTitle, karaokeCompany) {
  console.log("Find Music by a title")
  
  //var options = {}
  var ret = []

  // optional이므로 체크해야함
  //if(typeof(songTitle) != "undefined"){
  //  options["keyword"] = songTitle;
  //}
  var options = { 
    format: 'json',
    query: {
      keyword: songTitle
    }
  }

  if(typeof(karaokeCompany) != "undefined"){
    console.log(karaokeCompany + "에 검색")
  } else {
    console.log("회사 어딘지 안 정해 줌.")    
  }

  try {
    ret = http.getUrl(config.get('remote.url') + '/search', options);
    //console.log(res.title)
  } catch(err) {
    console.log("Error - " + err)
  }

  console.log(ret)

  return ret.title


  /*var options = { 
    format: 'json',
    query: {
      MusicTitle: musicTitle,
      Karaokecompany: karaokecompany
    }
  };*/
  /*
  // If type is "Formal", then this makes a GET call to /musics?type=Formal
  var response = http.getUrl(config.get('remote.url') + '/musics', options);
  return response;*/
}
