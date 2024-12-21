const express = require('express');
const routes = express.Router();
const AnnotationController = require('./controller/AnnotationController')


// Rota Annotations
routes.get('/annotations', AnnotationController.create);


module.exports = routes;