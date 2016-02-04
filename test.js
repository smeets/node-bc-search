var search = require('./index.js')
var https = require('https')
var http = require('http')

function crash(why) {
	console.error('err:', why)
	process.exit(1)
}

function checkKeys(hits) {
	hits.results || crash("no 'results' key found")
	hits.time_ms || crash("no 'time_ms' key found")
}

function collect(res) {
	var data = ''

	res.on('data', function (chunk) {
		data += chunk
	})

	res.on('end', function (){
		checkKeys(JSON.parse(data))
	})
}

https.request(search('funky music'), collect).end()
http.request(search('funky music'), collect).end()
