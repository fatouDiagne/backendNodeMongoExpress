const classeService = require('../services/classe-service');


module.exports = {
    getAllClasse,
    createClasse,
    getByIdClasse,
    updateClasseById,
    deleteClasseById
}

function createClasse(req, res) {
    classeService.createClasse(req.body)
    .then(() => res.send({ message: 'Insertion Classe réussi'})
   )
    .catch(error=> {
        res.status(500).send({
            message: error.message
        })
    })
       
}

 function getAllClasse (req, res)  {
    classeService.getAllClasse(req.params)
        .then(Classes =>{
             res.json(Classes),
             console.log(Classes)
        })
}

function getByIdClasse(req, res) {
    classeService.getByIdClasse(req.params._id)
    .then(Classe => {
        res.send(Classe)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ce Classe n'existe pas"
            });
        }
        return res.status(500).send({
            message: "Donner l'id de ce Classe"
        })
    })
}

function updateClasseById(req, res) {
    classeService.updateClasseById(req.params.id,req.body)
    .then(Classe => {
        if(!Classe) {
            return res.status(404).send({
                message: " ce Classe non trouvee"
            })    
        }
        res.send(Classe)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Classe non trouvee"
            })
        }
        return res.status(500).send({
            message: "Error"
        });
    });

}

function deleteClasseById(req, res){
    classeService.deleteClasseById(req.params.id)
        .then(() =>res.json({
            message: "Classe supprimé avec succés"
        }))
        .catch((err)=> res.send(err))

}