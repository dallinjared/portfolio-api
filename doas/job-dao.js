const jobModel = require('../models/job/job-model')

const findAllJobs = () => jobModel.find()
const findJobsByCompany = (company) => jobModel.findByCompany(company)
const findJobByPosition = (position) => jobModel.find({'position' : position.toLowerCase()});
const deleteJobByCompany = (company) => jobModel.deleteOne({"company": company});
const addNewJob = (newJob) => jobModel.create(newJob);
const updateJob = (company, updatedJob) => jobModel.updateOne({"company": company}, {$set: updatedJob});

module.exports = {
    findAllJobs,
    findJobsByCompany,
    findJobByPosition,
    deleteJobByCompany,
    addNewJob,
    updateJob
}