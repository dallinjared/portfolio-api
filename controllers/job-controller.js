const jobService = require('../services/job-service')

module.exports = function (app) {
    //Jobs

    //Get
    app.get('/api/v1/jobs/', (req, res) => jobService.findAllJobs().then(allJobs => res.json(allJobs)));
    app.get('/api/v1/jobs/:bid', (req, res) => jobService.findJobsById(req.params['bid']).then(job => res.json(job)));
    app.get('/api/v1/jobs/company/:name', (req, res) => jobService.findJobByCompany(req.params['name']).then(job => res.json(job)));
    app.get('/api/v1/jobs/position/:title', (req, res) => jobService.findJobByCompany(req.params['title']).then(job => res.json(job)));
    app.get('/api/v1/jobs/current/:bool', (req, res) => jobService.findJobByActive(req.params['bool']).then(job => res.json(job)));

    //Post
    app.post('/api/v1/jobs/', (req, res) => jobService.addNewJob(req.body).then(newJob => res.json(newJob)));
    
    //Patch
    app.patch('/api/v1/jobs/:bid', (req, res) => jobService.updateJob(req.params['bid'], req.body).then(status => res.send(status)));

    //Delete
    app.delete('/api/v1/jobs/:bid', (req, res) => jobService.deleteJobByID(req.params['bid']).then(status => res.send(status)))
}