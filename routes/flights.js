var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

//GET /flights/new new functionality
router.get('/new', flightsCtrl.new)
//POST /flights
router.post('/', flightsCtrl.create);
//GET /flights index functionality
router.get('/', flightsCtrl.index);

module.exports = router;
