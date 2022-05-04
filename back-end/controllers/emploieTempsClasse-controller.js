const emploieTempsClasseService = require('../services/EmploieTempsClasse-service');


module.exports = {
    getAllEmploieTempsClasse,
    createEmploieTempsClasse,
    getByIdEmploieTempsClasse,
    updateEmploieTempsClasseById,
    deleteEmploieTempsClasseById
}

function createEmploieTempsClasse(req, res) {
    emploieTempsClasseService.createEmploieTempsClasse(req.body)
    .then(() => res.send({ message: 'Insertion Emploie Temps Classe réussi'})
   )
    .catch(error=> {
        res.status(500).send({
            message: error.message
        })
    })
       
}

 function getAllEmploieTempsClasse (req, res)  {
    emploieTempsClasseService.getAllEmploieTempsClasse(req.params)
        .then(EmploieTempsClasses =>{
             res.json(EmploieTempsClasses),
             console.log(EmploieTempsClasses)
        })
}

function getByIdEmploieTempsClasse(req, res) {
    emploieTempsClasseService.getByIdEmploieTempsClasse(req.params._id)
    .then(EmploieTempsClasse => {
        res.send(EmploieTempsClasse)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ce Emploie du Temps de la Classe n'existe pas"
            });
        }
        return res.status(500).send({
            message: "Donner l'id de cette Emploie du Temps de la Classe"
        })
    })
}

function updateEmploieTempsClasseById(req, res) {
    emploieTempsClasseService.updateEmploieTempsClasseById(req.params.id,req.body)
    .then(EmploieTempsClasse => {
        if(!EmploieTempsClasse) {
            return res.status(404).send({
                message: " Emploie du Temps de la Classe non trouvee"
            })    
        }
        res.send(EmploieTempsClasse)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Emploie du Temps de la Classe non trouvee"
            })
        }
        return res.status(500).send({
            message: "Error"
        });
    });

}

function deleteEmploieTempsClasseById(req, res){
    emploieTempsClasseService.deleteEmploieTempsClasseById(req.params.id)
        .then(() =>res.json({
            message: "Emploie du Temps de la Classe supprimé avec succés"
        }))
        .catch((err)=> res.send(err))

}