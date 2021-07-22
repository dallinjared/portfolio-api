const mongoose = require('mongoose');
const jobSchema = require('./job-schema');
const jobModel = mongoose.model(
    'JobModel',
    jobSchema
);
module.exports = jobModel;