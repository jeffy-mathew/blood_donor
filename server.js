var express = require('express');
var app =express();
var morgan=require('morgan');
var mongoose=require('mongoose');
var User=require('./app/models/user');


var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');
var config = require('./config/database')
var passport = require ('passport');
var cors = require ('cors');
var multer = require ('multer');
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));
app.use('/api',appRoutes);
app.use(passport.initialize());
app.use(passport.session()); 
require('./config/passport')(passport);


mongoose.connect(config.database,function(err) {
    if (err) {
        console.log('err ' + err);
    }
    else{
        console.log('connection success');
    }
});

app.get('*', function(req , res){
    res.send("Invalid End Point");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("runnig");
});
