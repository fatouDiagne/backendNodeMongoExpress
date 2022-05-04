const db= require('../config/db.js');
const salle = require('../models/salle-models.js');

module.exports = {
    getAllSalle,
    createSalle,
    getByIdSalle,
    updateSalleById,
    deleteSalleById
}
async function getAllSalle(){
    return await salle.find();
}

async function getByIdSalle(idSalle) {
    
        const mySalle= await salle.findById(idSalle);
           return mySalle; 
   
}

async function createSalle(params){
    const newSalle = new salle(params);
    return await newSalle.save();
}

async function updateSalleById(idSalle, params){
    return await salle.findOneAndUpdate(idSalle,{ $set: params}, {new: true})
      
}

async function deleteSalleById(idSalle){
    return await salle.deleteOne({_id: idSalle});
}