// import CarsController from './CarsController';
// const carsController = require('./CarsController');

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

const carRoutes = require('./CarsController');
carRoutes(app);