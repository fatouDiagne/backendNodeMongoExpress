const config = require('./dbConfig.js');

const mongoose = require('mongoose');
const url = config.url;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});


var db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));