const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
}, {collection: 'activities'});

const jobSchema = mongoose.Schema({
    position: String,
    company: String,
    type: {
        type: String,
        enum: [
            'Intern', 
            'Full-Time', 
            'Part-Time', 
            'Freelance']
    },
    start: Date,
    end: Date,
    location: {
        city: String,
        state: String,
    },
    description: String,
}, {collection: 'jobs'});

module.exports = {
    activitySchema,
    jobSchema
};