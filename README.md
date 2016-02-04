bc-search
=========
search bandcamp using nodejs

## install
 - `npm install bc-search`

## note
The interesting bits of this module are the path and user agent.

They were found by using Bandcamp's Android app with a proxied Wi-Fi connection.

## usage
the package returns a function. the returned function returns a https request options object when called. use http/https module to do actual request and callback logging.

see example...
 - `var search = require('bc-search')`
 - `https.request(search("hello i am keywords"), callback).end()`

example
``` js
var http = require('http')
var search = require('bc-search')

function suggest(keywords, callback) {
    http.request(search(keywords), function(res) {
        var data = ''

        res.on('data', function(chunk) {
            data += chunk
        })

        res.on('end', function() {
            callback(JSON.parse(data))
        })
    }).end()
}

suggest('funky music', function(data) {
    // data = { results: [<hit>], time_ms: int }
    console.log(data)
})
```

each `results` hit is of the form:
```js
{
  url: 'https://sincerelyjohn.bandcamp.com/track/funky-music-featuring-mc',
  weight: 0,
  band_id: 3070742134,
  name: 'Funky Music featuring MC',
  img: 'https://f1.bcbits.com/img/a3657732646_3.jpg',
  band_name: 'Sincerely, John',
  part: 't',
  id: 2981519852,
  album_name: 'Human Theory the Album',
  score: -4075,
  type: 't',
  img_id: null,
  art_id: 3657732646,
  album_id: 2271697086,
  bias: 1
}
```
