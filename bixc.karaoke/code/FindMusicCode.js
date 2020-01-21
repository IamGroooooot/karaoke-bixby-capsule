var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findMusicCode (keyword, type, cond, karaokeCompany) {
  console.log("Find Music by a title")
  karaokeCompany = karaokeCompany.toLowerCase()
  //var options = {}
  var ret = []

  // optional이므로 체크해야 함
  //if(typeof(keyword) != "undefined"){
  //  options["keyword"] = keyword;
  //}
  //if(typeof(type) != "undefined"){
  //  options["type"] = type;
  //}
  //if(typeof(cond) != "undefined"){
  //  options["cond"] = cond;
  //}

  
  var options = { 
    format: 'json',
    query: {
      keyword: keyword,
      type: type,
      cond: cond
    }
  }

  if(typeof(karaokeCompany) != "undefined"){
    console.log(karaokeCompany + "에 검색")
  } else {
    console.log("회사 어딘지 안 정해 줌.")    
  }

  try {
    //if(karaokeCompany.includes('tj')){
      ret = http.getUrl(config.get('remote.url') + '/search', options);
      //ret = http.getUrl(config.get('remote.url') + '/searchTJ', options);

   // }else{
    //  ret = http.getUrl(config.get('remote.url') + '/search', options);
      //ret = http.getUrl(config.get('remote.url') + '/searchKY', options);

   // }
    //console.log(res.title)
  } catch(err) {
    console.log("Error - " + err)
  }

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
