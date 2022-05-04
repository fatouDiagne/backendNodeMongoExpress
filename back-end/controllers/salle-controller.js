const salleService = require('../services/salle-service');


module.exports = {
    getAllSalle,
    createSalle,
    getByIdSalle,
    updateSalleById,
    deleteSalleById
}

function createSalle(req, res) {
    salleService.createSalle(req.body)
    .then(() => res.send({ message: 'Insertion Salle réussi'})
   )
    .catch(error=> {
        res.status(500).send({
            message: error.message
        })
    })
       
}

 function getAllSalle (req, res)  {
    salleService.getAllSalle(req.params)
        .then(salles =>{
             res.json(salles),
             console.log(salles)
        })
}

function getByIdSalle(req, res) {
    salleService.getByIdSalle(req.params._id)
    .then(salle => {
        res.send(salle)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ce salle n'existe pas"
            });
        }
        return res.status(500).send({
            message: "Donner l'id de ce Salle"
        })
    })
}

function updateSalleById(req, res) {
    salleService.updateSalleById(req.params.id,req.body)
    .then(salle => {
        if(!salle) {
            return res.status(404).send({
                message: "salle non trouvee"
            })    
        }
        res.send(salle)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "salle non trouvee"
            })
        }
        return res.status(500).send({
            message: "Error"
        });
    });

}

function deleteSalleById(req, res){
    salleService.deleteSalleById(req.params.id)
        .then(() =>res.json({
            message: "Salle supprimé avec succés"
        }))
        .catch((err)=> res.send(err))

}