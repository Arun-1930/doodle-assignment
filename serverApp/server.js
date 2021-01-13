var express = require('express');

const cors = require('cors')
var app = express();
var corsOptions={
    origin: "http://localhost:4200"
}
app.use(cors(corsOptions));
var fs = require("fs");
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
Slots =  require('./slot-schema');
Booking =  require('./booking-schema');

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
var count=1;
//serve sample static data using express.js framework.
//app.use('/staticfiles', express.static('assets/files'))
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


mongoose.connect('mongodb://localhost/Appointment',{ useNewUrlParser: true , useUnifiedTopology: true }).then(
        () => {console.log("DB connected.")},
        err => {console.log(err)}
    );
var db = mongoose.connection;

app.get('/listSlots/:date', function (req, res) {
    date=req.params.date
Slots.listSlot(date,function(err, user){
    if (err) {
        console.log('Error occured: --------> '+ err);
        res.json({status:404,data:"Error Occured"})
    } else {
        //console.log(user)
        res.json({status:200,data:user});
        
    }
});
    })
    
    app.post('/addSlot/:date', function (req, res) {
        Slot=req.body
        console.log(req.body)
        Slots.addSlot(Slot,function(err, user){
            if (err) {
                console.log('Error occured: --------> '+ err);
            } else {
                //console.log(user)
                res.send(user);
            }
        });
            })

    app.post('/addBooking/:date', function (req, res) {
        patient=req.body
        console.log(req.body)
        Booking.addBooking(patient,function(err, user){
            if (err) {
                console.log('Error occured: --------> '+ err);
            } else {
                //console.log(user)
                res.send(user);
            }
        });
            })
  
    //server listening to 3000
var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})