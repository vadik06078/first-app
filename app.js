var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World!1')
});

app.post('/', function(req, res){
    res.send('Got a POST request')
});

app.listen(3002,function() {
    console.log('Example app listening on port 3001!');
});
