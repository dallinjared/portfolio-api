const Model = require('../models/models')

const findAllActivities = () => Model.activityModel.find()
const addNewActivity = (newActivity) => Model.activityModel.create(newActivity);


module.exports = {
    findAllActivities,
    addNewActivity
}