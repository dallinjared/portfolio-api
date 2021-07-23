const jobModel = require('../models/job/job-model')

const findAllJobs = () => jobModel.find();
const findJobsById = (bid) => jobModel.findById(bid);
const deleteJobByID = (bid) => jobModel.deleteOne({_id: bid});
const addNewJob = (newJob) => jobModel.create(newJob);
const updateJob = (bid, updatedJob) => jobModel.updateOne({"_id": bid}, {$set: updatedJob});

const findJobByCompany = (cname) => jobModel.find({'company' : cname.toLowerCase()});


module.exports = {
    findAllJobs,
    findJobsById,
    findJobByCompany,
    deleteJobByID,
    addNewJob,
    updateJob
}