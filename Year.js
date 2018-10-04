const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var YearSchema = new Schema ({
    yearNum: {
        type: Number,
        required: true,
        unique: true
    },
    isLeapYear: {
        type: Boolean,
        required: true
    },
    selected: {
        type: Boolean,
        required: true
    },
    month: {
        type: Schema.ObjectId
    }
});

var Year = mongoose.model("Year", YearSchema);

module.exports = Year;