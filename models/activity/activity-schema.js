const mongoose = require('mongoose');
const activitySchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
}, {collection: 'activities'});
module.exports = activitySchema;