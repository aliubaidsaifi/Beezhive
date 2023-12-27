const express = require('express');
const router = express.Router();



const { createJob, getJob, updateJob, removeJob } = require('../controllers/jobForm');

// Create a new job listing
router.route('/create/postjob').post(createJob);
router.route('/get/jobs').get(getJob);

module.exports = router;
