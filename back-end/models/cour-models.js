const mongoose = require('mongoose');
const { Schema } = mongoose;

const courSchema = new Schema({
    classes : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classe'
    },
    matieres : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Matiere'
    },
    salles : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Salle'
    },
    heureDebut: {type: mongoose.Date, required: true},
    heureFin: {type: mongoose.Date, required: true},
    
    //libelleMatiere: {type: String, required: true},
    //libelleSalle: {type: String, required: true},
    //libelleClasse: {type: String, required: true},
});

module.exports = mongoose.model('Cour', courSchema);