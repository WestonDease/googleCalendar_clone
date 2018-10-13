const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CalendarSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    events: {
        type: Array,
        required: true
    },
    selected: {
        type: Boolean,
        required: true
    }

});

var Calendar = mongoose.model("Calendar", CalendarSchema);

module.exports = Calendar;