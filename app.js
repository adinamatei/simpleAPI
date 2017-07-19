var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response){
	response.send('Hello World');
	// response.type('json');
	// response.end(JSON.stringify({keyName: name}));
});

app.post('/list', function(request, response){
  var username = request.body.username;
  var password = request.body.password;
  response.status = "success";
  response.send({
    message: "Here is your list",
    users: [{username: 'one', password: 123}, {username: 'two', password: 'abc'}]
  });
});

console.log('Listen on localhost:3030');
var server = app.listen(3030);