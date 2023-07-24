const express = require('express');
const router = express.Router();
const testController = require('../controllers/index');

router.post('/createtest', testController.createTest);
router.get('/getalltests', testController.getAllTests);
router.get('/gettest', testController.getTestById);
router.put('/updatetest', testController.updateTest);
router.delete('/deletetest', testController.deleteTest);

module.exports = router;
