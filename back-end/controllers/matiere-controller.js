const matiereController = require('../services/matiere-service');

module.exports ={
    getAllMatiere,
    createMatiere,
    getByIdMatiere,
    updateMatiereById,
    deleteMatiereById
}

function createMatiere(req, res) {
    matiereController.createMatiere(req.body)
    .then(() => res.send({ message: 'Insertion matiere réussi'})
   )
    .catch(error=> {
        res.status(500).send({
            message: error.message
        })
    })
       
}

 function getAllMatiere (req, res)  {
    matiereController.getAllMatiere()
        .then(matieres =>{
             res.json(matieres)
        })
}

function getByIdMatiere(req, res) {
    matiereController.getByIdMatiere(req.params._id)
    .then(matiere => {
        res.send(matiere)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ce Matiere n'existe pas"
            });
        }
        return res.status(500).send({
            message: "Donner l'id de ce Matiere"
        })
    })
}

function updateMatiereById(req, res) {
    matiereController.updateMatiereById(req.params.id,req.body)
    .then(Matiere => {
        if(!Matiere) {
            return res.status(404).send({
                message: " matiere non trouvee"
            })    
        }
        res.send(Matiere)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "matiere non trouvee"
            })
        }
        return res.status(500).send({
            message: "Error"
        });
    });

}

function deleteMatiereById(req, res){
    matiereController.deleteMatiereById(req.params.id)
        .then(() =>res.json({
            message: "Matiere supprimé avec succés"
        }))
        .catch((err)=> res.send(err))

}