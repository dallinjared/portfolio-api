const jobService = require('../services/job-service')

module.exports = function (app) {
    //Jobs
    //Jobs -- Get
    app.get('/api/v1/jobs/', (req, res) => jobService.findAllJobs().then(allJobs => res.json(allJobs)));
    app.get('/api/v1/jobs/:company', (req, res) => jobService.findJobsByCompany(req.params['company']).then(job => res.json(job)));
    app.get('/api/v1/jobs/:position', (req, res) => jobService.findJobByPosition(req.params['position']).then(jobs => res.json(jobs)));


    //Jobs -- Post
    app.post('/api/v1/jobs/', (req, res) => jobService.addNewJob(req.body).then(newJob => res.json(newJob)));


    //Jobs -- Delete
    app.delete('/api/v1/jobs/:company', (req, res) => jobService.deleteJobByCompany(req.params['company']).then(status => res.send(status)));


    //Jobs -- Put
    app.put('/api/v1/jobs/:company', (req, res) => jobService.updateJob(req.params['company'], req.body).then(status => res.send(status)));
}