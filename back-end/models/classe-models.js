const mongoose = require('mongoose');
const { Schema } = mongoose;

const classeSchema = new Schema({
    libelleClasse: {type: String, required: true},
});

module.exports = mongoose.model('Classe', classeSchema);