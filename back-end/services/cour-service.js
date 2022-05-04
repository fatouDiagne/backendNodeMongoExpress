const db= require('../config/db.js');
const cour = require('../models/cour-models.js');
const matiere = require('../models/matiere-models.js');

module.exports = {
    getAllCour,
    createCour,
    getByIdCour,
    updateCourById,
    deleteCourById
}
async function getAllCour(){
   return await cour.find().populate('matieres').populate('salles').populate('classes');
}

async function getByIdCour(idCour) {
        const mycour = await cour.findById(idCour).populate("matieres");
           return mycour; 
}

 async function createCour(params){
    const newCour = new cour(params);
    return await newCour.save();
}

async function updateCourById(idCour, params) {
    
    return await cour.findOneAndUpdate(idCour,{ $set: params}, {new: true})
      
}

async function deleteCourById(idCour){
    return await cour.deleteOne({_id: idCour});
}