const activityService = require('../services/activity-service')

module.exports = function (app) {
    //Activities
    
    //Get
    app.get('/api/v1/activities/', (req, res) => activityService.findAllActivities().then(allActivities => res.json(allActivities)));
    app.get('/api/v1/activities/:bid', (req, res) => activityService.findActivityById(req.params['bid']).then(activity => res.json(activity)));
    app.get('/api/v1/activities/title/:aname', (req, res) => activityService.findActivityByTitle(req.params['aname']).then(activity => res.json(activity)));

    //Post
    app.post('/api/v1/activities/', (req, res) => activityService.addNewActivity(req.body).then(newActivity => res.json(newActivity)));

    //Patch
    app.patch('/api/v1/activities/:bid', (req, res) => activityService.updateActivity(req.params['bid'], req.body).then(status => res.send(status)));
    
    //Delete
    app.delete('/api/v1/activities/:bid', (req, res) => activityService.deleteActivityById(req.params['bid']).then(status => res.send(status)));

}