const Model = require('../models/models')

//Get
const findAllJobs = () => Model.jobModel.find();
const findJobsById = (bid) => Model.jobModel.findById(bid);
const findJobByCompany = (cname) => Model.jobModel.find({"company" : cname});
const findJobByActive = (bool) => Model.jobModel.find({"current" : bool});

//Post
const addNewJob = (newJob) => Model.jobModel.create(newJob);

//Patch
const updateJob = (bid, updatedJob) => Model.jobModel.updateOne({"_id": bid}, {$set: updatedJob});

//Delete
const deleteJobByID = (bid) => Model.jobModel.deleteOne({_id: bid});


module.exports = {
    findAllJobs,
    findJobsById,
    findJobByCompany,
    findJobByActive,
    addNewJob,
    updateJob,
    deleteJobByID
}