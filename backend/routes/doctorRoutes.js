const express = require('express');
const router = express.Router();
const {getDoctors} = require('../controllers/doctorController')

router.get('/getDoctors', getDoctors);

module.exports = router;