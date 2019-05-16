var mongoose = require('mongoose');

var Schema = mongoose.Schema;

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
});


module.exports = mongoose.model('Flight', flightSchema);