var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema= new Schema({
    "first_name": {type: String, lowercase: true, required: true},
    "last_name": {type: String, required: true},
    "email": {type: String, required:true, unique:true},
    "phone": {type: Number, required:true, unique:true},
    "pwd": {type: String, required:true},
    "type":{type:String,default:"normal"}
});

var User  = module.exports = mongoose.model('Users',UserSchema);
module.exports.addUser =  function (newUser, callback){
    bcrypt.hash(newUser.pwd,null,null,function(err,hash){
        if (err) throw err;
        newUser.pwd=hash;
        newUser.save(callback);
    });
}
module.exports.getUserbyUsername = function(email,callback){
    const query = {email:email};
    User.findOne(query,callback);

};
module.exports.getUserbyId = function(id,callback){
    
    User.findById(id,callback);

};
module.exports.comparePassword = function (candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash, function(err, isMatch){
        if(err) throw err;
        callback(null, isMatch);
    });
}