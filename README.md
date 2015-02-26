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
```
var bandSearch = require('./bc-search.js')
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
  console.log(result)
}

https.request(bandSearch("funky music"), callback.bind({ callback : done })).end()

```