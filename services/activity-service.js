const activityDao = require('../doas/activity-dao');

const findAllActivities = () => activityDao.findAllActivities()
const addNewActivity = (newActivity) => activityDao.addNewActivity(newActivity)



module.exports = {
    findAllActivities,
    addNewActivity
}