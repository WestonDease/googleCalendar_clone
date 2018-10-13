const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EventSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: false,
    },

    date: {
        type: String,
        required: true,

    },

    repeating: {
        type: Boolean,
        required: true
    },

    repeat: {
        type: Array,
        required: false
    },

    dayOfWeek: {
        type: String,
        required: true
    }
});

var CalEvent = mongoose.model("Event", EventSchema);

module.exports = CalEvent;