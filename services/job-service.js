const jobDao = require('../doas/job-dao');

//Get
const findAllJobs = () => jobDao.findAllJobs();
const findJobsById = (bid) => jobDao.findJobsById(bid);
const findJobByCompany = (cname) => jobDao.findJobByCompany(cname);
const findJobByActive = (bool) => jobDao.findJobByActive(bool);

//Push
const addNewJob = (newJob) => jobDao.addNewJob(newJob);

//Patch
const updateJob = (bid, updatedJob) => jobDao.updateJob(bid, updatedJob);

//Delete
const deleteJobByID = (bid) => jobDao.deleteJobByID(bid);

module.exports = {
    findAllJobs,
    findJobsById,
    findJobByCompany,
    findJobByActive,
    deleteJobByID,
    addNewJob,
    updateJob
}