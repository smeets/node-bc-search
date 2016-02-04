/* Copyright (c) 2016 Axel Smeets */

var qs = require('querystring')

module.exports = exports = function search(query) {
    var options = {
        hostname: 'bandcamp.com',
        path:     '/api/nusearch/2/autocomplete?' + qs.stringify({ q : query }),
        headers:  {
            'User-Agent': 'android-async-http/1.4.1 (http://loopj.com/android-async-http)',
            'Cookie': '$Version=1'
        }
    }

    return options
}