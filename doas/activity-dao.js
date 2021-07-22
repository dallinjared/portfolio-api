const activityModel = require('../models/activity/activity-model')

const findAllActivities = () => activityModel.find()
const addNewActivity = (newActivity) => activityModel.create(newActivity);


module.exports = {
    findAllActivities,
    addNewActivity
}