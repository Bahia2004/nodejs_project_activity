const express = require('express');
const router = express.Router();
const hp = require('../controller/HpController');
router.get('/', hp.nom);
module.exports = router;