var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function findMusic () {
  console.log("FindMusic without any parameter!)")
  // Read the remote.url value from capsule.properties
  var response = http.getUrl(config.get('remote.url') + '/music', { format: 'json' });
  return response;
}
