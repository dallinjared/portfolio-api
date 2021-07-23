const mongoose = require('mongoose');
const Schemas = require('./schemas');


const activityModel = mongoose.model(
    'ActivityModel',
    Schemas.activitySchema
);

const jobModel = mongoose.model(
    'JobModel',
    Schemas.jobSchema
);

module.exports = {
    activityModel,
    jobModel
};