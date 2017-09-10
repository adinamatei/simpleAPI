var express = require('express');
var app = express();

var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

var users = [];
var id = 0;
app.get('/', function(request, response){
	response.sendFile("index.html");
	// response.type('json');
	// response.end(JSON.stringify({keyName: name}));
});

app.post('/register', function(request, response){
  var username = request.body.username;
  var password = request.body.password;

  users.push({username: username, password: password, id: id});
  id++;
  response.status = "success";
  response.send({
    message: "Here is your user",
    list: users
  });
});

console.log('Listen on localhost:3030');
var server = app.listen(3030);