const jobService = require('../services/job-service')

module.exports = function (app) {
    //Jobs

    //Jobs -- Get
    app.get('/api/v1/jobs/', (req, res) => jobService.findAllJobs().then(allJobs => res.json(allJobs)));
    app.get('/api/v1/jobs/:bid', (req, res) => jobService.findJobsById(req.params['bid']).then(job => res.json(job)));
    app.get('/api/v1/jobs/company/:name', (req, res) => jobService.findJobByCompany(req.params['name']).then(job => res.json(job)));app.get('/api/v1/jobs/position/:title', (req, res) => jobService.findJobByCompany(req.params['title']).then(job => res.json(job)));

    //Jobs -- Post
    app.post('/api/v1/jobs/', (req, res) => jobService.addNewJob(req.body).then(newJob => res.json(newJob)));


    //Jobs -- Delete
    app.delete('/api/v1/jobs/:bid', (req, res) => jobService.deleteJobByID(req.params['bid']).then(status => res.send(status)))

    //Jobs -- Patch
    app.patch('/api/v1/jobs/:bid', (req, res) => jobService.updateJob(req.params['bid'], req.body).then(status => res.send(status)));

    //Jobs -- Put
    app.put('/api/v1/jobs/:bid', (req, res) => jobService.updateJob(req.params['bid'], req.body).then(status => res.send(status)));

}