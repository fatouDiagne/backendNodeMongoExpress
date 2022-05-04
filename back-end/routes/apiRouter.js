const express = require('express');
const courController = require('../controllers/cour-controller.js');
const matiereController = require('../controllers/matiere-controller.js');
const salleController = require('../controllers/salle-controller.js');
const classeController = require('../controllers/classe-controller.js');
const emploieTempsClasseController = require('../controllers/emploieTempsClasse-controller.js');

exports.router = (function () {
    let apiRouter = express.Router();
    //routes for cour
    apiRouter.route("/cour").get(courController.getAllCour);
    apiRouter.route("/cour").post(courController.createCour);
    apiRouter.route("/cour/:_id").get(courController.getByIdCour);
    apiRouter.route("/cour/:_id").put(courController.updateCourById);
    apiRouter.route("/cour/:id").delete(courController.deleteCourById);

    //routes for matiere
    apiRouter.route("/matiere").get(matiereController.getAllMatiere);
    apiRouter.route("/matiere").post(matiereController.createMatiere);
    apiRouter.route("/matiere/:_id").get(matiereController.getByIdMatiere);
    apiRouter.route("/matiere/:_id").put(matiereController.updateMatiereById);
    apiRouter.route("/matiere/:id").delete(matiereController.deleteMatiereById);

    //routes for salles
    apiRouter.route("/salle").get(salleController.getAllSalle);
    apiRouter.route("/salle").post(salleController.createSalle);
    apiRouter.route("/salle/:_id").get(salleController.getByIdSalle);
    apiRouter.route("/salle/:_id").put(salleController.updateSalleById);
    apiRouter.route("/salle/:id").delete(salleController.deleteSalleById);

    //routes for classe
    apiRouter.route("/classe").get(classeController.getAllClasse);
    apiRouter.route("/classe").post(classeController.createClasse);
    apiRouter.route("/classe/:_id").get(classeController.getByIdClasse);
    apiRouter.route("/classe/:_id").put(classeController.updateClasseById);
    apiRouter.route("/classe/:id").delete(classeController.deleteClasseById);

    //routes for emploie du temps de la classe
    apiRouter.route("/emploieTempsClasse").get(emploieTempsClasseController.getAllEmploieTempsClasse);
    apiRouter.route("/emploieTempsClasse").post(emploieTempsClasseController.createEmploieTempsClasse);
    apiRouter.route("/emploieTempsClasse/:_id").get(emploieTempsClasseController.getByIdEmploieTempsClasse);
    apiRouter.route("/emploieTempsClasse/:_id").put(emploieTempsClasseController.updateEmploieTempsClasseById);
    apiRouter.route("/emploieTempsClasse/:id").delete(emploieTempsClasseController.deleteEmploieTempsClasseById);

    return apiRouter;
})();