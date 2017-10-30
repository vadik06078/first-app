const passport = require('passport'),
	  LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalSTrategy(
	function(username,password,done){
	  if(username === 'admin' && password === 'user'){
		return done(null, {username:'admin'});
	  } 

	  return done(null,false);
    }
));

passport.serializeUser(function(user, done){
	done(null,user.username);
});

passport.deserializeUser(function(username, done){
	done(null,{username:username});
});

module.exports = passport;