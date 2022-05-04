const mongoose = require('mongoose');
const { Schema } = mongoose;

const salleShema = new Schema({
    numeroSalle: {type: String, required: true},
    batimentSalle: {type: String, required: true},
});

module.exports = mongoose.model('Salle', salleShema);