const Models = require('../models/models')

//Get
const findAllActivities = () => Models.activityModel.find()
const findActivityById = (bid) => Models.activityModel.findById(bid);
const findActivityByTitle = (aname) => Models.activityModel.find({"title": aname});

//Post
const addNewActivity = (newActivity) => Models.activityModel.create(newActivity);

//Patch
const updateActivity = (bid, updatedActivity) => Models.activityModel.updateOne({'_id' : bid }, {$set: updatedActivity})

//Delete
const deleteActivityById = (bid) => Models.activityModel.deleteOne({_id: bid});


module.exports = {
    findAllActivities,
    findActivityById,
    findActivityByTitle,
    addNewActivity,
    updateActivity,
    deleteActivityById
}