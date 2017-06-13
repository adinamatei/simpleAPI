var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// __dirname - the path to the directory to bind to
app.use(express.static(__dirname + '/public'));

// get request
// '/...' - the route = URL pattern + HTTP verb (text.txt, .ajax, parameters)
app.get('/', function(request, response){
	response.send('Hello World');
	// response.type('json');
	// response.end(JSON.stringify({keyName: name}));
});

//post method
app.post('/', function(request, response){

});

console.log('Listen on localhost:3030');
var server = app.listen(3030);