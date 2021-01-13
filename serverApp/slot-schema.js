var mongoose = require('mongoose');

var slotSchema = mongoose.Schema({
    date:{ type: String },
    startTime:{ type: String },
	endTime:{ type: String },
	appointmentCount:{ type: Number }
});

var Slots = module.exports = mongoose.model('slots', slotSchema, 'slots');
module.exports.listSlot = function(date,callback){
    console.log("Requested listSlot() API");
    Slots.find({ date: date },callback).sort({ startTime: 1});
 }
 module.exports.addSlot = function(slot,callback){
    console.log(slot)
    console.log("Requested addSlot() API");
    Slots.create(slot,callback)
 }
 module.exports.count = function(slot,callback){
    console.log(slot)
    console.log("Requested addSlot() API");
    Slots.find({Slotid:slot},callback).count()
 }
 