const mongoose = require('mongoose');
const { Schema } = mongoose;

const matiereShema = new Schema({
    libelleMatiere: {type: String, required: true}
    /*cours: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cour'
    }*/
});

module.exports = mongoose.model('Matiere', matiereShema);