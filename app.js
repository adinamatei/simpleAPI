var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response){
	response.send('Hello World');
	// response.type('json');
	// response.end(JSON.stringify({keyName: name}));
});

app.post('/', function(request, response){

});

console.log('Listen on localhost:3030');
var server = app.listen(3030);