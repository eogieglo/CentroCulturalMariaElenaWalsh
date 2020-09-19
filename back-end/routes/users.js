var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
/* GET users listing. */
router.post('/', userController.create);


module.exports = router;
