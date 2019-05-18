var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ["AUS", "DAL", "LAX", "SEA"]
    }, 
    arrival: {
        type: Date,
    }
});

var flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ["American", "United", "Southwest"]
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    airport: {
        type: String,
        enum: ["AUS", "DAL", "LAX", "SEA"],
        default: "SEA",
    },
    destination: {
        type: [destinationSchema],
    }, 
    tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]
});


module.exports = mongoose.model('Flight', flightSchema);