var mongoose = require('mongoose');
var slot = require('./slot-schema.js')
var bookingSchema = mongoose.Schema({
    Slotid:{type: mongoose.Schema.Types.ObjectId, ref: 'slot'},
    patientName:{ type: String },
	patientAge:{ type: Number },
	patientGender:{ type: String }
});

var Slots = module.exports = mongoose.model('Booking', bookingSchema, 'Booking');

 module.exports.addBooking = function(patient,callback){
    console.log(patient)
    console.log("Requested addBooking() API");
    Slots.create(patient,callback)
 }
 