const express = require('express');
const app = express();

const middleware = function (req, res, next) {
	console.log(req.path);

	req['body'] = 'Hello World!';

	next();
}

//app.use(middleware);
app.get('/', middleware, function(req, res){
    res.send(req.body);
});

app.post('/', function(req, res){
    res.send('Got a POST request')
});

app.listen(3005,function() {
    console.log('Example app listening on port 3002!');
});


