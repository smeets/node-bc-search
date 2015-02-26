/* (C) 2015 Axel Smeets */
module.exports = exports = (function(){
  var baseUrl = 'bandcamp.com'
    , path = '/api/nusearch/2/autocomplete?'
    , userAgent = 'android-async-http/1.4.1 (http://loopj.com/android-async-http)'
    , cookies = ([
      'BACKENDID=bender09-5',
      '$Version=1',
    ]).join(';')
    , qs = require('querystring')

  function search (query) {
    var options = {
      hostname: baseUrl,
      port: 443,
      path: path + qs.stringify({ q : query }),
      headers : {
        'User-Agent' : userAgent,
        'Cookie' : cookies
      }
    }

    return options
  }

  return search
})()
