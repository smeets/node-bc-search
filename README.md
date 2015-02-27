bc-search
=========
search bandcamp using nodejs

## install
 - `npm install bc-search`

## usage
the package returns a function. the returned function returns a https request options object when called. use https module to do actual request and callback logging. 

see example...
 - `var bandSearch = require('bc-search')`
 - `https.request(bandSearch("hello i am query"), callback).end()`

example
``` js
var bandSearch = require('bc-search')
  , https = require('https')

function callback(res) {
  var data = '', callb = this.callback

  res.on('data', function (chunk) {
    data += chunk
  })

  res.on('end', function (){
    callb(JSON.parse(data))
  })
}

function done(result) {
  // Object.keys(result) --> [results, time_ms]
  // result.results --> array of autocompletions aka search hits
  // result.time_ms --> query response time (ms)
  console.log(result)
}

https.request(bandSearch("funky music"), callback.bind({ callback : done })).end()
```

each `results` hit is of the form:
``` json
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