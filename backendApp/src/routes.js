const express = require('express');
const OngController = require('./Controllers/OngController');
const IncidenteController = require('./Controllers/IncidentOngController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes =  express.Router();

routes.get('/ongs', OngController.Index); 
routes.post('/ongs',OngController.create); 

//Routers incidentes
routes.post('/incidents',IncidenteController.create); 
routes.get('/incidents',IncidenteController.index); 
routes.delete('/incidents/:id',IncidenteController.delete); 

//Routers Profile
routes.get('/profile',ProfileController.index); 

//Routers Session
routes.post('/Session',SessionController.create); 






module.exports = routes;


