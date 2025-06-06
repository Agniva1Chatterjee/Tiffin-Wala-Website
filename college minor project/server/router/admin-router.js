const express = require('express');
const router = express.Router();
const getAllUser = require('../controllers/admin-controllers');

router.route('/users').get(getAllUser)


module.exports = router;