// routers/employerRoutes.js
const express = require('express');
const router = express.Router();
const Employer = require('../models/employer'); // Import the Employer model

// Define routes for employers

// Create a new employer
router.post('/register/employer', async (req, res) => {
  try {
    const newEmployer = new Employer(req.body);
    await newEmployer.save();
    res.status(201).json(newEmployer);
  } catch (error) {
    res.status(500).json({ error: 'Could not create employer' });
  }
});

// Get all employers
router.get('/employer', async (req, res) => {
  try {
    const employers = await Employer.find();
    res.json(employers);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve employers' });
  }
});



module.exports = router;
