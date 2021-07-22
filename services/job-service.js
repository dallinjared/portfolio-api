const jobDao = require('../doas/job-dao');

const findAllJobs = () => jobDao.findAllJobs()
const findJobsByCompany = (company) => jobDao.findJobsByCompany(company)
const findJobByPosition = (position) => jobDao.findJobByPosition(position)
const deleteJobByCompany = (company) => jobDao.deleteJobByCompany(company)
const addNewJob = (newJob) => jobDao.addNewJob(newJob)
const updateJob = (company, updatedJob) => jobDao.updateJob(bid, updatedJob);

module.exports = {
    findAllJobs,
    findJobsByCompany,
    findJobByPosition,
    deleteJobByCompany,
    addNewJob,
    updateJob
}