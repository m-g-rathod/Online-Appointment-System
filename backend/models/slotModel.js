const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slotSchema = new Schema({
    doctor_id : {
        type: Number
    },

    slot_date: {
        type: String,
    },

    slot_type: {
        type: String
    },

    slot_time : {
        type: String
    }
});

module.exports = mongoose.model('Slot', slotSchema);