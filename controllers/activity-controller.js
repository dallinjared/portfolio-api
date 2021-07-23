const activityService = require('../services/activity-service')

module.exports = function (app) {
    //Activities
    
    //Activities -- Get
    app.get('/api/v1/activities/', (req, res) => activityService.findAllActivities().then(allActivities => res.json(allActivities)));

    //Activites -- Post
    app.post('/api/v1/activities/', (req, res) => activityService.addNewActivity(req.body).then(newActivity => res.json(newActivity)));

}