const db= require('../config/db.js');
const matiere = require('../models/matiere-models.js');

module.exports = {
    getAllMatiere,
    createMatiere,
    getByIdMatiere,
    updateMatiereById,
    deleteMatiereById
}
async function getAllMatiere(){
    return await matiere.find();
}

async function getByIdMatiere(idMatiere) {
        const myMatiere = await matiere.findById(idMatiere);
           return myMatiere; 
}

async function createMatiere(params){
    const newMatiere = new matiere(params);
    return await newMatiere.save();
}

async function updateMatiereById(idMatiere, params) {
    return await matiere.findOneAndUpdate(idMatiere,{ $set: params}, {new: true})
}

async function deleteMatiereById(idMatiere){
    return await matiere.deleteOne({_id: idMatiere});
}