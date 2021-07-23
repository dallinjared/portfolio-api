const Model = require('../models/models')

const findAllJobs = () => Model.jobModel.find();
const findJobsById = (bid) => Model.jobModel.findById(bid);
const deleteJobByID = (bid) => Model.jobModel.deleteOne({_id: bid});
const addNewJob = (newJob) => Model.jobModel.create(newJob);
const updateJob = (bid, updatedJob) => Model.jobModel.updateOne({"_id": bid}, {$set: updatedJob});

const findJobByCompany = (cname) => Model.jobModel.find({"company" : cname}, );


module.exports = {
    findAllJobs,
    findJobsById,
    findJobByCompany,
    deleteJobByID,
    addNewJob,
    updateJob
}