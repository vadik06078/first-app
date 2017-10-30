const express = require('express');
const app = express();
//const passport = require("passport");

const profile = {
	name: "Ivan",
	pass: "123"
};

/*const _ = require("lodash");
const bodyParser = require("body-parser");
//const jwt = require("jsonwebtoken");

const passport = require("passport");
//const passportJWT = require("passport-jwt");

const ExtractJwt = passportJWT.ExtractJwt;
const JWTStrategu = passportJWT.Strategy;


const profile = [
{
	id: 1,
	name: "Ivan",
	password: "123456"
},
{
    id: 2,
	name: "Kate",
	password: "456789"
}
];
*/


const passport = require('/home/anton/Downloads/myapp/auth.js');

app.use(passport.initialize());
app.use(passport.session());


const middleware = function (req, res, next) {
	console.log(req.path);
   
    	req['body'] = 'Здравствуйте!!!';

	next();
}

//app.use(middleware);
app.get('/', middleware, function(req, res){
    res.send(req.body);
});

app.post('/login', passport.authenticate("local"),function(req, res){
    res.redirect('/users/' + req.user.username);
});

app.listen(3010,function() {
    console.log('Example app listening on port 3010!');
});


