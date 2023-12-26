const express = require('express');
const router = express.Router();
const {storeSlots, getSlots} = require('../controllers/slotController')

router.post('/storeSlots', storeSlots);
router.get('/getSlots', getSlots);

module.exports = router;