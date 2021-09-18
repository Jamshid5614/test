const express = require('express');
const router = express.Router();
const controller = require('../controllers/car');


router.get('/',controller.fetchAllCars);
router.post('/new',controller.createNewCar);
router.get('/delete/all',controller.deleteAll)




module.exports = router;







