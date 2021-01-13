var mongoose = require('mongoose');

var seatsSchema = mongoose.Schema({
    SeatNo:{ type: String, required: true },
    CompartmentNo:{ type: Number, required: true },
    Type:{ type: String, required: true },
    Status: { type: String, required: true },
    PassengerName :{ type: String, required: true },
    PassengerAge:{ type: Number, required: true },
    PassengerDOB: { type: Date, required: true },
    PassengerGender: { type: String, required: true },
    ticketNo: { type: String, required: true }
});

var Trains = module.exports = mongoose.model('Seats', seatsSchema, 'Seats');