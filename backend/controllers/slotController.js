const Slot = require("../models/slotModel");
const Doctor = require("../models/doctorModel");

const storeSlots = async (req, res) => {

  Slot.insertMany(arr)
    .then((result) => {
      console.log("Documents inserted:", result);
    })
    .catch((error) => {
      console.error("Error inserting documents:", error);
    });
  // console.log(doctors);
  res.status(200);
};

const getSlots = async (req, res) => {

    const paramsString = req.query.params;
    const params = JSON.parse(decodeURIComponent(paramsString));
    
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const time = `${formattedHours}.${formattedMinutes} ${ampm}`;

    const doctor = await Doctor.find({doctor_id: params.doctor_id});
    const slots = await Slot.find({doctor_id: {$eq: params.doctor_id}, slot_date: { $eq: params.date}, slot_time: {$gt: time}});
    
    res.status(200).json({doctor: doctor, slots: slots});
};

module.exports = {
  storeSlots,
  getSlots
};
