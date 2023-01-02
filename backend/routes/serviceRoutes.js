const express = require('express');
const api = express.Router();
const serviceController = require('../controllers/serviceController');

api.post('/service', serviceController.createService);
api.get('/services', serviceController.getServices);
api.get('/service/search/:id', serviceController.getSpecificService);
api.put('/service/update/:id', serviceController.updateService);
api.delete('/service/delete/:id', serviceController.deleteService);
//api.post('/login',serviceController.login);
//api.post('/login', checkRUT);
module.exports = api;