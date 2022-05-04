const { populate } = require('../models/emploieTempsClasse-models.js');
const emploieTempsClasse = require('../models/emploieTempsClasse-models.js');


module.exports = {
    getAllEmploieTempsClasse,
    createEmploieTempsClasse,
    getByIdEmploieTempsClasse,
    updateEmploieTempsClasseById,
    deleteEmploieTempsClasseById
}
async function getAllEmploieTempsClasse(){
   return await emploieTempsClasse.find().populate('cours');
}

async function getByIdEmploieTempsClasse(idemploieTempsClasse) {
        const myemploieTempsClasse = await emploieTempsClasse.findById(idemploieTempsClasse).populate('cours',populate('classes'),populate('salles'),populate('matieres'));
        /*
         path: 'cours',
            model: 'Cour',
            populate: {
                path: 'classes',
                model: 'CLasse'
            },
            populate: {
                path: 'matieres',
                model: 'Matiere'
            },
            populate:{
                path: 'salles',
                model: 'Salle'
            }
        */
           return myemploieTempsClasse; 
}

 async function createEmploieTempsClasse(params){
    const newemploieTempsClasse = new emploieTempsClasse(params);
    return await newemploieTempsClasse.save();
}

async function updateEmploieTempsClasseById(idemploieTempsClasse, params) {
    
    return await emploieTempsClasse.findOneAndUpdate(idemploieTempsClasse,{ $set: params}, {new: true})
      
}

async function deleteEmploieTempsClasseById(idemploieTempsClasse){
    return await emploieTempsClasse.deleteOne({_id: idemploieTempsClasse});
}