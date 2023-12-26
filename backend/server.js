require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctorRoutes');
const slotRoutes = require('./routes/slotRoutes');

const app = express();
const port = 5000;

app.use(cors());

app.use('/api', doctorRoutes);
app.use('/api', slotRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(port, () => {
        console.log(`connected to db & server running on port ${port}`);
    });
}).catch((err) => {
    console.log(err);
});