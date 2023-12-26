const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    doctor_id: {
        type: Number
    }, 

    name: {
        type: String
    }, 

    degree: {
        type: String
    },

    description: {
        type: String
    },

    clinic_addr: {
        type: String
    }
});

module.exports = mongoose.model('Doctor', doctorSchema);