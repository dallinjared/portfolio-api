const activityDao = require('../doas/activity-dao');

//Get
const findAllActivities = () => activityDao.findAllActivities();
const findActivityById = (bid) => activityDao.findActivityById(bid);
const findActivityByTitle = (aname) => activityDao.findActivityByTitle(aname);

//Post
const addNewActivity = (newActivity) => activityDao.addNewActivity(newActivity);

//Patch
const updateActivity = (bid, updatedActivity) => activityDao.updateActivity(bid, updatedActivity);

//Delete
const deleteActivityById = (bid) => activityDao.deleteActivityById(bid);


module.exports = {
    findAllActivities,
    findActivityById,
    findActivityByTitle,
    addNewActivity,
    updateActivity,
    deleteActivityById
}