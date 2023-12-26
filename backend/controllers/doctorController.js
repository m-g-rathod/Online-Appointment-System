const Doctor = require('../models/doctorModel');

const getDoctors = async (req, res) => {
    const doctors = await Doctor.find({});
    // console.log(doctors);
    res.status(200).json(doctors);
}

module.exports = {
    getDoctors
}
