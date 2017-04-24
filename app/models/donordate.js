var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema= new Schema({
    "date": {type: String, lowercase: true, required: true}, 
});

var Donor  = module.exports = mongoose.model('DonorDate',UserSchema);

