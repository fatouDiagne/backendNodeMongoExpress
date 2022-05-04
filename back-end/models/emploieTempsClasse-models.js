const mongoose = require('mongoose');
const { Schema } = mongoose;

const emploieTempsClassseSchema = new Schema({
    cours: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cour'
    },
    classes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classe'
    },
   numeroEmploieTempsClasse: {type: String, required: true},
   dateDebut: {type: Date, required:true},
   dateFin: {type: Date, required:true},
});

module.exports = mongoose.model('EmploieTempsClasse', emploieTempsClassseSchema);