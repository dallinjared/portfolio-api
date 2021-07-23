const jobDao = require('../doas/job-dao');

const findAllJobs = () => jobDao.findAllJobs()
const findJobsById = (bid) => jobDao.findJobsById(bid)
const findJobByCompany = (cname) => jobDao.findJobByCompany(cname)
const deleteJobByID = (bid) => jobDao.deleteJobByID(bid)
const addNewJob = (newJob) => jobDao.addNewJob(newJob)
const updateJob = (bid, updatedJob) => jobDao.updateJob(bid, updatedJob);

module.exports = {
    findAllJobs,
    findJobsById,
    findJobByCompany,
    deleteJobByID,
    addNewJob,
    updateJob
}