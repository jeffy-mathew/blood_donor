var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../app/models/user');
var config =require('../config/database');
var passport = require('passport');
module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;
    opts.passReqToCallback = true;
    passport.use(new JwtStrategy(opts, (req,jwt_payload, done) => {
        User.getUserbyId(jwt_payload._doc._id, function(err, user) {
            if (err) { 
                return done(err, false);
            
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
                // or you could create a new account 
            }
        });
    }));
}
 
