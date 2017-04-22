var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema= new Schema({
    "first_name": {type: String, lowercase: true, required: true},
    "last_name": {type: String, required: true},
    "email": {type: String, required:true},
    "phone": {type: Number, required:true,unique:true},
    "address_line1": {type: String, required:true},
    "address_line2": {type: String, required:true},
    "pincode": {type: Number, required:true},
    "status" : {type:String, required:true},
    "gender": {type:String, required:true},
    "bloodgroup" : {type:String,required:true},
    "latitude" : {type:Number},
    "longitude" : {type:Number}
    
});

var Donor  = module.exports = mongoose.model('Donor',UserSchema);
module.exports.addDonor =  function (newDonor, callback){
    
        newDonor.save(callback);
}

module.exports.updateLocation = function(newDonor,email,callback){
    newDonor.update({email:email},function(err, affected, resp) {
   console.log(resp);
});
}