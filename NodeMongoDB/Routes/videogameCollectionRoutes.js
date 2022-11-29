'use strict'; 
 
module.exports = function(app) { 
  var gameCollection = require('../Controllers/gameCollectionController'); 
 
  app.route('/games') 
    .get(gameCollection.obtener_juegos) 
    .post(gameCollection.agregar_juegos); 
 
  app.route('/games/:id') 
    .get(gameCollection.obtener_juegos); 
}; 