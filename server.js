const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(
    cors({
             credentials: true,
             origin: true
         })
);
app.options('*', cors());

mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser: true,
    useUnifiedTopology: true});

require("./controllers/job-controller")(app);
require("./controllers/activity-controller")(app);

app.listen(process.env.PORT || 3000, () =>
    console.log("Server is running @3000 ...")
);
