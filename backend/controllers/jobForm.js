const Job = require('../models/jobForm');

const createJob = async (req, res) => { 
  try {
    const jobData = req.body;
    const newJob = new Job(jobData);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ error: 'Could not create job listing' });
  }
};

const getJob =  async (req, res) => {
  
    try {
      const jobId = req.params._Id; 
      const jobListing = await Job.findById(jobId);
      res.json(jobListing);
    } catch (error) {
      res.status(500).json({ error: 'Could not retrieve job listings' });
    }
  };

module.exports = { createJob,getJob };
//   const updateJob =  async (req, res) => {
//     const jobId = req.params.id;
//     const updatedJobData = req.body;
  
//     try {
//       const updatedJob = await PostJob.findByIdAndUpdate(jobId, updatedJobData, { new: true });
  
//       if (!updatedJob) {
//         return res.status(404).json({ message: 'Job not found' });
//       }
  
//       res.json(updatedJob);
//     } catch (error) {
//       res.status(500).json({ error: 'Error updating job', details: error });
//     }
//   };

//   const removeJob = async (req, res) => {
//     const jobId = req.params.id;
  
//     try {
//       const deletedJob = await PostJob.findByIdAndDelete(jobId);
  
//       if (!deletedJob) {
//         return res.status(404).json({ message: 'Job not found' });
//       }
  
//       res.json({ message: 'Job deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Error deleting job', details: error });
//     }
//   };

  // module.exports = {createJob,getJob,updateJob,removeJob};