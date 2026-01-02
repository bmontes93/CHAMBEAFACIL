const express = require('express');
const router = express.Router();
const { getJobs, createJob, getMyJobs } = require('../controllers/jobs.controller');
const verifyToken = require('../middleware/auth.middleware');

router.get('/', getJobs);
router.get('/my', verifyToken, getMyJobs);
router.post('/', verifyToken, createJob);

module.exports = router;
