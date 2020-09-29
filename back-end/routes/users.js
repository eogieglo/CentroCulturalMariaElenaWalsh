var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
/* GET users listing. */
router.post('/', userController.create);
router.post('/email', userController.sendEmail);



module.exports = router;
