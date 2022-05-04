const courService = require('../services/cour-service');


module.exports = {
    getAllCour,
    createCour,
    getByIdCour,
    updateCourById,
    deleteCourById
}

function createCour(req, res) {
    courService.createCour(req.body)
    .then(() => res.send({ message: 'Insertion cour réussi'})
   )
    .catch(error=> {
        res.status(500).send({
            message: error.message
        })
    })
       
}

 function getAllCour (req, res)  {
    courService.getAllCour(req.params)
        .then(cours =>{
             res.json(cours),
             console.log(cours)
        })
}

function getByIdCour(req, res) {
    courService.getByIdCour(req.params._id)
    .then(cour => {
        res.send(cour)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ce cour n'existe pas"
            });
        }
        return res.status(500).send({
            message: "Donner l'id de ce cour"
        })
    })
}

function updateCourById(req, res) {
    courService.updateCourById(req.params.id,req.body)
    .then(cour => {
        if(!cour) {
            return res.status(404).send({
                message: " ce Cour non trouvee"
            })    
        }
        res.send(cour)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cour non trouvee"
            })
        }
        return res.status(500).send({
            message: "Error"
        });
    });

}

function deleteCourById(req, res){
    courService.deleteCourById(req.params.id)
        .then(() =>res.json({
            message: "Cour supprimé avec succés"
        }))
        .catch((err)=> res.send(err))

}