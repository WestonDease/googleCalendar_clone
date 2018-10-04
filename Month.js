const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MonthSchema = new Schema ({
    monthNum: {
        type: Number,
        required: true
    },
    dayNum: {
        type: Number, 
        required: true
    },
    dayAmt: {
        type: Number,
        required: true
    }
    
});

var Month = mongoose.model("Month", MonthSchema);

module.exports = Month;