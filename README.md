bc-search
=========
search bandcamp using nodejs (**last verified test 2017-11-20**)

## install
 - `npm install bc-search`

## note
The interesting bits of this module are the `path` and `User-Agent`.

They were found by using Bandcamp's Android app with a proxied Wi-Fi connection.

see example...
 - `var search = require('bc-search')`
 - `https.request(search("hello i am keywords"), callback).end()`

example
``` js
/**
 *  hip nodejs style (with request)
 */
const request = require('request')
const search = require('bc-search')

let { hostname, path, headers } = search('funky music')

request({
    url: `https://${hostname}${path}`,
    headers: headers
}).then(handle_results)


// data = { results: [<hit>], time_ms: int }
function handle_results(data) {
    console.log(data)
}

/**
 * old nodejs style
 */
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

suggest('funky music', handle_results)
```

**<hit>**
The following keys are (somewhat) identified:
 * `score`: search score
 * `url`: link to resource
 * `id`: resource id
 * `type`: `t` for track, `a` for album
 * `img`: link to thumbnail
 * `art_id`: image base id?
 * `name`: name of the resource (depends on type)
 * `album_name`: only present if `type=t`
 * `album_id`: only present if `type=t`
 * `band_name`: hmm, what in the world can this be?
 * `band_id`: id of band, yes it it true

```js
{ score: -4004,
    img: 'https://f4.bcbits.com/img/a3844406641_3.jpg',
    weight: 0,
    band_name: 'The Dongles',
    img_id: null,
    band_id: 642255529,
    id: 2233893224,
    stat_params: 'search_item_id=2233893224&search_item_type=a&search_match_part=%3F&search_page_id=280863357&search_page_no=0&search_rank=100&search_sig=fe01036350c746db0f725b5a06d2f38d',
    type: 'a',
    bias: 1.02,
    url: 'https://thedongles.bandcamp.com/album/junky-music',
    part: 't',
    art_id: 3844406641,
    name: 'Junky Music'
}
```
