const express = require('express');
const router = express.Router();
const { createApplication, getMyApplications } = require('../controllers/applications.controller');
const verifyToken = require('../middleware/auth.middleware');

router.post('/', verifyToken, createApplication);
router.get('/my', verifyToken, getMyApplications);

module.exports = router;
