/* 

The MIT License (MIT)

Copyright (c) 2015 Axel Smeets

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/


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
