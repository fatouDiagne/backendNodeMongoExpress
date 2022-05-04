
const classe = require('../models/classe-models.js');

module.exports = {
    getAllClasse,
    createClasse,
    getByIdClasse,
    updateClasseById,
    deleteClasseById
}
async function getAllClasse(){
    return await classe.find();
}

async function getByIdClasse(idClasse) {
        const myClasse = await classe.findById(idClasse);
           return myClasse; 
   
}

async function createClasse(params){
        console.log('Cette classe existe déjà')
    const newClasse = new classe(params);
    return await newClasse.save();
}

async function updateClasseById(idClasse, params) {
    
    return await classe.findOneAndUpdate(idClasse,{ $set: params}, {new: true})
      
}

async function deleteClasseById(idClasse){
    return await classe.deleteOne({_id: idClasse});
}