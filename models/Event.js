const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EventSchema = new Schema ({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false
    },

    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: false
    }
});

var CalEvent = mongoose.model("Event", EventSchema);

module.exports = CalEvent;